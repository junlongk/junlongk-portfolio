import { Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function Blog() {
  return (
    <Flex
      direction="column"
      justify="space-around"
      align="center"
      m="40px"
      maxW={{ base: "330px", sm: "450px", md: "720px", lg: "960px" }}
    >
      <Heading as="h1" size="2xl" m="10px">
        Blog
      </Heading>
      <Container>
        <Text fontSize="sm" align="center" m="20px">
          A space for me to share my experience of being a self taught web
          developer, as well as tutorials for problems that I have managed to
          solve and which I think will benefit others by sharing.
        </Text>
      </Container>
      <Container>
        <Text fontSize="xl" align="center" m="20px" p="15px">
          Watch this space! ;)
        </Text>
      </Container>
    </Flex>
  );
}
