import React, { useState, useEffect } from "react";
import "./App.css";
import { Provider } from "./components/ui/provider";
import { Header } from "./components/Header";
import { WelcomeScreen } from "./components/screens/WelcomeScreen";
import { AccessibilitySettingsScreen } from "./components/screens/AccessibilitySettingsScreen";
import { CourseScreen } from "./components/screens/CourseScreen";
import { QuizScreen } from "./components/screens/QuizScreen";
import { Flex, Box } from "@chakra-ui/react";
import { AccessibilityProvider } from "./context/AccessibilityContext";
import { ThemeManager } from "./context/ThemeManager";
import { FeedbackScreen } from "./components/screens/FeedbackScreen";
import navigationSound from "./assets/sounds/navigation.mp3";
import { useAccessibility } from "./context/AccessibilityContext";
import RegisterComponent from "./components/RegisterComponent";

function AppContent() {
  const [screen, setScreen] = useState(1);
  const [previousScreen, setPreviousScreen] = useState(null);
  const [userName, setUserName] = useState("");
  const { soundEnabled, theme, setTheme } = useAccessibility();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === "b" || event.key === "B")) {
        event.preventDefault();
        const isDark = theme === "dark" || theme === "highContrastDark";
        setTheme(isDark ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [theme, setTheme]);

  const playSound = (sound) => {
    if (soundEnabled) {
      new Audio(sound).play();
    }
  };

  const handleNext = (name) => {
    if (typeof name === "string" && name) {
      setUserName(name);
    }
    setScreen((prevScreen) => prevScreen + 1);
  };

  const handleFinish = () => {
    setScreen(1);
    setUserName("");
  };

  const handleBack = () => {
    playSound(navigationSound);
    if (previousScreen) {
      setScreen(previousScreen);
      setPreviousScreen(null);
    } else {
      setScreen((prevScreen) => Math.max(1, prevScreen - 1));
    }
  };

  const navigateToAccessibility = () => {
    playSound(navigationSound);
    setPreviousScreen(screen);
    setScreen(2);
  };

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <WelcomeScreen onNext={handleNext} />;
      case 2:
        return (
          <AccessibilitySettingsScreen
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <CourseScreen
            onNext={handleNext}
            onBack={handleBack}
            onNavigateToAccessibility={navigateToAccessibility}
          />
        );
      case 4:
        return (
          <QuizScreen
            userName={userName}
            onNavigateToAccessibility={navigateToAccessibility}
            onNext={handleNext}
          />
        );
      case 5:
        return <FeedbackScreen onFinish={handleFinish} />;
      default:
        return <WelcomeScreen onNext={handleNext} />;
    }
  };

  return (
    <Box className="App">
      <Header />
      <Flex
        as="main"
        flex="1"
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={4}
        width="100%"
      >
        {renderScreen()}
      </Flex>
    </Box>
  );
}

function App() {
  return (
    <Provider>
      <AccessibilityProvider>
        <ThemeManager />
        {/* <RegisterComponent /> */}
        <AppContent />
      </AccessibilityProvider>
    </Provider>
  );
}

export default App;
