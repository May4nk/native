import { Image, Text, View } from "react-native";
import { logo } from "../constants/img";

export default function Index() {
	return (
		<View className="flex-1 bg-gray-800 pt-14 border-t">
			<View className="h-16 px-4 flex-row items-center justify-start w-full">
				<Image source={logo} className="size-14" />
				<Text className="text-white pl-2 text-2xl text-lg font-bold font-mono uppercase">
					Native
				</Text>
			</View>
			<View className="flex-1 px-4 pt-4">
				<View className="border-b border-t px-1 py-6">
					<Text className="text-white">Your content goes here</Text>
				</View>
			</View>
		</View>
	);
}
