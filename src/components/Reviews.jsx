import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { reviews } from "../data";

import "swiper/swiper.min.css";
import { Rating } from "../constants";

const ReviewCard = ({ review }) => {
  const { colorMode } = useColorMode();
  const bg = { light: "white", dark: "gray.800" };
  const color = { light: "gray.700", dark: "gray.400" };
  const borderColor = { light: "gray.200", dark: "gray.600" };

  return (
    <Box
      p={8}
      mx={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={borderColor[colorMode]}
      bg={bg[colorMode]}
      color={color[colorMode]}
    >
      <Heading textTransform="capitalize" as="h3" size="md" mb={4}>
        {review.name}
      </Heading>
      <Box className="flex justify-center my-2">
        <Rating rating={review.rating} />
      </Box>

      <Text fontSize="md">{review.text}</Text>
    </Box>
  );
};

const Reviews = () => {
  return (
    <Box id="review" maxW="5xl" mx="auto">
      <Heading
        textTransform="capitalize"
        as="h2"
        my={6}
        size="lg"
        textAlign="center"
      >
        Reviews{" "}
      </Heading>
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard review={review} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Reviews;
