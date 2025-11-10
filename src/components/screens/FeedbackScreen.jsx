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
import { useAccessibility } from "../../context/AccessibilityContext";
import navigationSound from "../../assets/sounds/navigation.mp3";

const feedbackOptions = [
  { level: "Bad", icon: FaRegAngry, color: "red.500" },
  { level: "Not Good", icon: FaRegFrown, color: "orange.500" },
  { level: "Moderate", icon: FaRegMeh, color: "yellow.500" },
  { level: "Good", icon: FaRegSmile, color: "green.300" },
  { level: "Excellent", icon: FaRegGrinBeam, color: "green.500" },
];

const StarRatingInput = ({ label, value, onValueChange, hoveredValue, onHoveredValueChange }) => (
  <Field.Root>
    <Field.Label fontSize="lg">{label}</Field.Label>
    <HStack>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Icon
            as={FaStar}
            key={starValue}
            boxSize={8}
            color={
              starValue <= (hoveredValue || value)
                ? "yellow.400"
                : "gray.300"
            }
            onClick={() => onValueChange(starValue)}
            onMouseEnter={() => onHoveredValueChange(starValue)}
            onMouseLeave={() => onHoveredValueChange(0)}
            cursor="pointer"
          />
        );
      })}
    </HStack>
  </Field.Root>
);


export const FeedbackScreen = ({ onFinish }) => {
  const [satisfaction, setSatisfaction] = useState(null);
  const [clarity, setClarity] = useState(0);
  const [hoveredClarity, setHoveredClarity] = useState(0);
  const [responsiveness, setResponsiveness] = useState(0);
  const [hoveredResponsiveness, setHoveredResponsiveness] = useState(0);
  const [screenReader, setScreenReader] = useState(0);
  const [hoveredScreenReader, setHoveredScreenReader] = useState(0);
  const [contrast, setContrast] = useState("");
  const [audioFeedback, setAudioFeedback] = useState(0);
  const [hoveredAudioFeedback, setHoveredAudioFeedback] = useState(0);
  const [overallAccessibility, setOverallAccessibility] = useState(0);
  const [hoveredOverallAccessibility, setHoveredOverallAccessibility] = useState(0);
  const [improvements, setImprovements] = useState("");
  const [likes, setLikes] = useState("");

  const { soundEnabled } = useAccessibility();

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const screenBg = useColorModeValue("gray.50", "gray.900");
  const selectedBg = useColorModeValue("blue.100", "blue.700");

  const playSound = (sound) => {
    if (soundEnabled) {
      new Audio(sound).play();
    }
  };

  const handleSubmit = () => {
    if (satisfaction !== null) {
      playSound(navigationSound);
      alert(
        `Thank you for your feedback!`
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
                <StarRatingInput
                  label="Clarity of instructions (were buttons and features easy to understand?)"
                  value={clarity}
                  onValueChange={setClarity}
                  hoveredValue={hoveredClarity}
                  onHoveredValueChange={setHoveredClarity}
                />
                <StarRatingInput
                  label="Did the app respond quickly to your actions?"
                  value={responsiveness}
                  onValueChange={setResponsiveness}
                  hoveredValue={hoveredResponsiveness}
                  onHoveredValueChange={setHoveredResponsiveness}
                />
                <StarRatingInput
                  label="Screen reader compatibility"
                  value={screenReader}
                  onValueChange={setScreenReader}
                  hoveredValue={hoveredScreenReader}
                  onHoveredValueChange={setHoveredScreenReader}
                />
                <Field.Root>
                  <Field.Label fontSize="lg">Was the text and background contrast comfortable to read?</Field.Label>
                  <RadioGroup.Root
                    onValueChange={(details) => setContrast(details.value)}
                    value={contrast}
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
                <StarRatingInput
                  label="Was the audio feedback clear and useful?"
                  value={audioFeedback}
                  onValueChange={setAudioFeedback}
                  hoveredValue={hoveredAudioFeedback}
                  onHoveredValueChange={setHoveredAudioFeedback}
                />
                <StarRatingInput
                  label="Overall, was this app extremely accessible?"
                  value={overallAccessibility}
                  onValueChange={setOverallAccessibility}
                  hoveredValue={hoveredOverallAccessibility}
                  onHoveredValueChange={setHoveredOverallAccessibility}
                />
                <Field.Root>
                  <Field.Label fontSize="lg">
                    If not, what can be improved?
                  </Field.Label>
                  <Textarea
                    value={improvements}
                    onChange={(e) => setImprovements(e.target.value)}
                    placeholder="Your suggestions..."
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label fontSize="lg">
                    What did you like/find accessible through using this app that compares best with other accessible tools you've used?
                  </Field.Label>
                  <Textarea
                    value={likes}
                    onChange={(e) => setLikes(e.target.value)}
                    placeholder="Your thoughts..."
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
