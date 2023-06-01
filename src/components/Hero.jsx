import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  Flex,
  Badge,
  Button,
  Link,
} from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import { sweets } from "../data";
import { MdStar } from "react-icons/md";
import { Navbar } from "../constants";
import { bg_assets, bg_assets_2, hero_img } from "../assets";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      position="relative"
      bgRepeat="no-repeat"
      bgSize="cover"
      borderRadius={{md:5}}
      id="hero"
      minH="100vh"
    >
      <Image
        className=" z-0 absolute w-full h-full top-0 left-0"
        src={bg_assets}
        alt="bg_1"
      />
      <Image
        className="absolute z-0 w-full h-full top-0 left-0"
        src={bg_assets_2}
        alt="bg_2"
      />
      <Navbar />
      <Box className="m-6 px-2 py-6  backdrop-blur-sm z-50 ">
        <Flex flexWrap='wrap' justifyContent="center" alignItems="center">
          <Box w={{ base: "100%", md: "50%" }} className=" text-left">
            <Heading
              my={2}
              as="h1"
              fontWeight="bold"
              size="2xl"
              className="hero_first_head"
            >
              Enjoy Our{" "}
            </Heading>
            <Heading my={2} as="h2" color="red.50" size="2xl">
              <span className="text-orange-500">Spacial</span> Sweets
            </Heading>
            <Heading
              my={2}
              as="h3"
              textTransform="capitalize"
              color="orange.50"
              size="lg"
            >
              Wide variety of sweets available throughout India
            </Heading>
            <Text color="orange.50">
              We guarantee that by following the traditional and genuine methods
              of preparing sweets we give healthy goodness.
            </Text>
            <Button
              onClick={() => {
                const section = document.getElementById("sweets");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              colorScheme="orange"
              variant="solid"
              size="lg"
              my={6}
            >
              Learn More
            </Button>
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Image w='100%' src={hero_img} alt="hero image" />
          </Box>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default Hero;
