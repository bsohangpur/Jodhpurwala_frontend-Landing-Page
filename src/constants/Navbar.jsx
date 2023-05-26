import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Icon,
  useDisclosure,
  Link,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Logo__01_main } from "../assets";
import { links } from "../data";

const NavItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      fontSize="xl"
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      display="block"
      {...rest}
    >
      <Button
        onClick={() => {
          const section = document.getElementById(to);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        color="blue.100"
        variant="link"
        textTransform="capitalize"
      >
        {children}
      </Button>
    </Text>
  );
};

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MotionBox = motion(Box);

  const menuVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <Icon as={MdClose} /> : <Icon as={AiOutlineMenu} />}
          aria-label={"Open Menu"}
          display="inherit"
          onClick={isOpen ? onClose : onOpen}
          variant="solid"
          colorScheme="orange"
        />
        <Image h={70} src={Logo__01_main} alt="main logo" />
        <Button variant="solid" colorScheme="orange" mr={{ md: "4" }}>
          Contact Now
        </Button>
      </Flex>

      {isOpen ? (
        <MotionBox
          variants={menuVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className=" backdrop-blur-xl"
        >
          <VStack
            display="block"
            spacing={6}
            align="stretch"
            sx={{ "& > *": { w: "full" } }}
            py={4}
          >
            {links.map(({ link, name }) => (
              <MotionBox key={link} variants={menuVariants}>
                <NavItem to={link}>{name}</NavItem>
              </MotionBox>
            ))}
          </VStack>
        </MotionBox>
      ) : null}
    </Box>
  );
};

export default NavBar;
