import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

//const & types
import { user_pic } from "../constants/img";
import { nativesliderpropstype } from "./types";

export default function NativeSlider(props: nativesliderpropstype) {
	const { profile } = props;
	const { username, profilePic, latestMessage } = profile;
	const router = useRouter();

	//handlers
	// const renderRightActions = (progress: Animated.SharedValue<number>) => {
	// 	const animatedStyle = useAnimatedStyle(() => {
	// 		const scale = interpolate(
	// 			progress.value,
	// 			[0, 1],
	// 			[0.5, 1.2],
	// 			Extrapolate.CLAMP
	// 		);
	// 		const opacity = interpolate(
	// 			progress.value,
	// 			[0, 1],
	// 			[0, 1],
	// 			Extrapolate.CLAMP
	// 		);
	// 		return {
	// 			transform: [{ scale }],
	// 			opacity,
	// 		};
	// 	});

	// 	return (
	// 		<Animated.View
	// 			style={{
	// 				width: 80,
	// 				height: "100%",
	// 				backgroundColor: "#ef4444",
	// 				justifyContent: "center",
	// 				alignItems: "center",
	// 			}}
	// 		>
	// 			<Animated.View style={animatedStyle}>
	// 				<Ionicons name="trash-outline" size={20} color="white" />
	// 			</Animated.View>
	// 		</Animated.View>
	// 	);
	// };

	// const renderLeftActions = (progress: Animated.SharedValue<number>) => {
	// 	const animatedStyle = useAnimatedStyle(() => {
	// 		const scale = interpolate(
	// 			progress.value,
	// 			[0, 1],
	// 			[0.5, 1.2],
	// 			Extrapolate.CLAMP
	// 		);
	// 		const opacity = interpolate(
	// 			progress.value,
	// 			[0, 1],
	// 			[0, 1],
	// 			Extrapolate.CLAMP
	// 		);
	// 		return {
	// 			transform: [{ scale }],
	// 			opacity,
	// 		};
	// 	});

	// 	return (
	// 		<Animated.View
	// 			style={{
	// 				width: 80,
	// 				height: "100%",
	// 				backgroundColor: "#1e3a8a",
	// 				justifyContent: "center",
	// 				alignItems: "center",
	// 			}}
	// 		>
	// 			<Animated.View style={animatedStyle}>
	// 				<Ionicons name="pin-outline" size={20} color="white" />
	// 			</Animated.View>
	// 		</Animated.View>
	// 	);
	// };

	return (
		// <Swipeable
		// 	renderRightActions={renderRightActions}
		// 	renderLeftActions={renderLeftActions}
		// >
		<TouchableOpacity
			className="py-4"
			onPress={() =>
				router.push({
					pathname: "/screens/room",
					params: { username },
				})
			}
		>
			<View className="flex-row w-full items-center flex-1">
				<Image
					source={{ uri: profilePic || user_pic }}
					className="size-14 rounded-full border border-gray-700"
				/>
				<View className="flex ml-3">
					<Text className="text-white text-2xl font-bold capitalize">
						{username}
					</Text>
					<Text
						className="text-gray-400 text-lg"
						numberOfLines={1}
						ellipsizeMode="tail"
					>
						{latestMessage.length > 51
							? latestMessage.slice(0, 51) + "..."
							: latestMessage}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
		// </Swipeable>
	);
}
