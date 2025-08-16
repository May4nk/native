import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { v4 } from "uuid";

//services
import { useNativeStore } from "../service";

//const & types
import { user_pic } from "../constants/img";
import { userprofiletype } from "../service/types";

interface contactpropstype {
	username: string;
	number: string;
	profilePic?: string;
}

export default function Contact(props: contactpropstype) {
	const { username, number, profilePic } = props;
	const router = useRouter();

	//store
	const addUserProfile = useNativeStore((state) => state.addUserProfiles);

	//handlers
	const handleNewContact = () => {
		const profile: userprofiletype = {
			id: v4(),
			name: username,
			status: "Trying to blend in",
			uuid: v4(),
			username: username,
			profilePic: profilePic || user_pic,
			number: number,
			newMessagesNotify: false,
			latestMessage: `👋 ${username} here, just leave a text...`,
		};

		addUserProfile(profile);
		router.push({
			pathname: "/screens/room",
			params: { username },
		});
	};

	return (
		<TouchableOpacity onPress={handleNewContact} className="py-2">
			<View className="flex-row w-full items-center flex-1">
				<Image
					source={{ uri: profilePic || user_pic }}
					className="size-14 rounded-full border border-gray-700"
				/>
				<View className="flex ml-3">
					<Text className="text-white text-2xl font-bold capitalize">
						{username}
					</Text>
					<Text className="text-gray-400 text-lg">{number}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
