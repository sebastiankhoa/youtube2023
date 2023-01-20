import { Box, Button, Center, Container, Divider, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "../components/ChannelCard";
import VideoCard from "../components/VideoCard";
import { fetchDataFromApi } from "../utils/fetchData";
import { AiFillBell } from "react-icons/ai";
import { PacmanLoader } from "react-spinners";

const ChannelDetail = () => {
	const { id } = useParams();

	const [channelData, setChannelData] = useState(null);
	const [videoData, setVideoData] = useState([]);
	// console.log({ channelData });
	console.log({ videoData });

	useEffect(() => {
		fetchDataFromApi(`channels?part=snippet&id=${id}`).then((data) => setChannelData(data?.items[0]));
		fetchDataFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideoData(data.items));
	}, [id]);

	return (
		<Flex direction="column" gap="2" align="center">
			<Box w="full" h={{ base: "200px", xl: "400px" }}>
				<Image alt="wallpaper" src="\image\wallpaper.jpg" h={{ base: "200px", xl: "400px" }} w="full" objectFit="cover" />
			</Box>
			<Container maxW="container.lg">
				<Flex align="center" justify="space-between" w="full" mt="2" px="2">
					<ChannelCard data={channelData} />
					<Flex align="center" gap="2">
						<Button rounded="20px" colorScheme="blue">
							Join
						</Button>
						<Button rounded="20px" colorScheme="orange" leftIcon={<AiFillBell size="1.5rem" />}>
							Đăng ký
						</Button>
					</Flex>
				</Flex>
				<Divider my="5" />
				{videoData.length <= 0 ? (
					<Center h="80vh">
						<PacmanLoader color="#36d7b7" size="100px" />
					</Center>
				) : (
					<Flex flexWrap="wrap" gap="5" justify="center" align="center">
						{videoData?.map((item) => (
							<VideoCard data={item} key={item?.id} />
						))}
					</Flex>
				)}
			</Container>
		</Flex>
	);
};

export default ChannelDetail;
