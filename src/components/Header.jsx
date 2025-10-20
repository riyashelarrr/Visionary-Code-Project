import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export const Header = () => {
  return (
    <Box as="header" width="100%" p={4} borderBottomWidth="1px">
      <Flex>
        <Heading size="md">Visionary Code Project</Heading>
        <Spacer />
        <ColorModeButton />
      </Flex>
    </Box>
  );
};
