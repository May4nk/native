import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
	Image,
	Pressable,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

//const
import { user_pic } from "../constants/img";
import { useNativeStore } from "../service";

export default function UserProfile() {
	const { username } = useLocalSearchParams();
	const router = useRouter();

	const userProfiles = useNativeStore((state) => state.userProfiles);
	const messages = useNativeStore((state) => state.profileMessages);
	const userData = userProfiles.filter(
		(profile) => profile.username === username
	);

	const uData = userData?.[0];

	const userMedia = messages
		.get(uData.username)
		?.filter((msg) => msg.attachments.length !== 0);

	const uMedia = userMedia
		? userMedia?.length > 0 && userMedia[0].attachments
		: null;

	//handlers
	const copyToClipboard = async (text: string) => {
		await Clipboard.setStringAsync(text);
		console.log("Copied to clipboard!");
	};

	return (
		<View className="relative flex-1 bg-gray-950 pt-14 border-t">
			<Pressable
				onPress={() =>
					router.push({
						pathname: "/screens/room",
						params: { username },
					})
				}
			>
				<Ionicons
					size={23}
					name={"arrow-back"}
					color="#ffffff5c"
					className="px-4"
				/>
			</Pressable>
			<View className="flex items-center justify-start w-full">
				<Image
					source={{ uri: uData.profilePic || user_pic }}
					className="size-60 border border-gray-800 rounded-full my-2"
				/>
				<Text className="text-blue-200 pl-2 text-3xl font-bold">
					{uData.name}
				</Text>
				<Text className="text-gray-700 pl-2 text-2xl font-bold mt-2">
					{uData.number}
				</Text>
			</View>
			<View className="flex justify-center items-start p-4">
				<Text className="text-xl text-white">{uData.status}</Text>
				<Text className="text-sm text-gray-500">yesterday</Text>
			</View>
			<TouchableOpacity
				className="flex justify-center items-start p-4"
				onLongPress={() => copyToClipboard(`@${uData.username}`)}
			>
				<Text className="text-xl text-white">@{uData.username}</Text>
				<Text className="text-sm text-gray-500">username</Text>
			</TouchableOpacity>
			<TouchableOpacity
				className="flex justify-center items-start p-4"
				onLongPress={() => copyToClipboard(`:${uData.uuid}`)}
			>
				<Text className="text-xl text-white">:{uData.uuid}</Text>
				<Text className="text-sm text-gray-500">:id</Text>
			</TouchableOpacity>

			{uMedia && uMedia.length > 0 && (
				<View className="flex justify-start items center bg-gray-800 py-2">
					<View className="flex-row justify-between items-center px-4">
						<Text className="text-sm text-gray-300 uppercase mb-2">
							media & links
						</Text>
						<Text className="text-sm text-gray-300 uppercase mb-2">
							{uMedia.length}
						</Text>
					</View>
					<ScrollView
						horizontal
						className="bg-slate-800 px-4 py-2"
						showsHorizontalScrollIndicator={false}
					>
						<View className="flex-row justify-start items-center">
							{uMedia.map((media: string, idx: number) => (
								<TouchableOpacity
									key={idx}
									className="size-32 border rounded-md border-gray-700 mx-1"
								>
									<Image
										source={{ uri: media }}
										className="w-full h-full rounded-inherit"
									/>
								</TouchableOpacity>
							))}
						</View>
					</ScrollView>
				</View>
			)}
		</View>
	);
}
