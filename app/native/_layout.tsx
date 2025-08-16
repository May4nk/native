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
					borderColor: "none",
					backgroundColor: "#12151cff",
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
				name="bonfire"
				options={{
					title: "bonfire",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<NativeTab
							name={"bonfire"}
							focused={focused}
							selectedIcon={"bonfire"}
							defaultIcon={"bonfire-outline"}
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
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<NativeTab
							name={"profile"}
							focused={focused}
							selectedIcon={"person"}
							defaultIcon={"person-outline"}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
