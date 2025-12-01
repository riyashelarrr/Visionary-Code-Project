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
  Slider,
  useSlider,
  Tooltip,
  RadioGroup,
  Switch,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useAccessibility } from "../../context/AccessibilityContext";
import enabledSound from "../../assets/sounds/enabled.mp3";
import disabledSound from "../../assets/sounds/disabled.mp3";
import navigationSound from "../../assets/sounds/navigation.mp3";

export const AccessibilitySettingsScreen = ({ onNext, onBack }) => {
  const {
    fontSize,
    setFontSize,
    theme,
    setTheme,
    visualOutline,
    setVisualOutline,
  } = useAccessibility();

  const { soundEnabled, setSoundEnabled } = useAccessibility();

  const playSound = (sound) => {
    if (soundEnabled) {
      new Audio(sound).play();
    }
  };

  const handleNext = () => {
    playSound(navigationSound);
    onNext();
  };

  const handleBack = () => {
    playSound(navigationSound);
    onBack();
  };

  const slider = useSlider({
    min: 12,
    max: 24,
    step: 1,
    value: [fontSize],
    onValueChange: (details) => setFontSize(details.value[0]),
  });

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
            <Slider.RootProvider value={slider} width="100%">
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Tooltip.Root label={`${fontSize}px`} placement="top" isOpen>
                  <Slider.Thumb />
                </Tooltip.Root>
              </Slider.Control>
            </Slider.RootProvider>
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
          <RadioGroup.Root onValueChange={(details) => setTheme(details.value)} value={theme}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <RadioGroup.Item value="light">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Light Mode (Default)</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="dark">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Dark Mode</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="highContrastDark">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>High Contrast (Dark)</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="highContrastLight">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>High Contrast (Light)</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="redPolarity">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Red Polarity</RadioGroup.ItemText>
              </RadioGroup.Item>
            </Grid>
          </RadioGroup.Root>
        </VStack>

        <VStack spacing={6} width="100%" alignItems="start">
          <Heading as="h2" size="lg" borderBottomWidth="2px" pb={2} mt={8}>
            Interactive Elements
          </Heading>
          <Text>
            Toggle a strong visual outline around buttons, links, and other
            interactive elements.
          </Text>
          <Switch.Root
            checked={visualOutline}
            onCheckedChange={(details) => {
              if (details.checked) {
                playSound(enabledSound);
              } else {
                playSound(disabledSound);
              }
              setVisualOutline(details.checked);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setVisualOutline(!visualOutline);
              }
            }}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label>Activate Visual Outline</Switch.Label>
          </Switch.Root>

          <Text mt={6}>
            Enable or disable all application sounds.
          </Text>
          <Switch.Root
            checked={soundEnabled}
            onCheckedChange={(details) => {
              // Always play sound for this control, even if sounds are being disabled
              if (details.checked) {
                new Audio(enabledSound).play();
              } else {
                new Audio(disabledSound).play();
              }
              setSoundEnabled(details.checked);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSoundEnabled(!soundEnabled);
              }
            }}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label>Enable Application Sounds</Switch.Label>
          </Switch.Root>
        </VStack>

        <HStack mt={8}>
          <Button colorScheme="gray" size="lg" onClick={handleBack}>
            Back
          </Button>
          <Button colorScheme="blue" size="lg" onClick={handleNext}>
            Start Learning
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
