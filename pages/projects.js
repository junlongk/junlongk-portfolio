import { Flex, Heading, Text } from "@chakra-ui/react";

export default function projects() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      color="gray.50"
      p="40px"
    >
      <Heading as="h1" size="2xl" m="10px">
        Projects
      </Heading>
      <Text>
        This will be where I will be showcasing the web apps that I have
        created.
      </Text>
    </Flex>
  );
}
