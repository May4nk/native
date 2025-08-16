import { Ionicons } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";
import { userprofiletype } from "../service/types";

//native tab
export interface nativetabpropstype {
	focused: boolean;
	name: string;
	defaultIcon: any;
	selectedIcon: any;
}

//native slider
export interface nativesliderpropstype {
	profile: userprofiletype;
}

//message type
export type seentype = -1 | 0 | 1; // -1: sent, 0: received, 1: seen
export type reactiontype = {
	participantUuid: string;
	uuid: string;
	value: string | keyof typeof Ionicons.glyphMap;
};

export interface messagetype {
	uuid: string;
	text: string;
	sentAt: number;
	isStarred: boolean;
	authorUuid: string;
	attachments: string[];
	updatedAt: number | null;
	reactions: reactiontype[];
}

export interface messagepropstype {
	msg: messagetype;
	seen: seentype;
	isAuthor: boolean;
	isTrayOpen: boolean;
	openCollage: (open: boolean, images: string[]) => void;
	handleMessageReaction: (rxn: string) => void;
	setActiveMessageId: React.Dispatch<React.SetStateAction<string | null>>;
}

//native fire
export interface nativefirepropstype {
	user: {
		username: string;
		profile: string;
	};
	videoURL: string;
	timeLeft: string;
}

//native button
export interface nativebuttonpropstype {
	icn: keyof typeof Ionicons.glyphMap;
	onPress?: (e: GestureResponderEvent) => void;
}

//reaction tray
interface IonReactionTrayProps {
	isIon: true;
	reactions: (keyof typeof Ionicons.glyphMap)[];
	style?: string;
	icnstyle?: string;
	color?: string;
	size?: number;
	handlePress?: (rxn: string) => void;
}

interface EmojiReactionTrayProps {
	isIon: false;
	reactions: string[];
	color?: string;
	style?: string;
	icnstyle?: string;
	size?: number;
	handlePress?: (rxn: string) => void;
}

export type reactiontraypropstype =
	| IonReactionTrayProps
	| EmojiReactionTrayProps;
