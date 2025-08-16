import { Stack } from "expo-router";

export default function ScreenLayout() {
	return (
		<Stack>
			<Stack.Screen name="contacts" options={{ headerShown: false }} />
			<Stack.Screen name="userProfile" options={{ headerShown: false }} />
			<Stack.Screen name="room" options={{ headerShown: false }} />
			<Stack.Screen name="fire" options={{ headerShown: false }} />
		</Stack>
	);
}
