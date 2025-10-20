import {
  Box,
  Heading,
  Text,
  VStack,
  SliderRoot as Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SwitchRoot as Switch,
  Button,
  Grid,
  GridItem,
  CardRoot as Card,
  CardBody,
  RadioGroupRoot as RadioGroup,
  Stack,
  RadioGroupItem as Radio,
  Flex,
  TooltipRoot as Tooltip,
} from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { useAccessibility } from "../../context/AccessibilityContext";

export const AccessibilitySettingsScreen = ({ onNext }) => {
  const {
    fontSize,
    setFontSize,
    theme,
    setTheme,
    visualOutline,
    setVisualOutline,
  } = useAccessibility();

  const { colorMode, setColorMode } = useColorMode();

  const handleThemeChange = (value) => {
    setTheme(value);
    if (value.includes('dark')) {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
  };
  
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
    <Card boxShadow="xl" borderRadius="lg" p={8} width="100%" maxW="800px">
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
              <Slider
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
                <Tooltip label={`${fontSize}px`} placement="top" isOpen>
                    <SliderThumb />
                </Tooltip>
              </Slider>
            </Flex>

            <Text fontWeight="bold" fontSize="xl" mt={6}>Color Theme</Text>
            <Text>Select a visual theme to optimize contrast and reduce eye strain.</Text>
            <RadioGroup onChange={handleThemeChange} value={theme}>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <Radio value="light">Light Mode (Default)</Radio>
                <Radio value="dark">Dark Mode</Radio>
                <Radio value="highContrastDark">High Contrast (Dark)</Radio>
                <Radio value="highContrastLight">High Contrast (Light)</Radio>
              </Grid>
            </RadioGroup>
          </VStack>

          <VStack spacing={6} width="100%" alignItems="start">
            <Heading as="h2" size="lg" borderBottomWidth="2px" pb={2} mt={8}>
              Interactive Elements
            </Heading>
            <Text>
              Toggle a strong visual outline around buttons, links, and other interactive elements.
            </Text>
            <Switch isChecked={visualOutline} onChange={handleOutlineToggle}>
              Activate Visual Outline
            </Switch>
          </VStack>

          <Button colorScheme="blue" size="lg" onClick={onNext} mt={8}>
            Start Learning
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};
