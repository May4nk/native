import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

//helpers
import editOptions from "@/app/helpers/handlers";

//const & types
import { user_pic } from "@/app/constants/img";
import { editoptiontype } from "@/app/helpers/types";
import { roomheaderpropstype } from "./types";

export default function RoomHeader(props: roomheaderpropstype) {
	const { activeMessageId, setActiveMessageId, username } = props;
	const router = useRouter();

	return (
		<View className="flex-row bg-gray-800 p-2 border-b border-green-200">
			<Pressable
				className="flex-row items-center"
				onPress={
					activeMessageId
						? () => setActiveMessageId(null)
						: () => router.push("/native")
				}
			>
				<Ionicons size={23} name={"arrow-back"} color="#ffffff5c" />
				<Image
					source={{ uri: user_pic }}
					className="size-12 rounded-full mr-2"
				/>
			</Pressable>

			{!activeMessageId && (
				<View
					className="flex-row items-center flex-1"
					onTouchStart={() =>
						router.push({
							pathname: "/screens/userProfile",
							params: { username },
						})
					}
				>
					<Text className="text-xl font-bold text-white">{username}</Text>
				</View>
			)}

			{activeMessageId ? (
				<View className="flex-row ml-auto">
					{editOptions.map((opt: editoptiontype, idx: number) => (
						<TouchableOpacity key={idx} onPress={opt.onPress}>
							<Ionicons
								size={20}
								name={opt.name}
								color={opt.color}
								className="mx-4"
							/>
						</TouchableOpacity>
					))}
				</View>
			) : (
				<View className="flex-row ml-auto">
					<TouchableOpacity>
						<Ionicons
							size={20}
							color={"white"}
							className="mx-2"
							name="search-outline"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Ionicons
							size={20}
							color={"white"}
							className="mx-2"
							name="ellipsis-vertical-outline"
						/>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}
