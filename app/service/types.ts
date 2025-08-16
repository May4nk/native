import { messagetype, reactiontype } from "../components/types";

export type userprofiletype = {
	id: string;
	name: string;
	uuid: string;
	number: string;
	username: string;
	status: string;
	profilePic: string;
	latestMessage: string;
	newMessagesNotify: boolean;
};

export type loggedusertype = {
	id: string;
	name: string;
	username: string;
	status: string;
	uuid: string;
	number: string;
	profilePic: string;
};

export interface nativestorestatetype {
	user: loggedusertype;
	userProfiles: userprofiletype[];
	profileMessages: Map<string, messagetype[]>;
	addUserProfiles: (usrProfile: userprofiletype) => void;
	addMessageReactions: (
		profileId: string,
		messageId: string,
		reaction: reactiontype
	) => void;
	addProfileMessages: (profileId: string, messages: messagetype[]) => void;
}
