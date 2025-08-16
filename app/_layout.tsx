import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//css
import "./global.css";

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<Stack>
					<Stack.Screen name="native" options={{ headerShown: false }} />
					<Stack.Screen name="screens" options={{ headerShown: false }} />
					<Stack.Screen name="components" options={{ headerShown: false }} />
				</Stack>
			</SafeAreaView>
		</GestureHandlerRootView>
	);
}
