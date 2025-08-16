//types
import { editoptiontype } from "./types";

function handleStarred() {
	console.log("starred");
}

const editOptions: editoptiontype[] = [
	{
		name: "arrow-undo-outline",
		color: "gray",
		onPress: () => console.log("notified"),
	},
	{
		name: "star-outline",
		color: "gray",
		onPress: handleStarred,
	},
	{
		name: "notifications-outline",
		color: "gray",
		onPress: () => console.log("notified"),
	},
	{
		name: "pencil-outline",
		color: "#51a8efff",
		onPress: () => console.log("notified"),
	},
	{
		name: "trash-outline",
		color: "#ef7a86ff",
		onPress: () => console.log("notified"),
	},
	{
		name: "return-up-forward-outline",
		color: "gray",
		onPress: () => console.log("notified"),
	},
];

export default editOptions;

// const messages: messagetype[] = [
// 	{
// 		id: "1",
// 		text: "The quick brown fox jumps over the lazy dog.",
// 		seen: 0,
// 		isOwner: false,
// 		starred: false,
// 		isAuthor: false,
// 		updatedAt: 1754262190724,
// 		reactions: ["eye"],
// 	},
// 	{
// 		id: "2",
// 		text: "hello",
// 		seen: 1,
// 		isOwner: true,
// 		starred: true,
// 		isAuthor: false,
// 		updatedAt: 1754262190724,
// 		reactions: [],
// 	},
// ];
