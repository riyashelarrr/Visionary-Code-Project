import React, { useState } from "react";
import {
  VStack,
  Heading,
  Button,
  Input,
  CardRoot,
  CardBody,
  Field,
  Box,
} from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import navigationSound from "../assets/sounds/navigation.mp3";
import { useAccessibility } from "../context/AccessibilityContext";

const RegisterComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { soundEnabled } = useAccessibility();

  const playSound = (sound) => {
    if (soundEnabled) {
      new Audio(sound).play();
    }
  };

  const handleSubmit = () => {
    playSound(navigationSound);
    // Handle registration logic here
    console.log("Registering:", { firstName, lastName, email });
    alert(`Registration details captured for: ${firstName} ${lastName}`);
  };

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");

  return (
    <Box width="100%" maxW="md" mx="auto" mt={10}>
      <CardRoot boxShadow="xl" borderRadius="xl" bg={cardBg}>
        <CardBody p={8}>
          <VStack spacing={6} align="stretch">
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              color={headingColor}
              mb={4}
            >
              Register
            </Heading>

            <Field.Root>
              <Field.Label fontSize="lg" fontWeight="bold" mb={2}>
                First Name
              </Field.Label>
              <Input
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                size="lg"
              />
            </Field.Root>

            <Field.Root>
              <Field.Label fontSize="lg" fontWeight="bold" mb={2}>
                Last Name
              </Field.Label>
              <Input
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                size="lg"
              />
            </Field.Root>

            <Field.Root>
              <Field.Label fontSize="lg" fontWeight="bold" mb={2}>
                Email Address
              </Field.Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
              />
            </Field.Root>

            <Button
              colorScheme="blue"
              size="lg"
              width="full"
              onClick={handleSubmit}
              mt={4}
            >
              Create a user name
            </Button>
          </VStack>
        </CardBody>
      </CardRoot>
    </Box>
  );
};

export default RegisterComponent;
