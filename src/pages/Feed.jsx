import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { useRecoilState, useRecoilValue } from "recoil";

import { CategoryState } from "../atom/Category";
import { VideoState } from "../atom/Video";
import MainVideo from "../components/MainVideo";
import Sidebar from "../components/Sidebar";
import { fetchDataFromApi } from "../utils/fetchData";

const Feed = () => {
	const selectCategory = useRecoilValue(CategoryState);
	const [videoData, setVideoData] = useRecoilState(VideoState);

	useEffect(() => {
		fetchDataFromApi(`search?part=snippet&q=${selectCategory}`).then((data) => setVideoData(data.items));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectCategory]);

	return (
		<Flex direction={{ base: "column", md: "row" }}>
			<Box>
				<Sidebar />
			</Box>
			<Box w="full" ml={{ base: "unset", md: "100px" }} mt={{ base: "50px", md: "0px" }}>
				{videoData.length <= 0 ? (
					<Center mt="10" h="100vh">
						<PacmanLoader color="#36d7b7" size="100px" />
					</Center>
				) : (
					<MainVideo />
				)}
			</Box>
		</Flex>
	);
};

export default Feed;
