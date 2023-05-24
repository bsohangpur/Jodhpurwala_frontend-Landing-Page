import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Rating } from "../constants";
import {sweetDetails} from '../data'

const Sweets = () => {
  const variantProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <Box py={{ base: 12, md: 20 }}>
      <Container maxW="container.xl">
        <motion.div {...variantProps}>
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            What We Offer's
          </Heading>
        </motion.div>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
          alignItems="center"
        >
          {sweetDetails.map((sweet) => (
            <GridItem key={sweet.id}>
              <motion.div {...variantProps}>
                <Box
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="md"
                  bg="white"
                  p={4}
                  textAlign="center"
                  transition="transform 0.2s ease-out"
                  _hover={{ transform: "translateY(-5px)" }}
                >
                  <Image src={sweet.image} alt={sweet.name} mb={4} />
                  <Heading as="h3" size="md" mb={2}>
                    {sweet.name}
                  </Heading>
                  <Text fontSize="lg" mb={4}>
                    {sweet.description}
                  </Text>
                  <Rating rating={sweet.rating.rating} numRatings={sweet.rating.raters} />
                </Box>
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Sweets;
