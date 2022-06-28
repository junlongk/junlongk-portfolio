import { Box, Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Stack spacing="40px" align="center">
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-l, gray.100, gray.600)"
          bgClip="text"
        >
          Hello, I am Jun Long
        </Heading>
        <Heading
          as="h2"
          size="xl"
          bgGradient="linear(to-l, gray.100, gray.600)"
          bgClip="text"
        >
          Frontend Web Developer
        </Heading>
      </Stack>
    </Box>
  );
}
