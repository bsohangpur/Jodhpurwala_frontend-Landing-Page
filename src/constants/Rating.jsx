import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating, numRatings }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <Box>
      <Flex alignItems="center">
        {Array.from({ length: fullStars }, (_, index) => (
          <Icon key={`full-star-${index}`} as={FaStar} color="yellow.500" />
        ))}
        {halfStar && (
          <Icon key="half-star" as={FaStar} color="yellow.500" />
        )}
        {Array.from({ length: emptyStars }, (_, index) => (
          <Icon key={`empty-star-${index}`} as={FaStar} color="gray.300" />
        ))}
        <Text ml={2} fontWeight="semibold">
          {rating.toFixed(1)}
        </Text>
      </Flex>
      <Text fontSize="sm" color="gray.600">
        {numRatings} ratings
      </Text>
    </Box>
  );
};

export default Rating;
