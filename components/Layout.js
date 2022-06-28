import { Box } from "@chakra-ui/react";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Box w="100%" h="100vh" bg="gray.900">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
