import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { TextInput, TouchableOpacity, Vibration, View } from "react-native";
import { v4 } from "uuid";

//service
import { useNativeStore } from "@/app/service";

//const & types
import { nativestorestatetype } from "@/app/service/types";
import { messagetype } from "../types";
import { roomnewmessagepropstype } from "./types";

export default function RoomSendMessage(props: roomnewmessagepropstype) {
	const {
		setIsOpen,
		messageContent,
		username,
		setMessageContent,
		resetMediaAttachments,
	} = props;

	const userInfo = useNativeStore((state: nativestorestatetype) => state.user);
	const addProfileMessages = useNativeStore(
		(state: nativestorestatetype) => state.addProfileMessages
	);

	//handlers
	const handleMediaAttachments = async () => {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== "granted") return;

		resetMediaAttachments();

		const result = await ImagePicker.launchImageLibraryAsync({
			quality: 1,
			allowsMultipleSelection: true,
		});

		if (!result.canceled) {
			setMessageContent({
				...messageContent,
				attachments: result.assets.map((asset) => asset.uri),
			});
		}
	};

	const handleSend = () => {
		if (messageContent.text || messageContent.attachments.length) {
			const newMessage: messagetype = {
				uuid: v4(),
				text: messageContent.text,
				reactions: [],
				isStarred: false,
				updatedAt: null,
				attachments: messageContent.attachments,
				authorUuid: userInfo.id,
				sentAt: new Date().getTime(),
			};

			setMessageContent({ attachments: [], text: "" });
			addProfileMessages(username as string, [newMessage]);
		}
	};
	return (
		<View className="flex-row justify-center bg-gray-950 items-center w-full pb-4 px-4">
			<View className="flex-row flex-1 items-center rounded-full h-14 border border-blue-100/20 bg-gray-800 px-4">
				<TouchableOpacity className="mr-1" onPress={() => setIsOpen(true)}>
					<Ionicons size={20} name={"happy-outline"} color={"#ffffffb8"} />
				</TouchableOpacity>
				<TextInput
					placeholder="Message"
					value={messageContent.text}
					placeholderTextColor="#9ca3af"
					className="text-white flex-1 bg-gray-800"
					onChangeText={(text) =>
						setMessageContent({ ...messageContent, text })
					}
				/>
				<TouchableOpacity className="mr-1" onPress={handleMediaAttachments}>
					<Ionicons size={20} name={"duplicate-outline"} color={"#ffffffb8"} />
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				onPress={() => {
					Vibration.vibrate(10);
					handleSend();
				}}
				className="flex-row items-center rounded-full h-14 border border-blue-100/20 bg-gray-800 px-4 ml-1"
			>
				<Ionicons name={"send-outline"} size={16} color={"#ffffffb8"} />
			</TouchableOpacity>
		</View>
	);
}
