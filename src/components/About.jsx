import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Button,
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

  return (
    <Box id="about" bg="pink.50" py={{ base: 12, md: 20 }}>
      <Container maxW="container.xl">
        <Heading
          display={{ base: "block", md: "none" }}
          as="h2"
          size="xl"
          mb={4}
        >
          About Us
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Box
            flex="1"
            pr={{ md: 10 }}
            pb={{ base: 8, md: 0 }}
            order={{ base: 2, md: 1 }}
          >
            <motion.div {...variantProps}>
              <Heading
                display={{ base: "none", md: "block" }}
                as="h2"
                size="xl"
                mb={4}
              >
                About Us
              </Heading>
              <Text fontSize="lg" mb={8}>
                The secret behind JODHPURWALA premium quality products lies in
                its uncompromising attitude of using good-quality ingredients
                and striving into constant R&D practice to achieve the best
                flavor in all its offerings. We guarantee that by following the
                traditional and genuine methods of preparing sweets we give
                healthy goodness.
              </Text>
              <Button
                onClick={() => {
                  const section = document.getElementById("know_more");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                colorScheme="green"
              >
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
                mb={{ base: 4, md: 0 }}
              />
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
