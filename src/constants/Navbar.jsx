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

const NavItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      fontSize="xl"
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
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
        <Image h={70} src={Logo__01_main} alt="main logo"/>
        <Box>
          <Button variant="solid" colorScheme="orange" mr="4">
            Contact Now
          </Button>
        </Box>
      </Flex>

      {isOpen ? (
        <MotionBox
          variants={menuVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        >
          <VStack
            display="block"
            spacing={6}
            align="stretch"
            sx={{ "& > *": { w: "full" } }}
            py={4}
          >
            <MotionBox variants={menuVariants}>
              <NavItem to={"/"}>Home</NavItem>
            </MotionBox>
            <MotionBox variants={menuVariants}>
              <NavItem to={"/about"}>About</NavItem>
            </MotionBox>
            <MotionBox variants={menuVariants}>
              <NavItem to={"/products"}>Products</NavItem>
            </MotionBox>{" "}
            <MotionBox variants={menuVariants}>
              <NavItem to={"/contact"} isLast>
                Contact
              </NavItem>
            </MotionBox>
          </VStack>
        </MotionBox>
      ) : null}
    </Box>
  );
};

export default NavBar;
