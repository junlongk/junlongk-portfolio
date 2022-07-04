import { Container, Flex, Heading, Text } from "@chakra-ui/react";

import ProjectCard from "../components/ProjectCard";
import projectData from "../components/projectData";

const projectCards = projectData.map((project) => {
  return (
    <ProjectCard
      image={project.image}
      link={project.link}
      title={project.title}
      description={project.description}
    />
  );
});

export default function projects() {
  return (
    <Flex
      direction="column"
      justify="space-around"
      align="center"
      m="40px"
      maxW={{
        base: "330px",
        sm: "450px",
        md: "720px",
        lg: "960px",
        xl: "1400px",
      }}
    >
      <Heading as="h1" size="2xl" m="10px">
        Projects
      </Heading>
      <Container>
        <Text fontSize="sm" align="center" m="20px">
          These consist of projects done during online courses, as while as my
          personal projects.
        </Text>
      </Container>
      <Flex direction="row" justify="center" wrap="wrap">
        {projectCards}
      </Flex>
    </Flex>
  );
}
