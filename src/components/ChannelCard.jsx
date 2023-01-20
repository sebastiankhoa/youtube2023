import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { demoProfilePicture, demoThumbnailUrl } from "../utils/constant";

const ChannelCard = ({ data }) => {
	console.log({ data });

	return (
		<Link to={`/channel/${data?.id?.channelId || data?.id}`}>
			<Flex w="320px" align="center" justify="center" gap="2">
				<Image
					alt={data?.snippet?.title}
					src={data?.snippet?.thumbnails?.high?.url || demoProfilePicture}
					w="100px"
					h="100px"
					_hover={{ transform: "scale(1.05)" }}
					transition="0.5s"
					rounded="full"
				/>
				<Box>
					<Flex align="center" gap="1" justify="center" mt="5">
						<Text color="white">{data?.snippet?.channelTitle || data?.snippet?.title}</Text>
						<Box color="gray.400">
							<BsCheckCircleFill />
						</Box>
					</Flex>
					{data?.statistics?.subscriberCount && (
						<Text color="gray.400">{parseInt(data?.statistics?.subscriberCount).toLocaleString("en-US")} Subscribers</Text>
					)}
				</Box>
			</Flex>
		</Link>
	);
};
export default ChannelCard;
