import { motion } from "framer-motion";
import { Box, Text, Button, Link } from "@chakra-ui/react";

const Construction = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" flex items-center justify-center h-screen"
    >
      <Box bg="gray.50" p={4}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Text fontSize="2xl" mb={2}>
            Our website is currently under construction.
          </Text>
          <Text mb={4}>
            We are working hard to bring you the best experience possible.
            Please check back later for updates.
          </Text>
          <Link href="tel:+919069190191">
            <Button colorScheme="blue" size="lg">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Construction;
