import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import ShopClosingTimer from "./TimeProps";

const Timing = () => {

  const now = new Date().getDay()
  const closingTime = now === 0 ? new Date().setHours(18) : new Date().setHours(22)

  return (
    <Box id="timing" padding="2rem">
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Shop Timings
      </Heading>
      <Flex direction="column" alignItems="center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Box
            display="inline-block"
            bg="#FFD700"
            borderRadius="md"
            padding="1rem"
            flex="1"
            w="300px"
          >
            <Flex alignItems="center" mb={2}>
              <Box as={FaClock} fontSize="lg" color="white" mr={2} />
              <Text fontSize="lg" fontWeight="bold">
                Monday - Saturday
              </Text>
            </Flex>
            <Text>8:00 AM - 10:00 PM</Text>
          </Box>
          <Box
            display="inline-block"
            bg="#FFA500"
            borderRadius="md"
            padding="1rem"
            flex="1"
            w="300px"
          >
            <Flex alignItems="center" mb={2}>
              <Box as={FaClock} fontSize="lg" color="white" mr={2} />
              <Text fontSize="lg" fontWeight="bold">
                Sunday
              </Text>
            </Flex>
            <Text>8:00 AM – 6:00 PM</Text>
          </Box>
        </motion.div>
      </Flex>
      <Box
        display="inline-block"
        bg="orange.400"
        borderRadius="md"
        padding="1rem"
        flex="1"
        w="300px"
        my={4}
      >
        <Flex alignItems="center" mb={2} gap={4}>
          <Box as={FaClock} fontSize="lg" color="white" mr={2} />
          <ShopClosingTimer
            openingTime={new Date().setHours(8)}
            closingTime={closingTime}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Timing;
