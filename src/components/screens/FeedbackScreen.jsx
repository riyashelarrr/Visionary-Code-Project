import { useState, useEffect, useRef } from "react";
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
  IconButton,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import {
  FaRegAngry,
  FaRegFrown,
  FaRegMeh,
  FaRegSmile,
  FaRegGrinBeam,
  FaStar,
  FaMicrophone,
  FaMicrophoneSlash,
} from "react-icons/fa";
import { useAccessibility } from "../../context/AccessibilityContext";
import navigationSound from "../../assets/sounds/navigation.mp3";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";

const feedbackOptions = [
  { level: "Bad", icon: FaRegAngry, color: "red.500" },
  { level: "Not Good", icon: FaRegFrown, color: "orange.500" },
  { level: "Moderate", icon: FaRegMeh, color: "yellow.500" },
  { level: "Good", icon: FaRegSmile, color: "green.300" },
  { level: "Excellent", icon: FaRegGrinBeam, color: "green.500" },
];

const StarRatingInput = ({ label, value, onValueChange, hoveredValue, onHoveredValueChange, focusedIndex, onFocusedIndexChange, onKeyDown, inputRef }) => (
  <Field.Root>
    <Field.Label fontSize="lg">{label}</Field.Label>
    <HStack
      ref={inputRef}
      role="radiogroup"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onFocus={() => {
        if (focusedIndex === null && value > 0) {
          onFocusedIndexChange(value - 1);
        } else if (focusedIndex === null) {
          onFocusedIndexChange(0);
        }
      }}
      onBlur={() => onFocusedIndexChange(null)}
    >
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const isFocused = focusedIndex === index;
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
            tabIndex={-1}
            outline={isFocused ? "2px solid blue.500" : "none"}
            outlineOffset="2px"
            aria-label={`${starValue} star${starValue !== 1 ? "s" : ""}`}
            role="radio"
            aria-checked={starValue <= value}
          />
        );
      })}
    </HStack>
  </Field.Root>
);


