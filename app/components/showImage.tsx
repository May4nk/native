import { Ionicons } from "@expo/vector-icons";
import {
	Dimensions,
	Image,
	ScrollView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

export default function ShowImage({
	images,
	onClose,
}: {
	images: string[];
	onClose: () => void;
}) {
	const { width, height } = Dimensions.get("window");

	return (
		<TouchableWithoutFeedback>
			<View
				style={{ width, height }}
				className="absolute top-0 left-0 bg-black z-50"
			>
				<TouchableOpacity
					onPress={onClose}
					className="absolute top-14 right-0 z-50"
				>
					<Ionicons name="close" size={30} color="white" />
				</TouchableOpacity>
				<ScrollView
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					decelerationRate="fast"
					snapToInterval={width}
					style={{ flex: 1 }}
					contentContainerStyle={{
						alignItems: "center",
					}}
				>
					{images.map((uri, idx) => (
						<View
							key={idx}
							style={{
								width,
								height,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Image
								source={{ uri }}
								resizeMode="contain"
								style={{ width: "100%", height: "100%" }}
							/>
						</View>
					))}
				</ScrollView>
			</View>
		</TouchableWithoutFeedback>
	);
}
