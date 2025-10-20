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
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { FaPlayCircle } from "react-icons/fa";

const courseVideos = [
  {
    id: 1,
    title: "Introduction to Python",
    duration: "12:34",
    youtubeId: "XoADNxgUXQc",
  },
  {
    id: 2,
    title: "Variables and Data Types",
    duration: "15:20",
    youtubeId: "eWRfhZUzrAc",
  },
  {
    id: 3,
    title: "Conditional Logic",
    duration: "18:55",
    youtubeId: "DZ_v92-I_3Y",
  },
  {
    id: 4,
    title: "Functions and Modules",
    duration: "22:10",
    youtubeId: "9Opi_6k_K-M",
  },
  {
    id: 5,
    title: "Loops and Iterators",
    duration: "25:00",
    youtubeId: "6iF8Xb7Z3wQ",
  },
  {
    id: 6,
    title: "Data Structures: Lists & Tuples",
    duration: "20:45",
    youtubeId: "sf-p-315P-A",
  },
  {
    id: 7,
    title: "Data Structures: Dictionaries",
    duration: "19:30",
    youtubeId: "daefaLgNkw0",
  },
];

export const CourseScreen = () => {
  const [selectedVideo, setSelectedVideo] = useState(courseVideos[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const listItemBg = useColorModeValue("gray.100", "gray.700");
  const selectedListItemBg = useColorModeValue("blue.100", "blue.800");

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 3fr" }}
      gap={8}
      width="100%"
      maxW="1600px"
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
                  <Text fontSize="sm" color="gray.500">
                    {video.duration}
                  </Text>
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
          <Text>
            Now playing: {selectedVideo.title}. Use the list on the left to
            select a different video.
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  );
};
