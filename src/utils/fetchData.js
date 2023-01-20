import axios from "axios";

export const baseUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: "48",
	},
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchDataFromApi = async (url) => {
	const { data } = await axios.get(`${baseUrl}/${url}`, options);
	return data;
};
