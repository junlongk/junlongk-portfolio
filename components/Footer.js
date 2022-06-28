import { Box, Wrap, IconButton, Text } from "@chakra-ui/react";

import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <Box mt={20} mb={6}>
      <Wrap justify="center" spacing="20px">
        <Link href="https://github.com/junlongk" passHref>
          <IconButton
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            colorScheme="teal"
            aria-label="Github Link"
            fontSize="20px"
            icon={<DiGithubBadge />}
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
      </Wrap>
      <Text fontSize="sm" textAlign="center" mt={4} pb={4} color="gray.50">
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2022 Jun Long
        K.
      </Text>
    </Box>
  );
}
