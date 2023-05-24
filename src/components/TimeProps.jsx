import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const ShopClosingTimer = ({ openingTime, closingTime }) => {
  const [remainingTime, setRemainingTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const opening = new Date(openingTime);
      const closing = new Date(closingTime);

      // Check if the shop is currently open
      if (now >= opening && now < closing) {
        setIsOpen(true);
        // Calculate the time remaining until closing
        const timeDiff = closing - now;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Format the remaining time
        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        setRemainingTime(formattedTime);
      } else {
        setIsOpen(false);
        // Calculate the time remaining until opening
        const timeDiff = opening - now;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Format the remaining time
        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        setRemainingTime(formattedTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [openingTime, closingTime]);

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        {isOpen ? "Shop Closing In:" : "Shop Opening In:"}
      </Text>
      <Text fontSize="2xl" fontWeight="bold">
        {remainingTime}
      </Text>
    </Box>
  );
};

export default ShopClosingTimer;
