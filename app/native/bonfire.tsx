import { Text, View } from "react-native";

//components
import NativeFire from "../components/nativeFire";

//const
import { user_pic } from "../constants/img";

export default function Bonfire() {
	return (
		<View className="flex-1 bg-gray-950 pt-14 border-t px-4">
			<View className="h-16 flex-row items-center justify-start w-full">
				<Text className="text-white pl-2 text-2xl font-bold capitalize">
					Fire
				</Text>
			</View>
			<View className="flex justify-start items-start w-full mt-2">
				<View className="flex-row justify-start items-center w-full">
					<Text className="text-blue-100 text-2xl">Burn fire</Text>
				</View>
				<View className="flex w-full py-2 w-full">
					<NativeFire
						user={{ username: "Add Status", profile: user_pic }}
						videoURL=""
						timeLeft={"disappears in 24hrs"}
					/>
				</View>
				<View className="flex-row justify-start items-center w-full">
					<Text className="text-blue-300 text-2xl">Updates</Text>
				</View>
				<View className="flex w-full">
					<NativeFire
						user={{ username: "Sam", profile: user_pic }}
						videoURL=""
						timeLeft={"yesterday"}
					/>
					<NativeFire
						user={{ username: "Carl", profile: user_pic }}
						videoURL=""
						timeLeft={"yesterday"}
					/>
					<NativeFire
						user={{ username: "hero", profile: user_pic }}
						videoURL=""
						timeLeft={"yesterday"}
					/>
				</View>
			</View>
		</View>
	);
}
