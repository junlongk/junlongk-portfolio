import { Flex, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      direction="row"
      justify="space-evenly"
      align="center"
      gap={["0px", "20px", "50px", "100px"]}
      m="20px"
      p="5px"
      borderRadius="5px"
      backdropFilter="auto"
      backdropBlur="10px"
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Link href="/" passHref>
        <Button as="a" variant="ghost" color="cyan.400">
          JUNLONG K.
        </Button>
      </Link>
      <HStack>
        <Link href="/about" passHref>
          <Button as="a" variant="ghost" color="cyan.600">
            About
          </Button>
        </Link>

        <Link href="/blog" passHref>
          <Button as="a" variant="ghost" color="cyan.600">
            Blog
          </Button>
        </Link>

        <Link href="/projects" passHref>
          <Button as="a" variant="ghost" color="cyan.600">
            Projects
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
