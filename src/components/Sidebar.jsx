import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { CategoryState } from "../atom/Category";
import { categories } from "../utils/constant";

const Sidebar = () => {
	// const [selectCategory, setSelectCategory] = useState("Mới nhất");

	const [selectCategory, setSelectCategory] = useRecoilState(CategoryState);

	return (
		<Flex
			direction={{ base: "row", md: "column" }}
			h={{ base: "50px", md: "89vh" }}
			mt={{ base: "0", md: "5" }}
			px="2"
			gap="1"
			w={{ base: "full", md: "70px", lg: "200px" }}
			overflowX={{ base: "scroll", md: "unset" }}
			borderRight="1px solid"
			borderColor="gray.700"
			pos="fixed"
			bg={{ base: "#030d22", md: "unset" }}
		>
			{categories.map((item, _i) => (
				<Flex
					h="40px"
					key={_i}
					align="center"
					gap={{ base: "2", md: "3" }}
					_hover={{ bg: "gray.700" }}
					py="2"
					px="3"
					rounded="20px"
					transition="0.3s"
					cursor="pointer"
					bg={item.name === selectCategory && "red"}
					onClick={() => setSelectCategory(item.name)}
				>
					<Box fontSize={{ base: "1xl", md: "2xl" }}>{item.icon}</Box>
					<Box w={{ base: "60px", md: "unset" }} display={{ md: "none", lg: "flex" }}>
						<Text fontWeight="500" fontSize={{ base: "10pt", md: "12pt" }}>
							{item.name}
						</Text>
					</Box>
				</Flex>
			))}
			<Text mt="10" color="gray.500" fontSize="10pt" display={{ base: "none", md: "flex" }}>
				Copyright © 2023 by Khoa
			</Text>
		</Flex>
	);
};

export default Sidebar;
