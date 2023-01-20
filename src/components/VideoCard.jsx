import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoUrl } from "../utils/constant";

const VideoCard = ({ data }) => {
	const id = data.id.videoId;
	const thumbnail = data.snippet.thumbnails;
	return (
		<Box
			w={{ base: "320px", md: "350px" }}
			h="310px"
			bg="#030d22"
			rounded="5px"
			overflow="hidden"
			cursor="pointer"
			_hover={{ opacity: "90%", transform: "scale(1.02)" }}
			transition="0.5s"
		>
			<Link to={id ? `/video/${id}` : demoVideoUrl}>
				<Image alt="thumbnail" src={thumbnail.medium.url ? thumbnail.medium.url : demoThumbnailUrl} w="350px" h="200px" />
			</Link>
			<Box>
				<Link to={id ? `/video/${id}` : demoVideoUrl}>
					<Text fontSize="11pt" fontWeight="600" my="1">
						{data.snippet.title.slice(0, 80) || demoChannelTitle.slice(0, 60)}
					</Text>
				</Link>
			</Box>
			<Box>
				<Link to={data.snippet.channelId ? `/channel/${data.snippet.channelId}` : demoChannelUrl}>
					<Text color="gray.400">{data.snippet.channelTitle}</Text>
				</Link>
				<Flex gap="3" color="gray.500">
					<Text fontSize="10pt">{data.snippet.publishTime.split("T")[0]} </Text>
					<Text fontSize="10pt">{data.snippet.publishTime.split("T")[1].split("Z")[0]}</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default VideoCard;
