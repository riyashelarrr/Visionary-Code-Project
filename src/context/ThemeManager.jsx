import React from 'react';
import { useAccessibility } from './AccessibilityContext';
import { useColorMode } from '../components/ui/color-mode';

const highContrastDarkStyles = `
  body.highContrastDark {
    --chakra-colors-chakra-body-bg: #000000;
    --chakra-colors-chakra-body-text: #FFFFFF;
    --chakra-colors-gray-500: #FFFFFF;
    --chakra-colors-gray-100: #333333;
    --chakra-colors-blue-100: #000000;
  }
`;

const highContrastLightStyles = `
  body.highContrastLight {
    --chakra-colors-chakra-body-bg: #FFFFFF;
    --chakra-colors-chakra-body-text: #000000;
    --chakra-colors-gray-500: #000000;
    --chakra-colors-gray-100: #e5e5e5;
    --chakra-colors-blue-100: #FFFFFF;
  }
`;

const applyTheme = (theme, setColorMode) => {
  document.body.classList.remove('light', 'dark', 'highContrastLight', 'highContrastDark');
  document.body.classList.add(theme);

  if (theme.includes('dark')) {
    setColorMode('dark');
  } else {
    setColorMode('light');
  }

  const styleTagId = 'high-contrast-styles';
  let styleTag = document.getElementById(styleTagId);
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }
  
  let styles = '';
  if (theme === 'highContrastDark') {
    styles = highContrastDarkStyles;
  } else if (theme === 'highContrastLight') {
    styles = highContrastLightStyles;
  }
  
  styleTag.innerHTML = styles;
};

const applyVisualOutline = (isChecked) => {
  const styleTagId = 'visual-outline-styles';
  let styleTag = document.getElementById(styleTagId);

  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  const styles = isChecked
    ? `
      *:focus-visible {
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6) !important;
        outline: 2px solid transparent !important;
      }
    `
    : '';

  styleTag.innerHTML = styles;
};

export const ThemeManager = () => {
  const { theme, visualOutline } = useAccessibility();
  const { setColorMode } = useColorMode();

  React.useLayoutEffect(() => {
    applyTheme(theme, setColorMode);
    applyVisualOutline(visualOutline);
  }, [theme, setColorMode, visualOutline]);

  return null;
};
