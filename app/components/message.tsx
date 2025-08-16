import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, Vibration, View } from "react-native";

//components
import ReactionTray from "./reactionTray";

//types
import ImageCollage from "./imageCollage";
import { messagepropstype, reactiontype } from "./types";

export default function Message(props: messagepropstype) {
	const {
		msg,
		seen,
		isAuthor,
		isTrayOpen,
		openCollage,
		setActiveMessageId,
		handleMessageReaction,
	} = props;
	const {
		uuid: id,
		sentAt,
		updatedAt,
		text,
		reactions,
		attachments,
		isStarred,
	} = msg;

	//handlers
	let now = new Date(sentAt);
	let hours = now.getHours();
	let minutes = now.getMinutes();
	const messageTime = `${hours}:${minutes}`;

	const handleLongPress = () => {
		Vibration.vibrate(10);
		setActiveMessageId(id);
	};

	return (
		<TouchableOpacity
			onLongPress={handleLongPress}
			activeOpacity={0.8}
			className={`mt-2 ${reactions.length > 0 ? "mb-4" : "mb-2"}`}
		>
			<View
				className={`
					shadow
					relative
					mx-4
					flex-row align-center
					${isTrayOpen ? "bg-black" : "bg-gray-800"}
					border border-t-gray-600 border-x-gray-600 border-b-2 rounded-lg 
					${!isAuthor ? "border-b-red-400 justify-start mr-auto" : "border-b-blue-400 justify-end ml-auto"}
				`}
				style={{
					shadowColor: !isAuthor ? "#271c1cff" : "#7eb4f2ff",
				}}
			>
				{isTrayOpen && (
					<View>
						<ReactionTray
							isIon={false}
							reactions={["🙂", "👍", "👎", "😎", "🤔"]}
							handlePress={handleMessageReaction}
							icnstyle="my-2"
							size={18}
							style={`
								p-2 bg-gray-800
								${isAuthor ? "-left-4" : "right-2"}
							`}
						/>
					</View>
				)}

				<View className="p-2 w-auto max-w-[80%]">
					<View className="flex-row flex-shrink flex-wrap max-w-[100%] items-center text-white">
						{attachments.length > 0 && (
							<View className="h-[400] w-full mb-2">
								<ImageCollage images={attachments} openCollage={openCollage} />
							</View>
						)}
						{msg.text.length > 0 && (
							<Text className="text-xl font-bold text-white">{text}</Text>
						)}
						<View className="flex-row justify-end items-end ml-auto">
							<Text className="text-xs font-bold ml-2 text-gray-400">
								{messageTime}
							</Text>
							<Ionicons
								size={16}
								color={seen === 1 ? "#4ade80" : "#9ca3af"}
								className={"ml-2"}
								name={
									seen >= 0 ? "checkmark-done-outline" : "checkmark-outline"
								}
							/>
						</View>
					</View>
				</View>

				{isStarred && (
					<Ionicons
						size={10}
						name={"star"}
						className="py-1 pr-1"
						color={isAuthor ? "#51a8efff" : "#ef7a86ff"}
					/>
				)}

				{reactions && reactions.length > 0 && (
					<View className={`absolute -bottom-6`}>
						<ReactionTray
							isIon={false}
							reactions={reactions.map((rxn: reactiontype) => rxn.value)}
							style={`flex-row ${!isAuthor ? "left-2 bg-blue-100" : "right-2 bg-red-100"}`}
						/>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
}
