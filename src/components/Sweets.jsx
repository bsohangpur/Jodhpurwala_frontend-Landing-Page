import React from "react";
import { Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Rating } from "../constants";
import { sweetDetails } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/swiper.min.css";

const Sweets = () => {
  const variantProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <Box id="sweets" mb={6}>
      <motion.div {...variantProps}>
        <Heading as="h2" size="xl" textAlign="center">
          What We Offer's
        </Heading>
      </motion.div>
      <Swiper autoplay modules={[Autoplay]}>
        {sweetDetails.map((sweet) => (
          <SwiperSlide className="my-2" key={sweet.name}>
            <Box>
              <Heading as="h3" size="md" textDecoration="underline" my={6}>
                {sweet.name}:
              </Heading>
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
                gap={8}
                alignItems="center"
              >
                {sweet.items.map((item) => (
                  <GridItem key={item.id}>
                    <motion.div {...variantProps}>
                      <Box
                        borderRadius="md"
                        overflow="hidden"
                        boxShadow="md"
                        borderColor="orange.800"
                        borderWidth={1}
                        p={4}
                        textAlign="center"
                        transition="transform 0.2s ease-out"
                        _hover={{ transform: "translateY(-5px)" }}
                      >
                        <Image src={item.image} alt={item.name} mb={4} />
                        <Heading as="h3" size="md" mb={2}>
                          {item.name}
                        </Heading>
                        <Text fontSize="lg" mb={4}>
                          {item.description}
                        </Text>
                        <Rating
                          rating={item.rating.rating}
                          numRatings={item.rating.raters}
                        />
                      </Box>
                    </motion.div>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Sweets;
