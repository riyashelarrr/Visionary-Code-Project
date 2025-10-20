import React, { useState } from "react";
import "./App.css";
import { Provider } from "./components/ui/provider";
import { Header } from "./components/Header";
import { WelcomeScreen } from "./components/screens/WelcomeScreen";
import { AccessibilitySettingsScreen } from "./components/screens/AccessibilitySettingsScreen";
import { CourseScreen } from "./components/screens/CourseScreen";
import { Flex, Box } from "@chakra-ui/react";
import { AccessibilityProvider, useAccessibility } from "./context/AccessibilityContext";

function AppContent() {
  const [screen, setScreen] = useState(1);
  const { fontSize } = useAccessibility();

  const handleNext = () => {
    setScreen((prevScreen) => prevScreen + 1);
  };

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <WelcomeScreen onNext={handleNext} />;
      case 2:
        return <AccessibilitySettingsScreen onNext={handleNext} />;
      case 3:
        return <CourseScreen />;
      default:
        return <WelcomeScreen onNext={handleNext} />;
    }
  };

  return (
    <Box className="App" style={{ fontSize: `${fontSize}px` }}>
      <Header />
      <Flex
        as="main"
        flex="1"
        justifyContent="center"
        alignItems="center"
        p={8}
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
        <AppContent />
      </AccessibilityProvider>
    </Provider>
  );
}

export default App;
