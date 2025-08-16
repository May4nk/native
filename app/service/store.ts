import AsyncStorage from "@react-native-async-storage/async-storage";
import { create, StoreApi, UseBoundStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

//types
import { messagetype, reactiontype } from "../components/types";
import { nativestorestatetype, userprofiletype } from "./types";

const nativeStore: (
	set: StoreApi<nativestorestatetype>["setState"]
) => nativestorestatetype = (
	set: StoreApi<nativestorestatetype>["setState"]
): nativestorestatetype => ({
	user: {
		id: "b0e5a651-38e6-4eff-a3d8-c9b3448ab2ce",
		username: "whoknows",
		number: "+91 000000012",
		profilePic: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
		uuid: "092183409127478312957klasj",
		status: "doing till it reaches",
		name: "may",
	},
	userProfiles: [],
	profileMessages: new Map<string, messagetype[]>(),
	addUserProfiles: (usrProfile: userprofiletype) => {
		set((state: nativestorestatetype) => {
			const checkProfileExists = state.userProfiles.filter(
				(profile: userprofiletype) => profile.number === usrProfile.number
			);

			if (checkProfileExists.length > 0) {
				return state;
			}

			return {
				...state,
				userProfiles: [usrProfile, ...state.userProfiles],
			};
		});
	},
	addProfileMessages: (profileId: string, messages: messagetype[]) => {
		set((state: nativestorestatetype) => {
			const userId = state.user.id;
			const existingMsgs = state.profileMessages.get(profileId) || [];
			const existingProfiles = state.userProfiles;

			const lastSavedUuid = existingMsgs[existingMsgs.length - 1]?.uuid;
			const newMessagesLastUuid = messages[messages.length - 1]?.uuid;

			if (lastSavedUuid === newMessagesLastUuid) {
				return state;
			}

			const updatedProfileMessages = new Map(state.profileMessages);
			updatedProfileMessages.set(profileId, [...existingMsgs, ...messages]);
			const updatedUserProfiles = existingProfiles.map(
				(profile: userprofiletype) => {
					if (profile.username === profileId) {
						const latestMsg = messages[messages.length - 1];
						return {
							...profile,
							latestMessage:
								latestMsg.text ||
								(latestMsg.attachments.length > 0 &&
									`${latestMsg.attachments.length} Media`) ||
								profile.latestMessage,
						};
					}

					return profile;
				}
			);

			return {
				profileMessages: updatedProfileMessages,
				userProfiles: updatedUserProfiles,
			};
		});
	},
	addMessageReactions: (
		profileId: string,
		messageId: string,
		reaction: reactiontype
	) => {
		set((state: nativestorestatetype) => {
			const existingMsgs: messagetype[] =
				state.profileMessages.get(profileId) || [];

			const tempProfileMessages = state.profileMessages;

			const updateMessages: messagetype[] = existingMsgs.map(
				(msg: messagetype) => {
					if (msg.uuid === messageId) {
						const uReaction = msg.reactions.filter(
							(rxn: reactiontype) =>
								rxn.participantUuid === reaction.participantUuid
						);

						if (uReaction.length === 1) {
							const filteredReactions = msg.reactions.filter(
								(rxn: reactiontype) =>
									rxn.participantUuid !== uReaction[0].participantUuid
							);

							return {
								...msg,
								reactions: [...filteredReactions, reaction],
							};
						} else {
							return {
								...msg,
								reactions: [...msg.reactions, reaction],
							};
						}
					}

					return msg;
				}
			);

			tempProfileMessages.set(profileId, updateMessages);

			return {
				profileMessages: tempProfileMessages,
			};
		});
	},
});

const useNativeStore: UseBoundStore<StoreApi<nativestorestatetype>> = create(
	persist(nativeStore, {
		name: "nativeChat",
		storage: createJSONStorage(() => AsyncStorage),
		// Transform Map <-> Array for persistence
		partialize: (state) => ({
			...state,
			profileMessages: Array.from(state.profileMessages.entries()),
		}),
		onRehydrateStorage: () => (state) => {
			if (state) {
				if (Array.isArray(state.profileMessages)) {
					state.profileMessages = new Map(state.profileMessages);
				} else if (!(state.profileMessages instanceof Map)) {
					state.profileMessages = new Map();
				}
			}
		},
	})
);

export default useNativeStore;
