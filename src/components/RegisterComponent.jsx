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
  Text,
  HStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import navigationSound from "../assets/sounds/navigation.mp3";
import { useAccessibility } from "../context/AccessibilityContext";
import { FaCheck, FaTimes } from "react-icons/fa";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPasswordHints, setShowPasswordHints] = useState(false);

  const { soundEnabled } = useAccessibility();

  const playSound = (sound) => {
    if (soundEnabled) {
      new Audio(sound).play();
    }
  };

  // Password validation functions
  const passwordValidation = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    noCommonWords: !/password|123|abc|qwerty|admin|user|welcome/i.test(
      password
    ),
    match: password.length > 0 && password === confirmPassword,
  };

  const isPasswordStrong = Object.values(passwordValidation).every(Boolean);

  const validatePhoneNumber = (phone) => {
    // Basic phone number validation (10 digits)
    return /^\d{10}$/.test(phone.replace(/[\s\-()]/g, ""));
  };

  const handleSubmit = () => {
    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }

    if (!isPasswordStrong) {
      alert("Please ensure your password meets all security requirements");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    playSound(navigationSound);
    console.log("Registering:", { username, phoneNumber });
    alert(`Account created successfully for: ${username}`);
  };

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const hintTextColor = useColorModeValue("gray.600", "gray.300");
  const passwordHintBg = useColorModeValue("gray.50", "gray.700");
  const validColor = "green.500";
  const invalidColor = "red.500";

  const ValidationIcon = ({ isValid }) => (
    <Box
      as={isValid ? FaCheck : FaTimes}
      color={isValid ? validColor : invalidColor}
    />
  );

  return (
    <Box width="100%" maxW="lg" mx="auto" mt={10} mb={10}>
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
              Create Account
            </Heading>

            {/* Username Field */}
            <Field.Root>
              <Field.Label fontSize="lg" fontWeight="bold" mb={2}>
                Username
              </Field.Label>
              <Input
                placeholder="Choose a unique username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="lg"
              />
            </Field.Root>

            {/* Password Field */}
            <Field.Root>
              <Field.Label fontSize="lg" fontWeight="bold" mb={2}>
                Password
              </Field.Label>
              <Input
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setShowPasswordHints(true)}
                size="lg"
              />

              {/* Password Requirements */}
              {showPasswordHints && (
                <Box mt={3} p={3} borderRadius="md" bg={passwordHintBg}>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    mb={2}
                    color={hintTextColor}
                  >
                    Password Requirements:
                  </Text>
                  <VStack align="stretch" spacing={1}>
                    <HStack fontSize="sm">
                      <ValidationIcon isValid={passwordValidation.length} />
                      <Text color={hintTextColor}>At least 12 characters</Text>
                    </HStack>
                    <HStack fontSize="sm">
                      <ValidationIcon isValid={passwordValidation.uppercase} />
                      <Text color={hintTextColor}>
                        Contains uppercase letter (A-Z)
                      </Text>
                    </HStack>
                    <HStack fontSize="sm">
                      <ValidationIcon isValid={passwordValidation.lowercase} />
                      <Text color={hintTextColor}>
                        Contains lowercase letter (a-z)
                      </Text>
                    </HStack>
                    <HStack fontSize="sm">
                      <ValidationIcon isValid={passwordValidation.number} />
                      <Text color={hintTextColor}>Contains number (0-9)</Text>
                    </HStack>
                    <HStack fontSize="sm">
                      <ValidationIcon isValid={passwordValidation.symbol} />
                      <Text color={hintTextColor}>
                        Contains special symbol (!@#$%^&*)
                      </Text>
                    </HStack>
                    <HStack fontSize="sm">
                      <ValidationIcon
                        isValid={passwordValidation.noCommonWords}
                      />
                      <Text color={hintTextColor}>
                        No common words or patterns
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              )}
            </Field.Root>

            {/* Confirm Password Field */}
            <Field.Root>
              <Field.Label fontSize="lg" fontWeight="bold" mb={2}>
                Confirm Password
              </Field.Label>
              <Input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                size="lg"
              />
              {confirmPassword.length > 0 && (
                <HStack mt={2} fontSize="sm">
                  <ValidationIcon isValid={passwordValidation.match} />
                  <Text
                    color={passwordValidation.match ? validColor : invalidColor}
                  >
                    {passwordValidation.match
                      ? "Passwords match"
                      : "Passwords do not match"}
                  </Text>
                </HStack>
              )}
            </Field.Root>

            {/* Phone Number Field */}
            <Field.Root>
              <Field.Label fontSize="lg" fontWeight="bold" mb={2}>
                Phone Number
              </Field.Label>
              <Input
                type="tel"
                placeholder="Enter your phone number (10 digits)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                size="lg"
              />
              <Text fontSize="xs" color={hintTextColor} mt={1}>
                Format: 1234567890
              </Text>
            </Field.Root>

            <Button
              colorScheme="blue"
              size="lg"
              width="full"
              onClick={handleSubmit}
              mt={4}
              isDisabled={
                !username ||
                !isPasswordStrong ||
                !validatePhoneNumber(phoneNumber)
              }
            >
              Create Account
            </Button>

            <Text fontSize="sm" color={hintTextColor} textAlign="center" mt={2}>
              Password Tip: Use a passphrase with mixed characters for better
              security
            </Text>
          </VStack>
        </CardBody>
      </CardRoot>
    </Box>
  );
};

export default RegisterComponent;
