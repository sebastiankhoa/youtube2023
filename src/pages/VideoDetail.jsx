import { Box, Button, Center, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillBell, AiOutlineDownload, AiFillLike } from "react-icons/ai";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { FaShare } from "react-icons/fa";

import { fetchDataFromApi } from "../utils/fetchData";
import { PacmanLoader } from "react-spinners";
import VideoCard from "../components/VideoCard";

const VideoDetail = () => {
	const { id } = useParams();

	const [videoDetail, setVideoDetail] = useState(null);
	const [relatedVideo, setRelatedVideo] = useState([]);

	useEffect(() => {
		fetchDataFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));
		fetchDataFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setRelatedVideo(data.items));
	}, [id]);

	if (!videoDetail?.snippet)
		return (
			<Center mt="500px" w="100%" h="100vh">
				<PacmanLoader visible={true} height="150" width="150" />
			</Center>
		);

	const {
		snippet: { title, channelTitle, channelId, description, publishedAt },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	return (
		<Flex direction="column" align="center" w="full">
			<Box w="full" h={{ base: "300px", md: "500px", xl: "800px", "2xl": "1080px" }}>
				<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" height="100%" playing />
			</Box>
			<Flex direction="column" align="center" my="5" w="100%">
				<Flex gap="5" w="100%" p="3">
					{/* Left */}
					<Box w={{ base: "100%", md: "65%" }}>
						<Text fontWeight="700" fontSize="lg">
							{title}
						</Text>
						<Flex align="center" mt="2" fontSize="xl" justify="space-between">
							<Flex justify="space-between" align="center">
								<Link to={`/channel/${channelId}`}>
									<Box>
										<Text>{channelTitle}</Text>
										<Text>{}</Text>
									</Box>
								</Link>
								<Button rounded="20px" colorScheme="blackAlpha" leftIcon={<AiFillBell size="1.5rem" />}>
									Đăng ký
								</Button>
							</Flex>
							<Flex>
								<Button rounded="20px" colorScheme="blackAlpha" rightIcon={<AiFillLike size="1.5rem" />}>
									{parseInt(likeCount).toLocaleString("en-US")} Like
								</Button>
							</Flex>
						</Flex>
						<Box bg="gray.700" w="100%" h="max-content" rounded="20px" px="2" py="3" mt="2">
							<Flex align="center" gap="5">
								<Text>{parseInt(viewCount).toLocaleString("en-US")} Views</Text>
								<Text>Ngày đăng : {publishedAt.split("T")[0]}</Text>
							</Flex>
							<Box>
								<Text>{description}</Text>
							</Box>
						</Box>
					</Box>
					{/* Right */}
					<Flex direction="column" w="35%" display={{ base: "none", md: "flex" }} h="max-content">
						{relatedVideo?.map((video) => (
							<Box key={video.id}>
								<VideoCard data={video} />
							</Box>
						))}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default VideoDetail;
