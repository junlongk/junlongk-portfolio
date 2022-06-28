import { Box, Wrap, IconButton, Text } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <Box mt={20} mb={6}>
      <Wrap justify="center" spacing="20px">
        <IconButton
          variant="outline"
          colorScheme="cyan"
          aria-label="Github Link"
          fontSize="20px"
          icon={<DiGithubBadge />}
        />
        <IconButton
          variant="outline"
          colorScheme="blue"
          aria-label="LinkedIn Link"
          fontSize="20px"
          icon={<GrLinkedinOption />}
        />
      </Wrap>
      <Text fontSize="sm" textAlign="center" mt={4} pb={4} color="gray.50">
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2022 Jun Long
        K.
      </Text>
    </Box>
  );
}
