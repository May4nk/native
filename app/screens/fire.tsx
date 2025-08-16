import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEvent } from "expo";
import { useLocalSearchParams } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import { Image, Text, View } from "react-native";

//const
import { user_pic } from "../constants/img";

export default function Fire() {
	const { username } = useLocalSearchParams();
	const navigation = useNavigation();

	const player = useVideoPlayer(
		"https://www.w3schools.com/html/mov_bbb.mp4",
		(player) => {
			player.loop = false;
			player.play();
		}
	);

	const handleGoBack = () => {
		navigation.goBack();
	};

	const { isPlaying } = useEvent(player, "playingChange", {
		isPlaying: player.playing,
	});

	return (
		<View className="flex-1 bg-black pt-14 border-t">
			<View
				className="flex-row justify-start items-center px-2 border-t border-dashed border-white"
				onTouchStart={handleGoBack}
			>
				<Ionicons size={23} name={"arrow-back"} color="#ffffff5c" />
				<Image
					source={{ uri: user_pic }}
					className="mx-2 size-10 rounded-full"
				/>
				<Text className="text-2xl text-white">{username}</Text>
			</View>
			<View
				className="flex-1 justify-center items-center"
				onTouchStart={() => {
					if (isPlaying) player.pause();
					else player.play();
				}}
			>
				<VideoView
					style={{ width: "100%", height: 250, backgroundColor: "black" }}
					player={player}
					nativeControls={false}
					allowsFullscreen={false}
					allowsPictureInPicture={false}
				/>
			</View>
		</View>
	);
}
