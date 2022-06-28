import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function about() {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      p="40px"
      m="0 auto"
      gap="10"
      color="gray.50"
    >
      <Box border="1px #fff solid" p="50px">
        <Heading as="h1" size="3xl" m="10px">
          About Me
        </Heading>
        <Text m="10px">
          Hey there! I am Jun Long from Singapore. I was previously a Project
          Engineer in the industry of industrial equipments and I am currently
          pursuing web development full time.
        </Text>
        <Text m="10px">
          I was learning web development during my free time and I realised that
          I enjoy learning new technologies and creating stuff. Hence I took the
          leap of faith to do this full time.
        </Text>
        <Text m="10px">
          My current skillset is React, NextJS. I am planning to touch on the
          the M, E &amp; N (MongoDB, ExpressJS, NodeJS) in the MERN stack next
          so that I will be able to create a full stack application.
        </Text>
      </Box>
      <Flex flexDirection="column" border="1px #fff solid">
        Photo and description
      </Flex>
    </Flex>
  );
}
