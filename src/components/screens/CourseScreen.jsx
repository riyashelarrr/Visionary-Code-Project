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
  {
    id: 6,
    title: "Module 6: Loops",
    description: "Learn about loops in Python.",
    youtubeId: "vAFCn_fZmu8",
  },
  {
    id: 7,
    title: "Module 7: Functions",
    description: "Learn about functions in Python.",
    youtubeId: "oO7ufW7jnO0",
  },
  {
    id: 8,
    title: "Module 8: Collections",
    description: "Learn about collections in Python.",
    youtubeId: "35PQlrukzgE",
  },
  {
    id: 9,
    title: "Module 9: Libraries",
    description: "Learn about libraries in Python.",
    youtubeId: "BBw2quQB2Io",
  },
  {
    id: 10,
    title: "Module 10: File Handling & Exceptions",
    description: "Learn about file handling and exceptions in Python.",
    youtubeId: "ol_SYwSvsF8",
  },
];

export const CourseScreen = ({ onNext, onNavigateToAccessibility }) => {
  const [selectedVideo, setSelectedVideo] = useState(courseVideos[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleKeyDown = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

    e.preventDefault();

    const currentIndex = courseVideos.findIndex(
      (v) => v.id === selectedVideo.id
    );

    let nextIndex;
    if (e.key === "ArrowDown") {
      nextIndex =
        currentIndex === courseVideos.length - 1
          ? currentIndex
          : currentIndex + 1;
    } else {
      nextIndex = currentIndex === 0 ? currentIndex : currentIndex - 1;
    }

    setSelectedVideo(courseVideos[nextIndex]);
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
          <VStack
            spacing={4}
            align="stretch"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="listbox"
          >
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
        <Button onClick={onNavigateToAccessibility}>Accessibility</Button>
        <Button onClick={onNext} colorScheme="blue">
          Next
        </Button>
      </HStack>
    </VStack>
  );
};
