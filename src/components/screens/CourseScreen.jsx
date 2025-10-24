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

const VideoListItem = ({ video, isSelected, onSelect }) => {
  const listItemBg = useColorModeValue("gray.50", "gray.700");
  const selectedListItemBg = useColorModeValue("blue.100", "blue.800");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  const handleClick = () => {
    onSelect(video);
  };

  return (
    <Box
      as="button"
      onClick={handleClick}
      width="100%"
      textAlign="left"
      bg={isSelected ? selectedListItemBg : listItemBg}
      p={3}
      borderRadius="md"
      cursor="pointer"
      transition="background 0.2s, transform 0.2s"
      _hover={{
        bg: isSelected ? selectedListItemBg : hoverBg,
        transform: "scale(1.02)",
      }}
      role="option"
      aria-selected={isSelected}
    >
      <HStack spacing={4}>
        <Icon as={FaPlayCircle} color="blue.500" w={5} h={5} />
        <Text fontWeight="medium">{video.title}</Text>
      </HStack>
    </Box>
  );
};

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

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box p={{ base: 2, md: 8 }} width="100%">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 2.5fr" }}
        gap={8}
        width="100%"
        maxW="1600px"
        mx="auto"
      >
        {/* Playlist Section */}
        <GridItem>
          <Box
            p={4}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="xl"
            height="100%"
          >
            <VStack
              spacing={3}
              align="stretch"
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="listbox"
              aria-label="Course videos playlist"
            >
              <Heading size="md" mb={2} color={headingColor}>
                Python Course Modules
              </Heading>
              {courseVideos.map((video) => (
                <VideoListItem
                  key={video.id}
                  video={video}
                  isSelected={selectedVideo.id === video.id}
                  onSelect={handleVideoSelect}
                />
              ))}
            </VStack>
          </Box>
        </GridItem>

        {/* Video Player Section */}
        <GridItem>
          <VStack spacing={6} align="stretch">
            <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="xl">
              <VStack spacing={5} align="stretch">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    title={selectedVideo.title}
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                    allowFullScreen
                    style={{ borderRadius: "8px" }}
                  />
                </AspectRatio>
                <Heading size="lg" pt={2} color={headingColor}>
                  {selectedVideo.title}
                </Heading>
                <Text fontSize="md" color={textColor} minH="50px">
                  {selectedVideo.description}
                </Text>
              </VStack>
            </Box>
            <HStack justify="flex-end">
              <Button
                onClick={onNavigateToAccessibility}
                size="lg"
                variant="outline"
              >
                Accessibility
              </Button>
              <Button onClick={onNext} colorScheme="blue" size="lg">
                Next
              </Button>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};
