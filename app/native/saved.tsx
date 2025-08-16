import { Text, TextInput, View } from "react-native";

//components

export default function Saved() {
	return (
		<View className="flex-1 bg-gray-950 pt-14 border-t px-4">
			<View className="h-16 flex-row items-center justify-start w-full">
				<Text className="text-white pl-2 text-2xl font-bold font-mono capitalize">
					Saved
				</Text>
			</View>
			<View className="rounded-xl w-full mt-4 h-14 border border-blue-100/20">
				<TextInput
					placeholder="Search here..."
					placeholderTextColor="#9ca3af"
					className="text-white w-full h-full px-2"
				/>
			</View>
			<View className="mt-7 w-full">
				<View className="bg-gray-700 border rounded-lg p-4 w-full my-3">
					<Text className="text-blue-300 text-xl">Sam</Text>
					<View className="flex w-full mt-3">
						{/* <Message text={"boom"} sent={true} />
						<Message text={"hey"} sent={false} />
						<Message text={"dammn"} sent={false} /> */}
					</View>
				</View>
				<View className="bg-gray-700 border rounded-lg p-4 w-full my-3">
					<Text className="text-blue-300 text-xl">Boom</Text>
					<View className="flex w-full mt-3">
						{/* <Message text={"boom"} sent={true} /> */}
					</View>
				</View>
				<View className="bg-black border rounded-lg p-4 w-full my-3">
					<Text className="text-blue-300 text-xl">Carl</Text>
					<View className="flex w-full mt-3">
						{/* <Message text={"boom"} sent={true} /> */}
					</View>
				</View>
			</View>
		</View>
	);
}
