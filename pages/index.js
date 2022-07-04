import { Stack, Heading } from "@chakra-ui/react";

import Typing from "../components/Animations/Typing";

const heading1 = {
  strings: ["Hello, I am Jun Long"],
  startDelay: 100,
  typeSpeed: 50,
  showCursor: true,
};

const heading2 = {
  strings: [
    "I build with Javascript",
    "I build with ReactJS",
    "I build with NextJS",
  ],
  startDelay: 1000,
  typeSpeed: 100,
  backDelay: 200,
  backSpeed: 150,
  showCursor: true,
  smartBackspace: true,
  loop: true,
};

export default function Home() {
  return (
    <Stack
      spacing={{ base: "20px", md: "100px" }}
      m="20px"
      minW={{ base: "330px", sm: "450px", md: "720px", lg: "960px" }}
    >
      <Heading
        as="h1"
        size={{
          base: "lg",
          sm: "2xl",
          md: "3xl",
        }}
        bgGradient="linear(to-l, gray.100, gray.500)"
        bgClip="text"
        align="left"
        p="20px"
      >
        <Typing options={heading1} />
      </Heading>
      <Heading
        as="h1"
        size={{
          base: "sm",
          sm: "md",
          md: "lg",
        }}
        bgGradient="linear(to-l, gray.200, gray.800)"
        bgClip="text"
        align="right"
        p="20px"
      >
        <Typing options={heading2} />
      </Heading>
    </Stack>
  );
}
