import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

//types
import React from "react";
import { nativetabpropstype } from "./types";

const NativeTab = (props: nativetabpropstype) => {
	const { focused, name, defaultIcon, selectedIcon } = props;

	return focused ? (
		<View className="flex flex-row w-full flex-1 min-w-[90px] bg-blue-100 min-h-11 mt-3 justify-center items-center rounded-full overflow-hidden">
			<Ionicons size={17} name={selectedIcon} className="text-gray-400 mr-1" />
			<Text>{name}</Text>
		</View>
	) : (
		<View className="size-full justify-center items-center mt-3 min-w-[50px] rounded-full">
			<Ionicons size={17} name={defaultIcon} className="text-gray-400 mr-1" />
			{/* <Text className="text-gray-400 text-1xl">{name}</Text> */}
		</View>
	);
};

export default NativeTab;
