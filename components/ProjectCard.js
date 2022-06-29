import { Flex, Image, Link, Heading, Text } from "@chakra-ui/react";

export default function ProjectCard({ image, link, title, description }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      border="1px #4A5568 solid"
      borderRadius="10px"
      m="20px"
      maxW="400px"
      maxH="300px"
    >
      <Image width="400px" fit="scale-down" src={image} alt={title} p="10px" />
      <Link href={link} isExternal>
        <Heading as="h2" size="md" align="center" m="5px">
          {title}
        </Heading>
      </Link>
      <Text fontSize="sm" m="5px">
        {description}
      </Text>
    </Flex>
  );
}
