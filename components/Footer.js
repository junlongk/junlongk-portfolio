import { Box, Wrap, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GrGithub, GrLinkedinOption, GrTwitter } from "react-icons/gr";

export default function Footer() {
  return (
    <Box mt="40px" mb="10px">
      <Wrap justify="center" spacing="15px">
        <Link href="https://github.com/junlongk" passHref>
          <IconButton
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            colorScheme="teal"
            aria-label="Github Link"
            fontSize="20px"
            icon={<GrGithub />}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/keejunlong" passHref>
          <IconButton
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            colorScheme="blue"
            aria-label="LinkedIn Link"
            fontSize="20px"
            icon={<GrLinkedinOption />}
          />
        </Link>
        <Link href="https://twitter.com/junlongk" passHref>
          <IconButton
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            colorScheme="cyan"
            aria-label="Twitter Link"
            fontSize="20px"
            icon={<GrTwitter />}
          />
        </Link>
      </Wrap>
      <Text
        fontSize="xs"
        textAlign="center"
        mt="16px"
        pb="10px"
        color="gray.100"
      >
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2022 Jun Long
        K.
      </Text>
    </Box>
  );
}
