import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box id="contact">
      <Heading as='h1' my={4}>
        Contact Us
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        maxWidth="1280px"
        margin="auto"
        bg="pink.50"
        padding="2rem"
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          height="400px"
          borderRadius="md"
          boxShadow="md"
          overflow="hidden"
          mr={{ base: 0, md: "2rem" }}
          mb={{ base: "2rem", md: 0 }}
        >
          <motion.iframe
            alt="Map"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.414052101616!2d78.4711844!3d17.3753991!2m3!1f0!2f17.27!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9780c971de7f%3A0xde201b8373126a1!2sSri%20Jodhpur%20Mithai%20Ghar!5e0!3m2!1sen!2s!4v1651661120004"
            width="600"
            height="550"
            allowFullScreen={true}
            loading="lazy"
            className="motion-safe:animate-fade-in"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              border: "0",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Box>
        <Box width={{ base: "100%", md: "50%" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Contact Details
            </Text>
            <Text mb={2}>
              <strong>Name:</strong> Sri Jodhpur Mithai Ghar
            </Text>
            <Text mb={2}>
              <strong>Email:</strong> info@srijodhpurwala.com
            </Text>
            <Text mb={2}>
              <strong>Phone:</strong> +91 9069190191
            </Text>
            <Text>
              <strong>Address:</strong> 15-8-520/3, Begum Bazaar Rd, Begum
              Bazar, Feelkhana, Hyderabad, Telangana 500012
            </Text>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
