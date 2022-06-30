import { Container, Flex, Heading, Text } from "@chakra-ui/react";

import ProjectCard from "../components/ProjectCard";

const projectData = [
  {
    image: "/images/projects-snippets/Codepen - FCC React Calculator.png",
    link: "https://codepen.io/junlongk/pen/dyJxQqr",
    title: "FreeCodeCamp - Calculator",
    description: "Basic calculator built using React",
  },
  {
    image: "/images/projects-snippets/Codepen - FCC React Drum Machine.png",
    link: "https://codepen.io/junlongk/pen/BaRBOPj",
    title: "FreeCodeCamp - Drum Machine",
    description: "Drum machine built using React",
  },
  {
    image:
      "/images/projects-snippets/Codepen - FCC React Markdown Previewer.png",
    link: "https://codepen.io/junlongk/pen/OJpEOgJ",
    title: "FreeCodeCamp - Markdown Previewer",
    description: "Markdown Previewer built using React",
  },
  {
    image:
      "/images/projects-snippets/Codepen - FCC React Random Quote Generator.png",
    link: "https://codepen.io/junlongk/pen/RwpVQyy",
    title: "FreeCodeCamp - Random Quote Generator",
    description: "Random Quote Generator built using React",
  },
  {
    image:
      "/images/projects-snippets/Codepen - FCC Technical Documentation Page.png",
    link: "https://codepen.io/junlongk/pen/WNrwwLZ",
    title: "FreeCodeCamp - Technical Documentation Page",
    description: "Technical Documentation Page built using just CSS & HTML",
  },
  {
    image: "/images/projects-snippets/Codepen - FCC Product Landing Page.png",
    link: "https://codepen.io/junlongk/pen/zYrrEXQ",
    title: "FreeCodeCamp - Product Landing Page",
    description: "Product Landing Page built using just CSS & HTML",
  },
  {
    image: "/images/projects-snippets/Codepen - FCC Survey Form.png",
    link: "https://codepen.io/junlongk/pen/rNxOLgj",
    title: "FreeCodeCamp - Survey Form",
    description: "Survey Form built using just CSS & HTML",
  },
  {
    image: "/images/projects-snippets/Codepen - FCC Tribute Page.png",
    link: "https://codepen.io/junlongk/pen/wvMaRNg",
    title: "FreeCodeCamp - Tribute Page",
    description: "Tribute Page built using just CSS & HTML",
  },
];

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
      color="gray.300"
      m="40px"
    >
      <Heading as="h1" size="2xl" m="10px">
        Projects
      </Heading>
      <Container>
        <Text fontSize="sm" align="center" m="20px">
          These consist of projects done during online courses, as while as
          personal projects
        </Text>
      </Container>
      <Flex direction="row" justify="center" wrap="wrap">
        {projectCards}
      </Flex>
    </Flex>
  );
}
