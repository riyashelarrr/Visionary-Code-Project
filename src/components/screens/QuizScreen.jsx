import { useState, useMemo } from "react";
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
  RadioGroup,
  Spacer,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { quizData } from "../../data/quizData";
import { useColorModeValue } from "../ui/color-mode";
import jsPDF from "jspdf";
import certificateBg from "../../assets/certificate.jpg";

const initialAnswers = quizData.reduce((acc, module) => {
  acc[module.module] = Array(module.questions.length).fill(null);
  return acc;
}, {});

const ResultsScreen = ({ userAnswers, onRestart, userName, onNext, questions }) => {
  const handleDownloadCertificate = () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [1000, 700],
    });

    pdf.addImage(certificateBg, "JPEG", 0, 0, 1000, 700);

    pdf.setFont("Times", "italic");
    pdf.setFontSize(40);
    pdf.setTextColor("#3a3a3a");
    pdf.text(userName, 400, 250, { align: "center" });

    pdf.save(`${userName}_Python_Certificate.pdf`);
  };

  const score = useMemo(
    () =>
      questions.reduce((acc, question, index) => {
        return userAnswers[index] === question.answer ? acc + 1 : acc;
      }, 0),
    [userAnswers, questions]
  );

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const correctColor = useColorModeValue("green.500", "green.300");
  const incorrectColor = useColorModeValue("red.500", "red.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box p={8} bg={cardBg} borderRadius="lg" boxShadow="xl" width="100%">
      <VStack spacing={8}>
        <Box
          p={8}
          bg={cardBg}
          borderRadius="lg"
          boxShadow="xl"
          width="100%"
          textAlign="center"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <Heading size="2xl" color={headingColor} mb={4}>
            Quiz Complete!
          </Heading>
          <Text fontSize="xl" color={textColor} fontWeight="medium">
            You scored{" "}
            <Text as="span" color="blue.500" fontWeight="bold">
              {score}
            </Text>{" "}
            out of{" "}
            <Text as="span" fontWeight="bold">
              {questions.length}
            </Text>
          </Text>
        </Box>

        <HStack spacing={4} justify="center">
          <Button onClick={onRestart} colorScheme="blue" size="lg">
            Try Again
          </Button>
          <Button
            onClick={handleDownloadCertificate}
            colorScheme="green"
            size="lg"
          >
            Download Certificate
          </Button>
        </HStack>

        <VStack spacing={6} align="stretch" width="100%">
          <Heading size="lg" color={headingColor} textAlign="center">
            Review Your Answers
          </Heading>
          {questions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.answer;
            return (
              <Box
                key={question.id}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                borderWidth="1px"
                borderColor={isCorrect ? correctColor : incorrectColor}
              >
                <Heading size="md" mb={4} color={headingColor}>
                  {question.question.split("\n").map((line, i) => (
                    <Text as="span" key={i} display="block">
                      {line}
                    </Text>
                  ))}
                </Heading>
                <Text color={textColor} fontWeight="medium">
                  Your answer:{" "}
                  <Text as="span" fontWeight="bold">
                    {userAnswers[index] || "Not answered"}
                  </Text>
                </Text>
                <HStack
                  mt={2}
                  color={isCorrect ? correctColor : incorrectColor}
                >
                  <Icon as={isCorrect ? FaCheckCircle : FaTimesCircle} />
                  <Text fontWeight="bold">
                    {isCorrect
                      ? "Correct"
                      : `Correct answer: ${question.answer}`}
                  </Text>
                </HStack>
              </Box>
            );
          })}
        </VStack>
      </VStack>
    </Box>
  );
};

