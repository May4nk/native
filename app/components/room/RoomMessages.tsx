import { useEffect, useRef } from "react";
import { Pressable, ScrollView } from "react-native";
import { v4 } from "uuid";

//components
import Message from "../message";

//service
import { useNativeStore } from "@/app/service";

//types
import { nativestorestatetype } from "@/app/service/types";
import { messagetype, reactiontype } from "../types";
import { messagespropstype } from "./types";

export default function RoomMessages(messagesprops: messagespropstype) {
	const { setImages, roomMessages, activeMessageId, setActiveMessageId } =
		messagesprops;

	const scrollViewRef = useRef<ScrollView>(null);
	const userInfo = useNativeStore((state: nativestorestatetype) => state.user);
	const addMessageReactions = useNativeStore(
		(state: nativestorestatetype) => state.addMessageReactions
	);

	//handlers
	const handleCollage = (open: boolean, images: string[]) => {
		setImages(open ? images : []);
	};

	const handleMessageReaction = (rxn: string) => {
		if (!activeMessageId) return;
		const userReaction: reactiontype = {
			participantUuid: userInfo.id,
			uuid: v4(),
			value: rxn,
		};
		addMessageReactions(userInfo.username, activeMessageId, userReaction);
		setActiveMessageId(null);
	};

	useEffect(() => {
		if (scrollViewRef.current) {
			scrollViewRef.current.scrollToEnd({ animated: true });
		}
	}, [roomMessages]);

	return (
		<Pressable className="flex-1" onPress={() => setActiveMessageId(null)}>
			<ScrollView
				ref={scrollViewRef}
				className="pb-4 flex-1 bg-gray-950"
				keyboardShouldPersistTaps="handled"
			>
				{roomMessages.map((msg: messagetype, idx: number) => (
					<Message
						key={idx}
						seen={0}
						msg={msg}
						openCollage={handleCollage}
						isAuthor={userInfo.id === msg.authorUuid}
						setActiveMessageId={setActiveMessageId}
						isTrayOpen={activeMessageId === msg.uuid}
						handleMessageReaction={handleMessageReaction}
					/>
				))}
			</ScrollView>
		</Pressable>
	);
}
