import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillBell, AiFillVideoCamera } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	// const setSearchTerm = useSetRecoilState(SearchState);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm("");
		}
	};

	return (
		<Flex align="center" justify="space-between" bg="black" px="2" pos="sticky" top="0" zIndex={99}>
			<Image alt="logo" src="\image\logo.png" w="100px" onClick={() => navigate("/")} cursor="pointer" />
			<Flex align="center" gap="2">
				<Flex align="center" rounded="25px" border="1px solid" w={{ base: "150px", md: "500px" }} pl="2" overflow="hidden">
					<Input
						type="text"
						placeholder="Search"
						border="none"
						_focus={{ boxShadow: "none" }}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Button bg="gray" rounded="none" w="80px" _hover={{ opacity: "80%" }} onClick={handleSearch}>
						<BsSearch />
					</Button>
				</Flex>
				<Box fontSize="3xl" rounded="full" bg="gray.900" _hover={{ bg: "gray" }} p="1" color="white" cursor="pointer">
					<BiMicrophone />
				</Box>
			</Flex>
			<Flex align="center" gap="3" display={{ base: "none", md: "flex" }}>
				<AiFillVideoCamera size="1.5rem" />
				<AiFillBell size="1.5rem" />
				<Image alt="avatar" src="\image\unnamed.jpg" rounded="full" w="30px" />
			</Flex>
		</Flex>
	);
};

export default Navbar;
