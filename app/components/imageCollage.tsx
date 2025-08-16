import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ImageCollage({
	images,
	openCollage,
}: {
	images: string[];
	openCollage: (open: boolean, images: string[]) => void;
}) {
	if (!images || images.length === 0) return null;

	if (images.length > 2) {
		return (
			<View className="w-full flex-1 items-center h-32 flex-row relative">
				<TouchableOpacity
					onPress={() => openCollage(true, images)}
					className="flex-1 mr-0.5 items-center justify-center bg-gray-700"
				>
					<Image
						source={{ uri: images[0] }}
						resizeMode="cover"
						className="w-full h-full rounded-md"
					/>
				</TouchableOpacity>

				<View className="flex-1 ml-0.5">
					<TouchableOpacity
						onPress={() => openCollage(true, images)}
						className="flex-1 mt-0.5 items-center justify-center"
					>
						<Image
							source={{ uri: images[1] }}
							resizeMode="cover"
							className="w-full h-full rounded-md"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => openCollage(true, images)}
						className="flex-1 mt-0.5 items-center justify-center"
					>
						<Image
							source={{ uri: images[2] }}
							resizeMode="cover"
							className="w-full h-full rounded-md"
						/>
					</TouchableOpacity>
				</View>
				{images.length > 3 && (
					<View className="absolute bottom-1 right-1 flex-row items-center justify-start bg-gray-500 py-1 px-2 rounded-xl ">
						<Ionicons name={"duplicate-outline"} color={"white"} />
						<Text className="text-white"> {images.length - 3}+</Text>
					</View>
				)}
			</View>
		);
	}

	return (
		<View className="flex-row space-y-2">
			{images.map((uri: string, idx: number) => (
				<TouchableOpacity
					key={idx}
					onPress={() => openCollage(true, images)}
					className="flex-1 mr-0.5 items-center justify-center bg-gray-700"
				>
					<Image
						source={{ uri }}
						resizeMode="cover"
						className="w-full h-full rounded-md"
					/>
				</TouchableOpacity>
			))}
		</View>
	);
}
