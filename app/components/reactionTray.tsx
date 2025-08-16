import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

//types
import { reactiontraypropstype } from "./types";

export default function ReactionTray(props: reactiontraypropstype) {
	const { reactions, color, style, icnstyle, size, isIon, handlePress } = props;

	return (
		<View className={`border border-gray-600 rounded-2xl ${style ?? ""}`}>
			{isIon
				? reactions.map(
						(react: keyof typeof Ionicons.glyphMap, idx: number) => (
							<TouchableOpacity key={idx} onPress={() => handlePress?.(react)}>
								<Ionicons
									name={react}
									size={size ?? 16}
									color={color ?? "black"}
									className={`${icnstyle ?? ""} ${reactions.length > 1 ? "px-2 py-1" : "p-1"}`}
								/>
							</TouchableOpacity>
						)
					)
				: reactions.map((reaction: string, idx: number) => (
						<TouchableOpacity key={idx} onPress={() => handlePress?.(reaction)}>
							<Text
								className={`text-lg px-2 py-1 ${icnstyle ?? ""}`}
								style={size ? { fontSize: size } : undefined}
							>
								{reaction}
							</Text>
						</TouchableOpacity>
					))}
		</View>
	);
}
