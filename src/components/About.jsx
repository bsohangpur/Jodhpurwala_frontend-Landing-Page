import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// import sweetImage from "./rajasthan-sweets.jpg";

const sweetImage =
  "https://img.freepik.com/free-photo/delicious-indian-dessert-arrangement-view_23-2149312354.jpg?w=900&t=st=1684921680~exp=1684922280~hmac=11393888160774de2c9f89b24d1d0dc7b5b832678ea0d94aa532c4681ccea8cc";

const About = () => {
  const variantProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box bg="pink.50" py={{ base: 12, md: 20 }}>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Box
            flex="1"
            pr={{ md: 10 }}
            pb={{ base: 8, md: 0 }}
            order={{ base: 2, md: 1 }}
          >
            <motion.div {...variantProps}>
              <Heading as="h2" size="xl" mb={4}>
                About Us
              </Heading>
              <Text fontSize="lg" mb={8}>
                We are a family-owned business that has been making and serving
                the best sweets in Rajasthan for over 50 years. Our sweets are
                made with the finest ingredients and are prepared using
                traditional recipes that have been passed down through
                generations.
              </Text>
              <Button size={buttonSize} colorScheme="green">
                Learn More
              </Button>
            </motion.div>
          </Box>
          <Box flex="1" order={{ base: 1, md: 2 }}>
            <motion.div {...variantProps}>
              <Image
                src={sweetImage}
                alt="Rajasthan Sweets"
                borderRadius="md"
                boxShadow="md"
              />
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
