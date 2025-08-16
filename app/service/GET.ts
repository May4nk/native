export const fetchSessionInfo = async () => {
	try {
		const info = await fetch(
			"https://dummy-chat-server.tribechat.com/api/info"
		);

		if (!info.ok) {
			return {
				status: 500,
				data: null,
				message: "Session info fetching failed",
			};
		}

		const infoData = info.json();

		return {
			status: 500,
			data: infoData,
			message: "Session info fetched successfully",
		};
	} catch (err) {
		return {
			status: 500,
			data: null,
			message: `Session info fetching failed: ${err}`,
		};
	}
};

export const fetchMessages = async () => {
	try {
		const info = await fetch(
			"https://dummy-chat-server.tribechat.com/api/messages/all"
		);

		if (!info.ok) {
			return {
				status: info.status,
				data: null,
				message: info.statusText,
			};
		}

		const infoData = await info.json();

		return {
			status: 200,
			data: infoData,
			message: info.statusText,
		};
	} catch (err) {
		return {
			status: 500,
			data: null,
			message: `Fetching failed: ${err}`,
		};
	}
};

export const fetchLatestMessages = async () => {
	try {
		const info = await fetch(
			"https://dummy-chat-server.tribechat.com/api/messages/latest"
		);

		if (!info.ok) {
			return {
				status: info.status,
				data: null,
				message: info.statusText,
			};
		}

		const infoData = await info.json();

		return {
			status: 200,
			data: infoData,
			message: info.statusText,
		};
	} catch (err) {
		return {
			status: 500,
			data: null,
			message: `Fetching failed: ${err}`,
		};
	}
};
