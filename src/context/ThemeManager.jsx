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

const redPolarityStyles = `
  body.redPolarity {
    --chakra-colors-chakra-body-bg: #000000;
    --chakra-colors-chakra-body-text: #FF0000;
    --chakra-colors-gray-500: #FF0000;
    --chakra-colors-gray-100: #330000;
    --chakra-colors-blue-100: #000000;
    --chakra-colors-blue-500: #FF0000;
    --chakra-colors-blue-600: #CC0000;
  }
  
  body.redPolarity button, 
  body.redPolarity [role="button"],
  body.redPolarity a {
    border: 1px solid #FF0000;
  }
`;

const applyTheme = (theme, setColorMode) => {
  document.body.classList.remove('light', 'dark', 'highContrastLight', 'highContrastDark', 'redPolarity');
  document.body.classList.add(theme);

  if (theme.includes('dark') || theme === 'redPolarity') {
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
  } else if (theme === 'redPolarity') {
    styles = redPolarityStyles;
  }
  
  styleTag.innerHTML = styles;
};

const applyVisualOutline = (isChecked) => {
  const styleTagId = "visual-outline-styles";
  let styleTag = document.getElementById(styleTagId);

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  const styles = isChecked
    ? `
      button, a, input[type="radio"], input[type="checkbox"], [role="button"], [role="slider"], [role="switch"] {
        outline: 2px solid #3182ce !important;
        outline-offset: 2px;
      }

      [data-focus-visible] {
        outline: 4px solid #3182ce !important;
        box-shadow: none !important;
      }
    `
    : "";

  styleTag.innerHTML = styles;
};

const applyFontSize = (fontSize) => {
  document.documentElement.style.fontSize = `${fontSize}px`;
};

export const ThemeManager = () => {
  const { theme, visualOutline, fontSize } = useAccessibility();
  const { setColorMode } = useColorMode();

  React.useLayoutEffect(() => {
    applyTheme(theme, setColorMode);
    applyVisualOutline(visualOutline);
    applyFontSize(fontSize);
  }, [theme, setColorMode, visualOutline, fontSize]);

  return null;
};
