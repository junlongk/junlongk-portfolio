import { Flex, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      gap="5"
      className="NavBar"
    >
      <Link href="/" passHref>
        <Button as="a" bg="gray.100">
          JUNLONGK
        </Button>
      </Link>
      <HStack>
        <Link href="/about" passHref>
          <Button as="a" bg="gray.400">
            About
          </Button>
        </Link>
        <Link href="/blog" passHref>
          <Button as="a" bg="gray.400">
            Blog
          </Button>
        </Link>
        <Link href="/projects" passHref>
          <Button as="a" bg="gray.400">
            Projects
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
