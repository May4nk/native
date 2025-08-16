import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

//const & types
import { user_pic } from "../constants/img";
import { nativefirepropstype } from "./types";

export default function NativeFire(props: nativefirepropstype) {
	const { user, videoURL, timeLeft } = props;
	const router = useRouter();

	return (
		<TouchableOpacity
			onPress={() =>
				router.push({
					pathname: "/screens/fire",
					params: { username: user?.username },
				})
			}
			className="py-4"
		>
			<View className="flex-row justify-start items-center">
				<Image
					source={{ uri: user.profile || user_pic }}
					className="size-14 rounded-full border border-gray-700"
				/>
				<View className="flex ml-3">
					<Text className="text-white text-2xl font-bold capitalize">
						{user?.username}
					</Text>
					<Text className="text-gray-400 text-lg">{timeLeft}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
