import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

//components
import NativeButton from "../components/nativeButton";
import NativeSlider from "../components/nativeSlider";

//services
import { useNativeStore } from "../service";

//const
import { logo } from "../constants/img";
import { userprofiletype } from "../service/types";

export default function Index() {
	const router = useRouter();

	//store
	const userProfiles = useNativeStore((state) => state.userProfiles);
	const addProfileMessages = useNativeStore(
		(state) => state.addProfileMessages
	);

	// useEffect(() => {
	// 	(async () => {
	// 		const allMsgs = await fetchLatestMessages();
	// 		if (allMsgs.status === 200) {
	// 			userProfiles.map((profile: userprofiletype) => {
	// 				addProfileMessages(profile.username, allMsgs.data);
	// 			});
	// 		}
	// 	})();
	// }, []);

	return (
		<View className="flex-1 bg-gray-950 pt-14 border-t px-4">
			<View className="flex-row justify-between items-center pr-6">
				<View className="h-16 flex-row items-center justify-start w-full">
					<Image source={logo} className="size-12" />
					<Text className="text-white pl-2 text-2xl font-bold capitalize">
						Native
					</Text>
				</View>
				<Ionicons size={23} name={"settings-outline"} color="white" />
			</View>
			<View className="rounded-xl w-full mt-4 h-14 border border-blue-100/20">
				<TextInput
					placeholder="Search here..."
					placeholderTextColor="#9ca3af"
					className="text-white w-full h-full px-2"
				/>
			</View>
			<ScrollView className="flex-1 pt-4">
				{userProfiles.map((uProfile: userprofiletype, idx: number) => (
					<NativeSlider profile={uProfile} key={idx} />
				))}
			</ScrollView>
			<View className="absolute bottom-1 right-4 z-50">
				<NativeButton
					icn={"add"}
					onPress={() => {
						router.push("/screens/contacts");
					}}
				/>
				<NativeButton icn={"bowling-ball"} />
			</View>
		</View>
	);
}
