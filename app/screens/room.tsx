import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableOpacity,
	Vibration,
	View,
} from "react-native";
import "react-native-get-random-values";
import EmojiPicker from "rn-emoji-keyboard";

//components
import RoomHeader from "../components/room/RoomHeader";
import RoomMessages from "../components/room/RoomMessages";
import RoomSendMessage from "../components/room/RoomSendMessage";
import ShowImage from "../components/showImage";

//services
import { useNativeStore } from "../service";

//const & types
import { messagetype } from "../components/types";
import { nativestorestatetype } from "../service/types";

export default function Room() {
	const { username } = useLocalSearchParams();
	const profileMessages = useNativeStore(
		(state: nativestorestatetype) => state.profileMessages
	);

	//states
	const [isOpen, setIsOpen] = useState(false);
	const [images, setImages] = useState<string[]>([]);
	const [activeMessageId, setActiveMessageId] = useState<string | null>("");
	const [messageContent, setMessageContent] = useState({
		attachments: [] as string[],
		text: "",
	});

	//handlers
	const allMessages: messagetype[] =
		profileMessages.get(username as string) || [];

	const handleCollage = (open: boolean, images: string[]) => {
		setImages(open ? images : []);
	};

	const resetMediaAttachments = () => {
		Vibration.vibrate(10);
		setMessageContent({ ...messageContent, attachments: [] });
	};

	return (
		<View className="flex-1 bg-gray-800 pt-14">
			<RoomHeader
				username={username as string}
				activeMessageId={activeMessageId}
				setActiveMessageId={setActiveMessageId}
			/>

			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<RoomMessages
					roomMessages={allMessages}
					setImages={setImages}
					activeMessageId={activeMessageId}
					setActiveMessageId={setActiveMessageId}
				/>

				{messageContent.attachments.length > 0 && (
					<View className="p-4">
						<TouchableOpacity onPress={resetMediaAttachments}>
							<Ionicons
								size={16}
								color={"#ef9a9a"}
								name="trash-outline"
								className="ml-auto"
							/>
						</TouchableOpacity>
						<ScrollView
							horizontal
							contentContainerStyle={{ alignItems: "center" }}
						>
							{messageContent.attachments.map((uri: string, idx: number) => (
								<Image
									key={idx}
									source={{ uri }}
									className="border border-gray-700 rounded-xl size-24 mx-2"
								/>
							))}
						</ScrollView>
					</View>
				)}

				<RoomSendMessage
					setIsOpen={setIsOpen}
					username={username as string}
					messageContent={messageContent}
					setMessageContent={setMessageContent}
					resetMediaAttachments={resetMediaAttachments}
				/>
			</KeyboardAvoidingView>

			<EmojiPicker
				theme={{
					header: "#fff",
					knob: "#51a8efff",
					container: "#282829",
					backdrop: "#16161888",
					skinTonesContainer: "#252427",
					category: {
						icon: "#51a8efff",
						iconActive: "#fff",
						container: "#252427",
						containerActive: "#51a8efff",
					},
				}}
				open={isOpen}
				onClose={() => setIsOpen(false)}
				onEmojiSelected={(emoji) =>
					setMessageContent({
						...messageContent,
						text: `${messageContent.text + emoji.emoji}`,
					})
				}
			/>

			{images.length > 0 && (
				<ShowImage images={images} onClose={() => handleCollage(false, [])} />
			)}
		</View>
	);
}
