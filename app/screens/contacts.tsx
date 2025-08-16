import * as UserContacts from "expo-contacts";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

//component
import Contact from "../components/contact";

//const
import { logo } from "../constants/img";

export default function Contacts() {
	const [allContacts, setAllContacts] = useState<any[]>([]);

	useEffect(() => {
		(async () => {
			const { status } = await UserContacts.requestPermissionsAsync();
			if (status === "granted") {
				const { data } = await UserContacts.getContactsAsync({
					fields: [
						UserContacts.Fields.Emails,
						UserContacts.Fields.PhoneNumbers,
					],
				});

				if (data.length > 0) {
					const cleanedContact: any[] = data.map((info: any) => {
						return { [info.name]: info.phoneNumbers[0].number };
					});

					setAllContacts([...cleanedContact]);
				}
			}
		})();
	}, []);

	return (
		<View className="flex-1 bg-gray-800 pt-14 border-t">
			<View className="h-16 flex-row items-center justify-start w-full px-4">
				<Image source={logo} className="size-12" />
				<Text className="text-white pl-2 text-2xl font-bold font-mono capitalize">
					Contacts
				</Text>
			</View>
			<ScrollView className="flex-1 bg-gray-950 px-4 pt-2">
				{allContacts.map((cont: any, idx: number) => (
					<Contact
						key={idx}
						username={Object.keys(cont)[0]}
						number={Object.values(cont)[0] as string}
					/>
				))}
			</ScrollView>
		</View>
	);
}
