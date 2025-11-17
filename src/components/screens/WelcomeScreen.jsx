import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  Icon,
  HStack,
  IconButton,
  Separator,
  CardRoot,
  CardBody,
  FieldRoot,
  FieldLabel,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import {
  FaUser,
  FaUniversalAccess,
  FaMicrophone,
  FaMicrophoneSlash,
} from "react-icons/fa";
import { useColorModeValue } from "../ui/color-mode";
import navigationSound from "../../assets/sounds/navigation.mp3";
import { useAccessibility } from "../../context/AccessibilityContext";
import useSpeechRecognition from "../../hooks/useSpeechRecognition";

export const WelcomeScreen = ({ onNext }) => {
  const [name, setName] = useState("");
  const { soundEnabled } = useAccessibility();
  const nameInputRef = useRef(null);

  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  useEffect(() => {
    setName(transcript);
  }, [transcript]);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const playSound = (sound) => {
    if (soundEnabled) {
      new Audio(sound).play();
    }
  };

  const handleNext = () => {
    if (name.trim()) {
      playSound(navigationSound);
      onNext(name);
    } else {
      alert("Please enter your name to proceed.");
    }
  };

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <CardRoot
      boxShadow="xl"
      borderRadius="lg"
      p={8}
      width="100%"
      maxWidth="md"
      bg={useColorModeValue("white", "gray.700")}
    >
      <CardBody>
        <VStack spacing={6} textAlign="center">
          <HStack>
            <Icon as={FaUser} w={10} h={10} color="blue.500" />
            <Icon as={FaUniversalAccess} w={10} h={10} color="green.500" />
          </HStack>
          <Heading as="h1" size="xl">
            Welcome to Visionary Code Project
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Please enter your name to personalize your learning experience.
          </Text>
          <Separator my={4} />
          <VStack spacing={4} width="100%">
            <FieldRoot id="name">
              <FieldLabel>Name</FieldLabel>
              <HStack width="100%">
                <Input
                  ref={nameInputRef}
                  type="text"
                  placeholder="Enter your name"
                  size="lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {hasRecognitionSupport && (
                  <IconButton
                    aria-label={
                      isListening ? "Stop listening" : "Start listening"
                    }
                    
                    onClick={handleMicClick}
                    isRound
                    size="lg"
                    colorScheme="blue"
                  >
                    {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                  </IconButton>
                )}
              </HStack>
            </FieldRoot>
          </VStack>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleNext}
            width="100%"
            mt={4}
          >
            Next
          </Button>
          <Text fontSize="sm" color="gray.400" mt={4}>
            Fully accessible form with proper labels, keyboard navigation, and
            screen reader support.
          </Text>
        </VStack>
      </CardBody>
    </CardRoot>
  );
};
