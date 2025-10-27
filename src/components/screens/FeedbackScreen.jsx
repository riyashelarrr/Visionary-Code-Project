import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Icon,
  Text,
  Button,
  Flex,
  Spacer,
  CardRoot,
  CardBody,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import {
  FaRegAngry,
  FaRegFrown,
  FaRegMeh,
  FaRegSmile,
  FaRegGrinBeam,
} from "react-icons/fa";

const feedbackOptions = [
  { level: "Bad", icon: FaRegAngry, color: "red.500" },
  { level: "Not Good", icon: FaRegFrown, color: "orange.500" },
  { level: "Moderate", icon: FaRegMeh, color: "yellow.500" },
  { level: "Good", icon: FaRegSmile, color: "green.300" },
  { level: "Excellent", icon: FaRegGrinBeam, color: "green.500" },
];

export const FeedbackScreen = ({ onFinish }) => {
  const [selected, setSelected] = useState(null);

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const screenBg = useColorModeValue("gray.50", "gray.900");
  const selectedBg = useColorModeValue("blue.100", "blue.700");

  const handleSubmit = () => {
    if (selected !== null) {
      alert(`Thank you for your feedback: ${feedbackOptions[selected].level}`);
      onFinish();
    } else {
      alert("Please select a feedback option.");
    }
  };

  return (
    <CardRoot
      boxShadow="2xl"
      borderRadius="xl"
      p={{ base: 2, md: 8 }}
      width="100%"
      maxW="90vw"
      bg={cardBg}
    >
      <CardBody>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" color={headingColor} textAlign="center">
            PLEASE GIVE YOUR FEEDBACK
          </Heading>
          <HStack justify="space-around" spacing={4} my={8}>
            {feedbackOptions.map((option, index) => (
              <VStack
                key={index}
                onClick={() => setSelected(index)}
                cursor="pointer"
                p={4}
                borderRadius="lg"
                bg={selected === index ? selectedBg : "transparent"}
                transition="background-color 0.2s ease-in-out"
              >
                <Icon
                  as={option.icon}
                  w={20}
                  h={20}
                  color={option.color}
                  transform={selected === index ? "scale(1.1)" : "scale(1)"}
                  transition="transform 0.2s ease-in-out"
                />
                <Text fontWeight="medium" color={textColor}>
                  {option.level}
                </Text>
              </VStack>
            ))}
          </HStack>

          <Flex
            width="100%"
            height="20px"
            borderRadius="md"
            overflow="hidden"
            my={4}
          >
            <Box flex="1" bg="red.500" />
            <Box flex="1" bg="orange.500" />
            <Box flex="1" bg="yellow.500" />
            <Box flex="1" bg="green.300" />
            <Box flex="1" bg="green.500" />
          </Flex>

          <HStack width="100%" color={textColor}>
            <Text>BAD</Text>
            <Spacer />
            <Text>MODERATE</Text>
            <Spacer />
            <Text>GOOD</Text>
          </HStack>
          <Button
            onClick={handleSubmit}
            colorScheme="blue"
            size="lg"
            width="full"
            mt={8}
          >
            Submit Feedback
          </Button>
        </VStack>
      </CardBody>
    </CardRoot>
  );
};
