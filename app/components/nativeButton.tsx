import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

//types
import { nativebuttonpropstype } from "./types";

export default function NativeButton(props: nativebuttonpropstype) {
	const { icn, onPress } = props;

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			className="bg-blue-100 rounded-full size-16 my-2 flex justify-center items-center"
		>
			<Ionicons size={23} name={icn} color="black" />
		</TouchableOpacity>
	);
}