export const QuizScreen = ({ onNavigateToAccessibility, userName, onNext }) => {
  const [selectedModule, setSelectedModule] = useState(quizData[0]);
  const questions = useMemo(() => selectedModule.questions, [selectedModule]);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    setCurrentQuestionIndex(0);
  };

  const handleAnswerSelect = (answer) => {
    const newAnswers = { ...userAnswers };
    newAnswers[selectedModule.module][currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) =>
      Math.min(prev + 1, questions.length - 1)
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
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [selectedModule.module]: Array(questions.length).fill(null),
    }));
    setShowResults(false);
  };

  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const progressBg = useColorModeValue("gray.200", "gray.600");
  const screenBg = useColorModeValue("gray.50", "gray.900");
  const hoverBg = useColorModeValue("blue.100", "blue.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleKeyDown = (e) => {
    const options = currentQuestion.options;
    const currentIndex = options.findIndex(
      (option) => option === userAnswers[selectedModule.module][currentQuestionIndex]
    );

    let nextIndex;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % options.length;
      handleAnswerSelect(options[nextIndex]);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex =
        currentIndex <= 0
          ? options.length - 1
          : (currentIndex - 1) % options.length;
      handleAnswerSelect(options[nextIndex]);
    }
  };

  return (
    <Box
      p={{ base: 2, md: 8 }}
      width="100%"
      maxW="90vw"
      mx="auto"
      bg={screenBg}
      borderRadius="xl"
    >
      <VStack spacing={8} align="stretch">
        <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="2xl">
          <Heading size="lg" color={headingColor} textAlign="center" mb={4}>
            Modules
          </Heading>
          <HStack spacing={4} justify="center" wrap="wrap">
            {quizData.map((module) => (
              <Button
                key={module.module}
                onClick={() => handleModuleSelect(module)}
                colorScheme={
                  selectedModule.module === module.module ? "blue" : "gray"
                }
                variant={
                  selectedModule.module === module.module ? "solid" : "outline"
                }
              >
                {module.module}
              </Button>
            ))}
          </HStack>
        </Box>

        {showResults ? (
          <ResultsScreen
            userAnswers={userAnswers[selectedModule.module]}
            onRestart={handleRestart}
            userName={userName}
            onNext={onNext}
            questions={questions}
          />
        ) : (
          <Box p={8} bg={cardBg} borderRadius="lg" boxShadow="2xl">
            <VStack spacing={8} align="stretch">
              <Box>
                <HStack justify="space-between" mb={2}>
                  <Text fontWeight="bold" color={textColor}>
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </Text>
                  <Text fontWeight="bold" color={textColor}>
                    {Math.round(progress)}% Complete
                  </Text>
                </HStack>
                <Progress.Root
                  value={progress}
                  size="sm"
                  colorScheme="blue"
                  bg={progressBg}
                  borderRadius="md"
                >
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                </Progress.Root>
              </Box>

              <Heading
                as="h2"
                size="lg"
                color={headingColor}
                textAlign="center"
                minH="120px"
              >
                {currentQuestion.question}
              </Heading>

              <RadioGroup.Root
                onValueChange={(details) => handleAnswerSelect(details.value)}
                value={userAnswers[selectedModule.module][currentQuestionIndex]}
                w="100%"
              >
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap={6}
                  onKeyDown={handleKeyDown}
                  role="radiogroup"
                  tabIndex={0}
                >
                  {currentQuestion.options.map((option) => (
                    <RadioGroup.Item
                      key={option}
                      value={option}
                      borderWidth="1px"
                      borderColor={borderColor}
                      borderRadius="md"
                      p={8}
                      textAlign="center"
                      cursor="pointer"
                      transition="all 0.2s ease-in-out"
                      _checked={{
                        bg: "blue.500",
                        color: "white",
                        borderColor: "blue.500",
                        boxShadow: "md",
                        transform: "scale(1.02)",
                      }}
                      _hover={{
                        bg: hoverBg,
                      }}
                    >
                      <RadioGroup.ItemHiddenInput />
                      <Text fontWeight="medium">{option}</Text>
                    </RadioGroup.Item>
                  ))}
                </Grid>
              </RadioGroup.Root>

              <HStack justify="space-between" mt={8}>
                <Button onClick={onNavigateToAccessibility} variant="outline">
                  Accessibility
                </Button>
                <Spacer />
                <HStack>
                  <Button
                    onClick={handleBack}
                    isDisabled={currentQuestionIndex === 0}
                  >
                    Back
                  </Button>
                  {currentQuestionIndex < questions.length - 1 && (
                    <Button onClick={handleNext} colorScheme="blue">
                      Next
                    </Button>
                  )}
                </HStack>
              </HStack>
              <Button
                onClick={handleSubmit}
                colorScheme="blue"
                width="full"
                mt={4}
                size="lg"
              >
                Submit
              </Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};
