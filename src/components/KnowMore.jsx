import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function KnowMore() {
  return (
    <Box textAlign="center" mb={6} p={4}>
      <Flex direction="column" align="center" justify="center">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h1" size="xl" mb={4}>
            Who We Are.
          </Heading>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box bg="orange.50" p={8} rounded="md" shadow="md" maxW="5xl">
            <Heading as="h2" size="md" mb={4}>
              Know More About Us.
            </Heading>
            <Text>
              SRI JODHPURWALA, known for its wide variety of ethnic sweets, is
              one of Hyderabad’s most popular sweet store and is continuously
              serving all its customers with quality at most affordable prices.
              Inaugurated in 1994, today we have extended our outlets in various
              part of hyderabad which wouldn't have been possible without the
              help of our beloved costumers. We thank you all for your
              continuous support.{" "}
            </Text>
          </Box>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box bg="orange.50" p={8} rounded="md" shadow="md" maxW="5xl" mt={6}>
            <Heading as="h2" size="md" mb={4}>
              Once Upon A Time
            </Heading>
            <Text>
              The idea of Sri Jodhpurwala sweets was Incorporated in the year
              1994 , when the patriarch of Tiwari family, Mr Shyam Sunder Tiwari
              , decided to changeover from his metal containers business, into
              producing & retailing Sweets & Fast Food. Soon after, the family
              chose to focus on sweets, and hence, "Sri Jodhpurwala sweets" was
              born.
            </Text>
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
}

export default KnowMore;
