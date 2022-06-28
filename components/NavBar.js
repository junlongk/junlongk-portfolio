import { Flex, HStack, Button } from "@chakra-ui/react";

import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      gap="5"
      className="NavBar"
      p="20px"
    >
      <Link href="/" passHref>
        <Button as="a" variant="outline" colorScheme="cyan">
          Home
        </Button>
      </Link>
      <HStack>
        <Link href="/about" passHref>
          <Button as="a" variant="outline" colorScheme="cyan">
            About
          </Button>
        </Link>
        <Link href="/blog" passHref>
          <Button as="a" variant="outline" colorScheme="cyan">
            Blog
          </Button>
        </Link>
        <Link href="/projects" passHref>
          <Button as="a" variant="outline" colorScheme="cyan">
            Projects
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
