import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("pink.100", "pink.900")}
      color={useColorModeValue("pink.800", "pink.200")}
    >
      <Box
        mx="auto"
        pt={12}
        pb={2}
        px={{ base: "4", md: "8" }}
        maxW="7xl"
        direction={{ base: "column", lg: "row" }}
      >
        <Stack
          spacing={6}
          mb={6}
          mr={{ lg: 8 }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Text fontWeight="bold" fontSize={{ base: "xl", lg: "2xl" }}>
            Sri Jodhpur Mithai Ghar
          </Text>
          <Text fontSize={{ base: "sm", lg: "md" }}>
            A one-stop-shop forall your Rajasthan sweet needs!
            <br />
            We offer a wide variety of authentic sweets from Rajasthan, made
            with the finest ingredients and traditional recipes.
          </Text>
        </Stack>
        <Flex
          justifyContent={{ base: "center", md: "space-around" }}
          flexWrap="wrap"
        >
          <Stack
            spacing={2}
            mb={{ base: 8, lg: 0 }}
            mr={{ lg: 8 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text fontWeight="bold" fontSize={{ base: "xl", lg: "2xl" }}>
              Quick Links
            </Text>
            <Text fontSize={{ base: "sm", lg: "md" }}>Home</Text>
            <Text fontSize={{ base: "sm", lg: "md" }}>About Us</Text>
            <Text fontSize={{ base: "sm", lg: "md" }}>Products</Text>
            <Text fontSize={{ base: "sm", lg: "md" }}>Contact Us</Text>
          </Stack>
          <Stack
            spacing={4}
            mb={{ base: 8, lg: 0 }}
            mr={{ lg: 8 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text fontWeight="bold" fontSize={{ base: "xl", lg: "2xl" }}>
              Contact Us
            </Text>
            <Text maxW={300} fontSize={{ base: "sm", lg: "md" }}>
              Address: 15-8-520/3, Begum Bazaar Rd, Begum Bazar, Feelkhana,
              Hyderabad, Telangana 500012
            </Text>
            <Text fontSize={{ base: "sm", lg: "md" }}>
              Phone: +91 9069190191
            </Text>
            <Text fontSize={{ base: "sm", lg: "md" }}>
              Email: info@srijodhpurwala.com
            </Text>
          </Stack>

          <Stack spacing={6} textAlign={{ base: "center", lg: "left" }}>
            <Text fontWeight="bold" fontSize={{ base: "xl", lg: "2xl" }}>
              Follow Us
            </Text>
            <Flex>
              <IconButton
                colorScheme="facebook"
                aria-label="Facebook"
                variant="outline"
                icon={<FaFacebook size="30px" />}
                size="lg"
                mr="4"
              />
              <IconButton
                colorScheme="pink"
                aria-label="Instagram"
                variant="outline"
                icon={<FaInstagram size="30px" />}
                size="lg"
                mr="4"
              />
              <IconButton
                colorScheme="twitter"
                aria-label="Twitter"
                variant="outline"
                icon={<FaTwitter size="30px" />}
                size="lg"
                mr="4"
              />
              <IconButton
                colorScheme="red"
                aria-label="Youtube"
                variant="outline"
                icon={<FaYoutube size="30px" />}
                size="lg"
              />
            </Flex>
          </Stack>
        </Flex>
      </Box>
      <Box
        borderTopWidth={1}
        borderTopColor={useColorModeValue("gray.200", "gray.700")}
        py={4}
        textAlign="center"
        fontSize={{ base: "sm", lg: "md" }}
      >
        © {new Date().getFullYear()} Sri Jodhpurwala Sweets.
        <br /> All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
