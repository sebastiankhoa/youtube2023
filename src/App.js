import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Feed, ChannelDetail, SearchPage, VideoDetail } from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Box color="gray.200" w="full" bg="#030d22">
				<Navbar />
				<Routes>
					<Route path="/" element={<Feed />} />
					<Route path="/video/:id" element={<VideoDetail />} />
					<Route path="/channel/:id" element={<ChannelDetail />} />
					<Route path="/search/:searchTerm" element={<SearchPage />} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
};

export default App;
