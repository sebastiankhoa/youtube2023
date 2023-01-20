import { Box, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { useRecoilState } from "recoil";

import { VideoState } from "../atom/Video";
import MainVideo from "../components/MainVideo";
import { fetchDataFromApi } from "../utils/fetchData";

const SearchFeed = () => {
	// const searchTerm = useRecoilValue(SearchState);
	const { searchTerm } = useParams();
	const [videoData, setVideoData] = useRecoilState(VideoState);

	useEffect(() => {
		fetchDataFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => setVideoData(data.items));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	return (
		<Box w="full">
			{videoData.length <= 0 ? (
				<Center mt="10" h="100vh">
					<PacmanLoader color="#36d7b7" size="100px" />
				</Center>
			) : (
				<MainVideo />
			)}
		</Box>
	);
};

export default SearchFeed;
