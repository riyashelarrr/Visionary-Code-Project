import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Grid,
  GridItem,
  AspectRatio,
  Icon,
  Link,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { FaPlayCircle } from "react-icons/fa";

const courseVideos = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "An introduction to the Python programming language.",
    youtubeId: "XoADNxgUXQc",
  },
  {
    id: 2,
    title: "Module 2: Variable and Data Types",
    description: "Learn about variables and data types in Python.",
    youtubeId: "aiNzCBM5Apc",
  },
  {
    id: 3,
    title: "Module 3: Operators and Expressions",
    description: "Learn about operators and expressions in Python.",
    youtubeId: "I4l9GXYSav4",
  },
  {
    id: 4,
    title: "Module 4: Input and Output",
    description: "Learn about input and output operations in Python.",
    youtubeId: "CJ2t9w03H3Q",
  },
  {
    id: 5,
    title: "Module 5: Conditional Statements",
    description: "Learn about conditional statements in Python.",
    youtubeId: "306kEUrTxJo",
  },
];

export const CourseScreen = ({ onNext, onBack }) => {
  const [selectedVideo, setSelectedVideo] = useState(courseVideos[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const listItemBg = useColorModeValue("gray.100", "gray.700");
  const selectedListItemBg = useColorModeValue("blue.100", "blue.800");

  return (
    <VStack width="100%" spacing={8}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 3fr" }}
        gap={8}
        width="100%"
        maxW="90vw"
        p={4}
      >
        <GridItem>
          <VStack spacing={4} align="stretch">
            <Heading size="lg">Python Course</Heading>
            {courseVideos.map((video) => (
              <Link
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                _hover={{ textDecoration: "none" }}
              >
                <HStack
                  p={4}
                  borderRadius="md"
                  bg={
                    selectedVideo.id === video.id
                      ? selectedListItemBg
                      : listItemBg
                  }
                  cursor="pointer"
                  transition="background 0.2s"
                >
                  <Icon as={FaPlayCircle} color="blue.500" />
                  <Box>
                    <Text fontWeight="bold">{video.title}</Text>
                  </Box>
                </HStack>
              </Link>
            ))}
          </VStack>
        </GridItem>
        <GridItem>
          <VStack spacing={4} align="stretch">
            <AspectRatio ratio={16 / 9}>
              <iframe
                title={selectedVideo.title}
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                allowFullScreen
              />
            </AspectRatio>
            <Heading size="lg">{selectedVideo.title}</Heading>
            <Text>{selectedVideo.description}</Text>
          </VStack>
        </GridItem>
      </Grid>
      <HStack>
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onNext} colorScheme="blue">
          Next
        </Button>
      </HStack>
    </VStack>
  );
};
