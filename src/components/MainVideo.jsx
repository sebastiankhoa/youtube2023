import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";

import { VideoState } from "../atom/Video";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const MainVideo = () => {
	const videoData = useRecoilValue(VideoState);
	// console.log(videoData);
	return (
		<Flex align="center" justify="center" flexWrap="wrap" gap="3" mt="5">
			{videoData?.map((video) => (
				<Box key={video?.id.videoId}>
					{video.id.videoId && <VideoCard data={video} />} {video.id.channelId && <ChannelCard data={video} />}
				</Box>
			))}
		</Flex>
	);
};

export default MainVideo;
