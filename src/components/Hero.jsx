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
import {Navbar} from '../constants'

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      bg="url(https://img.freepik.com/free-photo/top-view-sugar-candies-with-little-buns-white-desk_140725-66702.jpg?w=900&t=st=1684930972~exp=1684931572~hmac=bc7fd9318f441affcefc6024156125a367976759c09866c08917b36a68526f3e)"
      bgRepeat="no-repeat"
      bgSize="cover"
      borderRadius={5}
    >
      <Navbar />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
      >
        {sweets.map((sweet, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <MotionBox
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="w-[90%] min-h-[80vh] mt-4 mb-8 shadow-xl rounded-md backdrop-blur-sm flex justify-center items-center"
            >
              <Box py={10} className="  ">
                <Container maxW="container.xl">
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    alignItems="center"
                  >
                    <Box flex="1" mr={{ lg: "10" }}>
                      <Image src={sweet.image} alt={sweet.name} />
                    </Box>
                    <Box flex="1" className="flex flex-col items-start">
                      <Heading
                        as="h2"
                        fontSize={{ base: "3xl", lg: "4xl" }}
                        mb={4}
                      >
                        {sweet.name}
                      </Heading>
                      <Text
                        textAlign="left"
                        fontSize={{ base: "xl", lg: "2xl" }}
                        mb={6}
                      >
                        {sweet.description}
                      </Text>
                      <Flex mt={2} align="center">
                        <Box as={MdStar} color="orange.400" />
                        <Text ml={1} fontSize="sm">
                          <Badge colorScheme="pink" mr={2}>
                            {sweet.rating}
                          </Badge>
                          ({sweet.reviews})
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Container>
              </Box>
            </MotionBox>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        as={Link}
        href=""
        colorScheme="orange"
        variant="solid"
        size="lg"
        my={6}
      >
        Learn More
      </Button>
    </MotionBox>
  );
};

export default Hero;
