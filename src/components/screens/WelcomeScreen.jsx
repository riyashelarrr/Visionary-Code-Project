import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Input,
  Icon,
  HStack,
  Separator,
  CardRoot,
  CardBody,
  FieldRoot,
  FieldLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUser, FaUniversalAccess } from "react-icons/fa";
import { useColorModeValue } from "../ui/color-mode";

export const WelcomeScreen = ({ onNext }) => {
  const [name, setName] = useState("");

  const handleNext = () => {
    if (name.trim()) {
      onNext(name);
    } else {
      alert("Please enter your name to proceed.");
    }
  };

  return (
    <CardRoot
      boxShadow="xl"
      borderRadius="lg"
      p={8}
      width="100%"
      maxW="800px"
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
              <Input
                type="text"
                placeholder="Enter your name"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
