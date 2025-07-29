import { PlatformPressable } from "@react-navigation/elements";
import { Tabs } from "expo-router";

//components
import NativeTab from "../components/nativeTab";

export default function _Layout() {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: "red",
				},
				tabBarButton: (props) => (
					<PlatformPressable
						{...props}
						android_ripple={{ color: "transparent" }}
					/>
				),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<NativeTab
							name={"home"}
							focused={focused}
							selectedIcon={"home"}
							defaultIcon={"home-outline"}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: "search",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<NativeTab
							name={"search"}
							focused={focused}
							selectedIcon={"search-sharp"}
							defaultIcon={"search-outline"}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="saved"
				options={{
					title: "Saved",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<NativeTab
							name={"saved"}
							focused={focused}
							selectedIcon={"bookmark"}
							defaultIcon={"bookmark-outline"}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="call"
				options={{
					title: "Call",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<NativeTab
							name={"call"}
							focused={focused}
							selectedIcon={"call-sharp"}
							defaultIcon={"call-outline"}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
