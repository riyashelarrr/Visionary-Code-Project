import {
  Box,
  Button,
  FieldRoot,
  FieldLabel,
  Heading,
  Input,
  Text,
  VStack,
  Icon,
  HStack,
  CardRoot,
  CardBody,
  Separator,
} from "@chakra-ui/react";
import { FaUser, FaUniversalAccess } from "react-icons/fa";

export const WelcomeScreen = ({ onNext }) => {
  return (
    <CardRoot boxShadow="xl" borderRadius="lg" p={8} width="100%" maxW="500px">
      <CardBody>
        <VStack spacing={6} textAlign="center">
          <HStack>
            <Icon as={FaUser} w={10} h={10} color="blue.500" />
            <Icon as={FaUniversalAccess} w={10} h={10} color="green.500" />
          </HStack>
          <Heading as="h1" size="xl">Welcome to Visionary Code Project</Heading>
          <Text fontSize="lg" color="gray.500">
            Please enter your name and email to personalize your learning experience.
          </Text>
          <Separator my={4} />
          <VStack spacing={4} width="100%">
            <FieldRoot id="name">
              <FieldLabel>Name</FieldLabel>
              <Input type="text" placeholder="Enter your name" size="lg" />
            </FieldRoot>
            <FieldRoot id="email">
              <FieldLabel>Email address</FieldLabel>
              <Input type="email" placeholder="Enter your email" size="lg" />
            </FieldRoot>
          </VStack>
          <Button colorScheme="blue" size="lg" onClick={onNext} width="100%" mt={4}>
            Next
          </Button>
          <Text fontSize="sm" color="gray.400" mt={4}>
            Fully accessible form with proper labels, keyboard navigation, and screen reader support.
          </Text>
        </VStack>
      </CardBody>
    </CardRoot>
  );
};
