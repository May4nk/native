import * as ImagePicker from "expo-image-picker";
import { Image, Text, TouchableOpacity, View } from "react-native";

//services
import { useNativeStore } from "../service";

export default function Profile() {
	const userInfo = useNativeStore((state) => state.user);

	const handleUserProfile = async () => {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== "granted") {
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			quality: 1,
		});

		if (!result.canceled) {
			console.log(result.assets[0].uri);
			// userProfile = result.assets[0].uri;
		}
	};

	return (
		<View className="flex-1 bg-gray-950 pt-14 border-t">
			<View className="h-16 flex-row items-center justify-start w-full px-4">
				<Text className="text-white pl-2 text-2xl font-bold font-mono capitalize">
					Profile
				</Text>
			</View>
			<View className="flex-1 justify-start items-center w-full h-full mt-10">
				<TouchableOpacity onPress={handleUserProfile}>
					<Image
						source={{ uri: userInfo.profilePic }}
						className="size-64 border border-dashed rounded-full border-gray-700"
					/>
				</TouchableOpacity>
				<View className="flex-row justify-center items-center w-full mt-2">
					<Text className="text-blue-200 text-3xl">{userInfo.name}</Text>
				</View>
				<View className="flex justify-start items-center w-full mt-2 px-4">
					<View className="flex justify-start items-start w-full my-2">
						<Text className="text-white text-xl">{userInfo.status}</Text>
						<Text className="text-gray-500">Status</Text>
					</View>
					<View className="flex justify-start items-start w-full my-2">
						<Text className="text-white text-xl">{userInfo.number}</Text>
						<Text className="text-gray-500">Mobile</Text>
					</View>
					<View className="flex justify-start items-start w-full my-2">
						<Text className="text-white text-xl">@{userInfo.username}</Text>
						<Text className="text-gray-500">Username</Text>
					</View>
					<View className="flex justify-start items-start w-full my-2">
						<Text className="text-white text-xl">:{userInfo.uuid}</Text>
						<Text className="text-gray-500">Id</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
