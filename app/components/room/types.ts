import { messagetype } from "../types";

export interface roomheaderpropstype {
	username: string;
	activeMessageId: string | null;
	setActiveMessageId: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface messagespropstype {
	roomMessages: messagetype[];
	activeMessageId: string | null;
	setImages: React.Dispatch<React.SetStateAction<string[]>>;
	setActiveMessageId: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface roomnewmessagepropstype {
	messageContent: { attachments: string[]; text: string };
	username: string;
	resetMediaAttachments: () => void;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setMessageContent: React.Dispatch<React.SetStateAction<any>>;
}
