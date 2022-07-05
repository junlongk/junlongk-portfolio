import { Flex, Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      direction="row"
      justify="space-evenly"
      align="center"
      gap={{ base: "5px", sm: "10px", md: "50px", lg: "100px" }}
      m="20px"
      borderRadius="5px"
      backdropFilter="auto"
      backdropBlur="10px"
      position="sticky"
      top="5px"
      zIndex="1"
    >
      <Link href="/" passHref>
        <Button
          as="a"
          size={{ base: "sm", sm: "md" }}
          variant="ghost"
          color="cyan.400"
        >
          JUNLONG K.
        </Button>
      </Link>
      <ButtonGroup size={{ base: "xs", sm: "sm" }} isAttached variant="ghost">
        <Link href="/about" passHref>
          <Button as="a" color="cyan.600">
            About
          </Button>
        </Link>

        <Link href="/blog" passHref>
          <Button as="a" color="cyan.600">
            Blog
          </Button>
        </Link>

        <Link href="/projects" passHref>
          <Button as="a" color="cyan.600">
            Projects
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
}
