import { useEffect } from 'react';
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

export const ThemeManager = () => {
  const { theme } = useAccessibility();
  const { setColorMode } = useColorMode();

  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('light', 'dark', 'highContrastLight', 'highContrastDark');

    // Add the current theme class
    document.body.classList.add(theme);

    // Set the base color mode for Chakra
    if (theme.includes('dark')) {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }

    // Inject high-contrast styles
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

  }, [theme, setColorMode]);

  return null;
};
