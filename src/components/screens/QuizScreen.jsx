import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Button,
  Grid,
  Icon,
  Progress,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { quizData } from "../../data/quizData";
import { useColorModeValue } from "../ui/color-mode";

const allQuestions = quizData.flatMap((module) => module.questions);

const ResultsScreen = ({ userAnswers, onRestart }) => {
  const score = allQuestions.reduce((acc, question, index) => {
    return userAnswers[index] === question.answer ? acc + 1 : acc;
  }, 0);

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const correctColor = useColorModeValue("green.500", "green.300");
  const incorrectColor = useColorModeValue("red.500", "red.300");

  return (
    <Box p={{ base: 2, md: 8 }} width="100%" maxW="1200px" mx="auto">
      <VStack spacing={8}>
        <Box
          p={8}
          bg={cardBg}
          borderRadius="lg"
          boxShadow="xl"
          width="100%"
          textAlign="center"
        >
          <Heading size="2xl" color={headingColor} mb={4}>
            Quiz Complete!
          </Heading>
          <Text fontSize="xl" color={textColor}>
            You scored {score} out of {allQuestions.length}
          </Text>
        </Box>

        <VStack spacing={6} align="stretch" width="100%">
          {allQuestions.map((question, index) => (
            <Box
              key={question.id}
              p={6}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="md"
            >
              <Heading size="md" mb={4} color={headingColor}>
                {question.question.split("\n").map((line, i) => (
                  <Text as="span" key={i} display="block">
                    {line}
                  </Text>
                ))}
              </Heading>
              <Text color={textColor}>Your answer: {userAnswers[index]}</Text>
              <HStack
                mt={2}
                color={
                  userAnswers[index] === question.answer
                    ? correctColor
                    : incorrectColor
                }
              >
                <Icon
                  as={
                    userAnswers[index] === question.answer
                      ? FaCheckCircle
                      : FaTimesCircle
                  }
                />
                <Text>
                  {userAnswers[index] === question.answer
                    ? "Correct"
                    : `Correct answer: ${question.answer}`}
                </Text>
              </HStack>
            </Box>
          ))}
        </VStack>

        <Button onClick={onRestart} colorScheme="blue" size="lg">
          Try Again
        </Button>
      </VStack>
    </Box>
  );
};

export const QuizScreen = ({ onNavigateToAccessibility }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(allQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) =>
      Math.min(prev + 1, allQuestions.length - 1)
    );
  };

  const handleBack = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(allQuestions.length).fill(null));
    setShowResults(false);
  };

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const selectedOptionBg = useColorModeValue("blue.500", "blue.500");
  const selectedOptionColor = "white";

  if (showResults) {
    return (
      <ResultsScreen userAnswers={userAnswers} onRestart={handleRestart} />
    );
  }

  const currentQuestion = allQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / allQuestions.length) * 100;

  return (
    <Box p={{ base: 2, md: 8 }} width="100%" maxW="90vw" mx="auto">
      <Box p={8} bg={cardBg} borderRadius="lg" boxShadow="xl">
        <VStack spacing={8} align="stretch">
          <Progress.Root
            value={progress}
            size="sm"
            colorScheme="blue"
            borderRadius="md"
          >
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
          <Heading size="lg" color={headingColor}>
            Question {currentQuestionIndex + 1} of {allQuestions.length}
          </Heading>

          <Heading
            size="md"
            color={headingColor}
            minH="100px"
            whiteSpace="pre-wrap"
          >
            {currentQuestion.question}
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            {currentQuestion.options.map((option) => (
              <Button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                variant={
                  userAnswers[currentQuestionIndex] === option
                    ? "solid"
                    : "outline"
                }
                colorScheme={
                  userAnswers[currentQuestionIndex] === option ? "blue" : "gray"
                }
                bg={
                  userAnswers[currentQuestionIndex] === option
                    ? selectedOptionBg
                    : "transparent"
                }
                color={
                  userAnswers[currentQuestionIndex] === option
                    ? selectedOptionColor
                    : "inherit"
                }
                justifyContent="flex-start"
                textAlign="left"
                p={6}
                height="auto"
                whiteSpace="normal"
              >
                {option}
              </Button>
            ))}
          </Grid>

          <HStack justify="space-between" mt={8}>
            <Button
              onClick={onNavigateToAccessibility}
              variant="outline"
            >
              Accessibility
            </Button>
            <Button
              onClick={handleBack}
              isDisabled={currentQuestionIndex === 0}
            >
              Back
            </Button>
            {currentQuestionIndex === allQuestions.length - 1 ? (
              <Button onClick={handleSubmit} colorScheme="blue">
                Submit
              </Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
