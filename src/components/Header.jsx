import { Box, Flex, Heading, Spacer, Image} from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <Box as="header" width="100%" p={4} borderBottomWidth="1px">
      <Flex>
        <Image src={logo} alt="Logo" boxSize="50px" mr={3} />
        <Heading size="md">Visionary Code Project</Heading>
        <Spacer />
        <ColorModeButton />
      </Flex>
    </Box>
  );
};