export const FeedbackScreen = ({ onFinish }) => {
  const [satisfaction, setSatisfaction] = useState(null);
  const [focusedSatisfaction, setFocusedSatisfaction] = useState(0);
  const [clarity, setClarity] = useState(0);
  const [hoveredClarity, setHoveredClarity] = useState(0);
  const [focusedClarity, setFocusedClarity] = useState(null);
  const [responsiveness, setResponsiveness] = useState(0);
  const [hoveredResponsiveness, setHoveredResponsiveness] = useState(0);
  const [focusedResponsiveness, setFocusedResponsiveness] = useState(null);
  const [screenReader, setScreenReader] = useState(0);
  const [hoveredScreenReader, setHoveredScreenReader] = useState(0);
  const [focusedScreenReader, setFocusedScreenReader] = useState(null);
  const [contrast, setContrast] = useState("");
  const [audioFeedback, setAudioFeedback] = useState(0);
  const [hoveredAudioFeedback, setHoveredAudioFeedback] = useState(0);
  const [focusedAudioFeedback, setFocusedAudioFeedback] = useState(null);
  const [overallAccessibility, setOverallAccessibility] = useState(0);
  const [hoveredOverallAccessibility, setHoveredOverallAccessibility] = useState(0);
  const [focusedOverallAccessibility, setFocusedOverallAccessibility] = useState(null);
  const [improvements, setImprovements] = useState("");
  const [likes, setLikes] = useState("");
  const [activeMic, setActiveMic] = useState(null);
  
  const satisfactionRef = useRef(null);
  const clarityRef = useRef(null);
  const improvementsTextareaRef = useRef(null);
  const submitButtonRef = useRef(null);

  const { soundEnabled } = useAccessibility();

  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript && activeMic === 'improvements') {
      setImprovements(transcript);
    }
    if (transcript && activeMic === 'likes') {
      setLikes(transcript);
    }
  }, [transcript, activeMic]);

  useEffect(() => {
    // Auto-focus satisfaction section on mount
    if (satisfactionRef.current) {
      satisfactionRef.current.focus();
    }
  }, []);


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

  const handleImprovementsMicClick = () => {
    if (isListening && activeMic === 'improvements') {
      stopListening();
      setActiveMic(null);
    } else {
      setActiveMic('improvements');
      startListening();
    }
  };

  const handleLikesMicClick = () => {
    if (isListening && activeMic === 'likes') {
      stopListening();
      setActiveMic(null);
    } else {
      setActiveMic('likes');
      startListening();
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

  const handleSatisfactionKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = focusedSatisfaction < feedbackOptions.length - 1 
        ? focusedSatisfaction + 1 
        : focusedSatisfaction;
      setFocusedSatisfaction(nextIndex);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = focusedSatisfaction > 0 
        ? focusedSatisfaction - 1 
        : focusedSatisfaction;
      setFocusedSatisfaction(prevIndex);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSatisfaction(focusedSatisfaction);
      playSound(navigationSound);
      setTimeout(() => {
        if (clarityRef.current) {
          clarityRef.current.focus();
        }
      }, 0);
    }
  };

  const handleStarRatingKeyDown = (currentValue, setValue, focusedIndex, setFocusedIndex, e) => {
    // Use focusedIndex if it's not null/undefined, otherwise use currentValue - 1, or 0 if no value
    const activeIndex = focusedIndex != null ? focusedIndex : (currentValue > 0 ? currentValue - 1 : 0);
    
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = activeIndex < 4 ? activeIndex + 1 : activeIndex;
      setFocusedIndex(nextIndex);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
      setFocusedIndex(prevIndex);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const selectedValue = activeIndex + 1;
      setValue(selectedValue);
      playSound(navigationSound);
    } else if (e.key === "Tab" && !e.shiftKey) {
      // Allow default Tab behavior to move to next element
      setFocusedIndex(null);
      return;
    } else if (e.key === "Tab" && e.shiftKey) {
      // Allow default Shift+Tab behavior to move to previous element
      setFocusedIndex(null);
      return;
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
          <HStack
            justify="space-around"
            spacing={4}
            my={8}
            role="radiogroup"
            aria-label="Overall satisfaction"
            onKeyDown={handleSatisfactionKeyDown}
            tabIndex={0}
            ref={satisfactionRef}
          >
            {feedbackOptions.map((option, index) => (
              <VStack
                key={index}
                onClick={() => {
                  setSatisfaction(index);
                  setFocusedSatisfaction(index);
                }}
                cursor="pointer"
                p={4}
                borderRadius="lg"
                bg={
                  satisfaction === index || focusedSatisfaction === index
                    ? selectedBg
                    : "transparent"
                }
                transition="background-color 0.2s ease-in-out"
                tabIndex={-1}
                role="radio"
                aria-checked={satisfaction === index}
                outline={focusedSatisfaction === index ? "2px solid blue.500" : "none"}
                outlineOffset="2px"
              >
                <Icon
                  as={option.icon}
                  w={20}
                  h={20}
                  color={option.color}
                  transform={
                    satisfaction === index || focusedSatisfaction === index
                      ? "scale(1.1)"
                      : "scale(1)"
                  }
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
                  focusedIndex={focusedClarity}
                  onFocusedIndexChange={setFocusedClarity}
                  onKeyDown={(e) =>
                    handleStarRatingKeyDown(
                      clarity,
                      setClarity,
                      focusedClarity,
                      setFocusedClarity,
                      e
                    )
                  }
                  inputRef={clarityRef}
                />
                <StarRatingInput
                  label="Did the app respond quickly to your actions?"
                  value={responsiveness}
                  onValueChange={setResponsiveness}
                  hoveredValue={hoveredResponsiveness}
                  onHoveredValueChange={setHoveredResponsiveness}
                  focusedIndex={focusedResponsiveness}
                  onFocusedIndexChange={setFocusedResponsiveness}
                    onKeyDown={(e) =>
                      handleStarRatingKeyDown(
                        responsiveness,
                        setResponsiveness,
                        focusedResponsiveness,
                        setFocusedResponsiveness,
                        e
                      )
                    }
                  />
                <StarRatingInput
                  label="Screen reader compatibility"
                  value={screenReader}
                  onValueChange={setScreenReader}
                  hoveredValue={hoveredScreenReader}
                  onHoveredValueChange={setHoveredScreenReader}
                  focusedIndex={focusedScreenReader}
                  onFocusedIndexChange={setFocusedScreenReader}
                  onKeyDown={(e) =>
                    handleStarRatingKeyDown(
                      screenReader,
                      setScreenReader,
                      focusedScreenReader,
                      setFocusedScreenReader,
                      e
                    )
                  }
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
                  focusedIndex={focusedAudioFeedback}
                  onFocusedIndexChange={setFocusedAudioFeedback}
                  onKeyDown={(e) =>
                    handleStarRatingKeyDown(
                      audioFeedback,
                      setAudioFeedback,
                      focusedAudioFeedback,
                      setFocusedAudioFeedback,
                      e
                    )
                  }
                />
                <StarRatingInput
                  label="Overall, was this app extremely accessible?"
                  value={overallAccessibility}
                  onValueChange={setOverallAccessibility}
                  hoveredValue={hoveredOverallAccessibility}
                  onHoveredValueChange={setHoveredOverallAccessibility}
                  focusedIndex={focusedOverallAccessibility}
                  onFocusedIndexChange={setFocusedOverallAccessibility}
                  onKeyDown={(e) =>
                    handleStarRatingKeyDown(
                      overallAccessibility,
                      setOverallAccessibility,
                      focusedOverallAccessibility,
                      setFocusedOverallAccessibility,
                      e
                    )
                  }
                />
                <Field.Root>
                  <Field.Label fontSize="lg">
                    If not, what can be improved?
                  </Field.Label>
                  <HStack width="100%">
                  <Textarea
                    ref={improvementsTextareaRef}
                    value={improvements}
                    onChange={(e) => setImprovements(e.target.value)}
                    placeholder="Your suggestions..."
                  />
                  {hasRecognitionSupport && (
                    <IconButton
                      aria-label={isListening && activeMic === 'improvements' ? "Stop listening" : "Start listening for improvements"}
                      onClick={handleImprovementsMicClick}
                      isRound
                      size="lg"
                      colorScheme="blue"
                    >
                      {isListening && activeMic === 'improvements' ? <FaMicrophoneSlash /> : <FaMicrophone />}
                    </IconButton>
                  )}
                  </HStack>
                </Field.Root>
                <Field.Root>
                  <Field.Label fontSize="lg">
                    What did you like/find accessible through using this app that compares best with other accessible tools you've used?
                  </Field.Label>
                  <HStack width="100%">
                  <Textarea
                    value={likes}
                    onChange={(e) => setLikes(e.target.value)}
                    placeholder="Your thoughts..."
                  />
                   {hasRecognitionSupport && (
                    <IconButton
                      aria-label={isListening && activeMic === 'likes' ? "Stop listening" : "Start listening for likes"}
                      onClick={handleLikesMicClick}
                      isRound
                      size="lg"
                      colorScheme="blue"
                    >
                      {isListening && activeMic === 'likes' ? <FaMicrophoneSlash /> : <FaMicrophone />}
                    </IconButton>
                  )}
                  </HStack>
                </Field.Root>
              </VStack>
            </Fieldset.Content>
          </Fieldset.Root>

          <Button
            ref={submitButtonRef}
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
