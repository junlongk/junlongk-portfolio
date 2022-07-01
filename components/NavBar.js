import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      direction="row"
      justify="space-around"
      align="center"
      gap={["5px", "20px", "50px", "100px"]}
      m="20px"
    >
      <Link href="/" passHref>
        <Button as="a" variant="outline" colorScheme="cyan">
          Home
        </Button>
      </Link>
      <Link href="/about" passHref>
        <Button as="a" variant="ghost" colorScheme="cyan">
          About
        </Button>
      </Link>

      <Link href="/blog" passHref>
        <Button as="a" variant="ghost" colorScheme="cyan">
          Blog
        </Button>
      </Link>

      <Link href="/projects" passHref>
        <Button as="a" variant="ghost" colorScheme="cyan">
          Projects
        </Button>
      </Link>
    </Flex>
  );
}
