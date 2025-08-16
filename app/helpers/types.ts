import { Ionicons } from "@expo/vector-icons";

export type editoptiontype = {
	name: keyof typeof Ionicons.glyphMap;
	color: string;
	onPress: () => void;
};
