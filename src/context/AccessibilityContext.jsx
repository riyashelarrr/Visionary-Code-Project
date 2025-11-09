import React, { createContext, useState, useContext } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
  const getInitialState = (key, defaultValue) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return defaultValue;
    }
  };

  const [fontSize, setFontSize] = useState(() => getInitialState('fontSize', 16));
  const [theme, setTheme] = useState(() => getInitialState('theme', 'light'));
  const [visualOutline, setVisualOutline] = useState(() => getInitialState('visualOutline', false));
  const [soundEnabled, setSoundEnabled] = useState(() => getInitialState('soundEnabled', true));

  const updateStateAndStorage = (setter, key) => (newValue) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setter(newValue);
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  };

  const value = {
    fontSize,
    setFontSize: updateStateAndStorage(setFontSize, 'fontSize'),
    theme,
    setTheme: updateStateAndStorage(setTheme, 'theme'),
    visualOutline,
    setVisualOutline: updateStateAndStorage(setVisualOutline, 'visualOutline'),
    soundEnabled,
    setSoundEnabled: updateStateAndStorage(setSoundEnabled, 'soundEnabled'),
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

