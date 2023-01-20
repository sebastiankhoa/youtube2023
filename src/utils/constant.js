import React from "react";
import { BiHome, BiMoviePlay, BiMusic, BiNews, BiTrendingUp, BiVideo } from "react-icons/bi";
import { FaDog } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import {
	MdCheckroom,
	MdComputer,
	MdFaceRetouchingNatural,
	MdHotelClass,
	MdOutlineLiveTv,
	MdOutlineSchool,
	MdOutlineSportsSoccer,
	MdOutlineTheaterComedy,
	MdCardTravel,
} from "react-icons/md";
import { TbDeviceGamepad2 } from "react-icons/tb";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
	{ name: "Mới nhất", icon: <BiHome /> },
	{ name: "Popular", icon: <BiTrendingUp /> },
	{ name: "Tin tức", icon: <BiNews /> },
	{ name: "Music", icon: <BiMusic /> },
	{ name: "Kpop", icon: <MdHotelClass /> },
	{ name: "Learning", icon: <MdOutlineSchool /> },
	{ name: "Computer", icon: <MdComputer /> },
	{ name: "Phim", icon: <BiMoviePlay /> },
	{ name: "4K video", icon: <BiVideo /> },
	{ name: "Gaming", icon: <TbDeviceGamepad2 /> },
	{ name: "Live", icon: <MdOutlineLiveTv /> },
	{ name: "Bóng đá", icon: <MdOutlineSportsSoccer /> },
	{ name: "Fashion", icon: <MdCheckroom /> },
	{ name: "Beauty", icon: <MdFaceRetouchingNatural /> },
	{ name: "Pets", icon: <FaDog /> },
	{ name: "Hài", icon: <MdOutlineTheaterComedy /> },
	{ name: "Travel", icon: <MdCardTravel /> },
	{ name: "Fitness", icon: <IoIosFitness /> },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle = "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture = "http://dergipark.org.tr/assets/app/images/buddy_sample.png";
