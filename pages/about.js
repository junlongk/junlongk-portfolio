import { Flex, Box, Wrap, Heading, Text, Avatar, Icon } from "@chakra-ui/react";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function about() {
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      wrap="wrap-reverse"
      m="40px 20px"
      maxW={{ base: "330px", sm: "450px", md: "720px", lg: "960px" }}
    >
      <Box
        border="1px #4A5568 solid"
        p={["0px", "10px", "25px", "40px"]}
        m="20px"
        w={["100%", "100%", "65%", "70%"]}
      >
        <Heading as="h1" size="2xl" m="20px">
          About Me
        </Heading>
        <Text m="20px">
          Hey there! I am Jun Long from Singapore. I was previously a Project
          Engineer in the industry of industrial equipments and I am currently
          pursuing web development full time.
        </Text>
        <Text m="20px">
          I was learning web development during my free time and I realised that
          learning new technologies and being able to create stuff through
          coding was what I am really interested in. Hence, that explains the
          career switch.
        </Text>
        <Text m="20px">
          My current skillset is React, in particular Next.JS with vanilla
          Javascript. I am planning to explore on the backend as well in order
          to have a better understanding of full stack applications. I have
          interest in blockchain technology as well as I believe blockchain will
          have a big part to play in shaping the technology in the coming years.
        </Text>
      </Box>
      <Flex
        direction="column"
        align="center"
        m="20px"
        w={["100%", "100%", "20%", "20%"]}
      >
        <Avatar size="2xl" />
        <Text fontSize="3xl">Jun Long</Text>
        <Wrap>
          <Icon as={DiJavascript1} fontSize="20px" />
          <Icon as={FaReact} fontSize="20px" />
          <Icon as={SiNextdotjs} fontSize="20px" />
        </Wrap>
      </Flex>
    </Flex>
  );
}
