import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Navbar, Footer } from "./constants";
import { Hero, About, Sweets, Contact, Reviews, Timing } from "./components";

function App() {
  return (
    <ChakraProvider>
      <Box className=" maxW-[1280px] md:p-4 text-center overflow-x-hidden ">
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Timing />
        <Sweets />
        <Contact />
        <Reviews />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
