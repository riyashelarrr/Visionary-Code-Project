import {
  Box,
  Heading,
  Text,
  VStack,
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SwitchRoot,
  Button,
  Grid,
  GridItem,
  CardRoot,
  CardBody,
  RadioGroupRoot,
  Stack,
  RadioGroupItem,
  Flex,
  TooltipRoot,
  HStack,
} from "@chakra-ui/react";
import { useAccessibility } from "../../context/AccessibilityContext";

export const AccessibilitySettingsScreen = ({ onNext, onBack }) => {
  const {
    fontSize,
    setFontSize,
    theme,
    setTheme,
    visualOutline,
    setVisualOutline,
  } = useAccessibility();

  const handleOutlineToggle = (e) => {
    const isChecked = e.target.checked;
    setVisualOutline(isChecked);
    if (isChecked) {
      document.documentElement.style.setProperty('--chakra-shadows-outline', '0 0 0 3px rgba(66, 153, 225, 0.6)');
    } else {
      document.documentElement.style.setProperty('--chakra-shadows-outline', 'none');
    }
  };

  return (
    <CardRoot boxShadow="xl" borderRadius="lg" p={8} width="100%" maxW="1200px">
      <CardBody>
        <VStack spacing={8} textAlign="center">
          <Heading as="h1" size="xl">Accessibility Settings</Heading>
          <Text fontSize="lg" color="gray.500">
            ~ Customize Your Learning Style For Your Best Fit ~
          </Text>

          <VStack spacing={6} width="100%" alignItems="start">
            <Heading as="h2" size="lg" borderBottomWidth="2px" pb={2}>
              Visual Display & Readability
            </Heading>
            
            <Text fontWeight="bold" fontSize="xl">Text Size</Text>
            <Text>Adjust the size of the text within the application for easier reading.</Text>
            <Flex width="100%" alignItems="center">
              <SliderRoot
                aria-label="font-size-slider"
                value={[fontSize]}
                onChange={(val) => setFontSize(val[0])}
                min={12}
                max={24}
                step={1}
              >
                <SliderTrack>
                  <SliderRange />
                </SliderTrack>
                <TooltipRoot label={`${fontSize}px`} placement="top" isOpen>
                    <SliderThumb />
                </TooltipRoot>
              </SliderRoot>
            </Flex>

            <Text fontWeight="bold" fontSize="xl" mt={6}>Color Theme</Text>
            <Text>Select a visual theme to optimize contrast and reduce eye strain.</Text>
            <RadioGroupRoot onChange={setTheme} value={theme}>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <RadioGroupItem value="light">Light Mode (Default)</RadioGroupItem>
                <RadioGroupItem value="dark">Dark Mode</RadioGroupItem>
                <RadioGroupItem value="highContrastDark">High Contrast (Dark)</RadioGroupItem>
                <RadioGroupItem value="highContrastLight">High Contrast (Light)</RadioGroupItem>
              </Grid>
            </RadioGroupRoot>
          </VStack>

          <VStack spacing={6} width="100%" alignItems="start">
            <Heading as="h2" size="lg" borderBottomWidth="2px" pb={2} mt={8}>
              Interactive Elements
            </Heading>
            <Text>
              Toggle a strong visual outline around buttons, links, and other interactive elements.
            </Text>
            <SwitchRoot isChecked={visualOutline} onChange={handleOutlineToggle}>
              Activate Visual Outline
            </SwitchRoot>
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
      </CardBody>
    </CardRoot>
  );
};
