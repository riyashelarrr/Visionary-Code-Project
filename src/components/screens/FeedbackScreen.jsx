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
  Textarea,
  RadioGroup,
  Stack,
  Field,
  Fieldset,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import {
  FaRegAngry,
  FaRegFrown,
  FaRegMeh,
  FaRegSmile,
  FaRegGrinBeam,
  FaStar,
} from "react-icons/fa";

const feedbackOptions = [
  { level: "Bad", icon: FaRegAngry, color: "red.500" },
  { level: "Not Good", icon: FaRegFrown, color: "orange.500" },
  { level: "Moderate", icon: FaRegMeh, color: "yellow.500" },
  { level: "Good", icon: FaRegSmile, color: "green.300" },
  { level: "Excellent", icon: FaRegGrinBeam, color: "green.500" },
];

export const FeedbackScreen = ({ onFinish }) => {
  const [satisfaction, setSatisfaction] = useState(null);
  const [navigation, setNavigation] = useState(0);
  const [readable, setReadable] = useState("");
  const [comments, setComments] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const screenBg = useColorModeValue("gray.50", "gray.900");
  const selectedBg = useColorModeValue("blue.100", "blue.700");

  const handleSubmit = () => {
    if (satisfaction !== null) {
      alert(
        `Thank you for your feedback!\nSatisfaction: ${feedbackOptions[satisfaction].level}\nNavigation: ${navigation} stars\nReadable: ${readable}\nComments: ${comments}`
      );
      onFinish();
    } else {
      alert("Please select a satisfaction level.");
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
            Please Provide Your Feedback
          </Heading>
          <HStack justify="space-around" spacing={4} my={8}>
            {feedbackOptions.map((option, index) => (
              <VStack
                key={index}
                onClick={() => setSatisfaction(index)}
                cursor="pointer"
                p={4}
                borderRadius="lg"
                bg={satisfaction === index ? selectedBg : "transparent"}
                transition="background-color 0.2s ease-in-out"
              >
                <Icon
                  as={option.icon}
                  w={20}
                  h={20}
                  color={option.color}
                  transform={satisfaction === index ? "scale(1.1)" : "scale(1)"}
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

          <Fieldset.Root>
            <Fieldset.Content>
              <VStack spacing={6} align="stretch" mt={8}>
                <Field.Root>
                  <Field.Label fontSize="lg">
                    How easy was navigation?
                  </Field.Label>
                  <HStack>
                    {[...Array(5)].map((_, index) => {
                      const starValue = index + 1;
                      return (
                        <Icon
                          as={FaStar}
                          key={starValue}
                          boxSize={8}
                          color={
                            starValue <= (hoveredStar || navigation)
                              ? "yellow.400"
                              : "gray.300"
                          }
                          onClick={() => setNavigation(starValue)}
                          onMouseEnter={() => setHoveredStar(starValue)}
                          onMouseLeave={() => setHoveredStar(0)}
                          cursor="pointer"
                        />
                      );
                    })}
                  </HStack>
                </Field.Root>

                <Field.Root>
                  <Field.Label fontSize="lg">Was the text readable?</Field.Label>
                  <RadioGroup.Root
                    onValueChange={(details) => setReadable(details.value)}
                    value={readable}
                  >
                    <HStack spacing={4}>
                      <RadioGroup.Item value="Yes">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
                      </RadioGroup.Item>
                      <RadioGroup.Item value="No">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>No</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </HStack>
                  </RadioGroup.Root>
                </Field.Root>

                <Field.Root>
                  <Field.Label fontSize="lg">
                    Any other comments? (Optional)
                  </Field.Label>
                  <Textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Keep it short..."
                  />
                </Field.Root>
              </VStack>
            </Fieldset.Content>
          </Fieldset.Root>

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
