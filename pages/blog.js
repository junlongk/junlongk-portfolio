import { Flex, Heading, Text } from "@chakra-ui/react";

export default function blog() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      color="gray.50"
      p="40px"
    >
      <Heading as="h1" size="2xl" m="10px">
        Blog
      </Heading>
      <Text>
        This will be where I will be sharing my thoughts and my experience of
        doing a career switch and self learning everything.
      </Text>
    </Flex>
  );
}
