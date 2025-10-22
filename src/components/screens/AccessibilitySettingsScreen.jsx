import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Grid,
  Flex,
  HStack,
  chakra,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useAccessibility } from "../../context/AccessibilityContext";

const applyVisualOutline = (isChecked) => {
  if (isChecked) {
    document.documentElement.style.setProperty(
      "--chakra-shadows-outline",
      "0 0 0 3px rgba(66, 153, 225, 0.6)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--chakra-shadows-outline",
      "none"
    );
  }
};

export const AccessibilitySettingsScreen = ({ onNext, onBack }) => {
  const {
    fontSize,
    setFontSize,
    theme,
    setTheme,
    visualOutline,
    setVisualOutline,
  } = useAccessibility();

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleOutlineToggle = (e) => {
    const isChecked = e.target.checked;
    setVisualOutline(isChecked);
    applyVisualOutline(isChecked);
  };

  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box
      boxShadow="xl"
      borderRadius="lg"
      p={8}
      width="100%"
      maxW="1200px"
      bg={cardBg}
    >
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="xl">
          Accessibility Settings
        </Heading>
        <Text fontSize="lg" color="gray.500">
          ~ Customize Your Learning Style For Your Best Fit ~
        </Text>

        <VStack spacing={6} width="100%" alignItems="start">
          <Heading as="h2" size="lg" borderBottomWidth="2px" pb={2}>
            Visual Display & Readability
          </Heading>

          <Text fontWeight="bold" fontSize="xl">
            Text Size
          </Text>
          <Text>
            Adjust the size of the text within the application for easier reading.
          </Text>
          <Flex width="100%" alignItems="center">
            <chakra.input
              type="range"
              min="12"
              max="24"
              step="1"
              value={fontSize}
              onChange={handleFontSizeChange}
              width="100%"
              sx={{
                accentColor: "blue.500",
              }}
            />
            <Text ml={4} width="40px" textAlign="right">
              {fontSize}px
            </Text>
          </Flex>

          <Text fontWeight="bold" fontSize="xl" mt={6}>
            Color Theme
          </Text>
          <Text>
            Select a visual theme to optimize contrast and reduce eye strain.
          </Text>
          <Box onChange={handleThemeChange} width="100%">
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <chakra.label>
                <chakra.input
                  type="radio"
                  name="theme"
                  value="light"
                  defaultChecked={theme === "light"}
                />{" "}
                Light Mode (Default)
              </chakra.label>
              <chakra.label>
                <chakra.input
                  type="radio"
                  name="theme"
                  value="dark"
                  defaultChecked={theme === "dark"}
                />{" "}
                Dark Mode
              </chakra.label>
              <chakra.label>
                <chakra.input
                  type="radio"
                  name="theme"
                  value="highContrastDark"
                  defaultChecked={theme === "highContrastDark"}
                />{" "}
                High Contrast (Dark)
              </chakra.label>
              <chakra.label>
                <chakra.input
                  type="radio"
                  name="theme"
                  value="highContrastLight"
                  defaultChecked={theme === "highContrastLight"}
                />{" "}
                High Contrast (Light)
              </chakra.label>
            </Grid>
          </Box>
        </VStack>

        <VStack spacing={6} width="100%" alignItems="start">
          <Heading as="h2" size="lg" borderBottomWidth="2px" pb={2} mt={8}>
            Interactive Elements
          </Heading>
          <Text>
            Toggle a strong visual outline around buttons, links, and other
            interactive elements.
          </Text>
          <chakra.label>
            <chakra.input
              type="checkbox"
              checked={visualOutline}
              onChange={handleOutlineToggle}
            />{" "}
            Activate Visual Outline
          </chakra.label>
        </VStack>

        <HStack mt={8}>
          <Button colorScheme="gray" size="lg" onClick={onBack}>
            Back
          </Button>
          <Button colorScheme="blue" size="lg" onClick={onNext}>
            Start Learning
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
