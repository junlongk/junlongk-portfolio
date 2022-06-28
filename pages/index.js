import { Box, Heading, Stack } from "@chakra-ui/react";

import Typed from "typed.js";

export default function Home() {
  return (
    <Stack spacing="40px" align="center" p="100px">
      <Heading
        as="h1"
        size="2xl"
        bgGradient="linear(to-r, gray.200, gray.500)"
        bgClip="text"
      >
        Hello, I am Jun Long
      </Heading>
      <Heading
        as="h2"
        size="xl"
        bgGradient="linear(to-r, gray.200, gray.500)"
        bgClip="text"
      >
        I create things with codes
      </Heading>
    </Stack>
  );
}
