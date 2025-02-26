/** @type { import('@storybook/react').Preview } */
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/theme"; // Optionally import your custom theme

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}> {/* Use default or custom theme */}
      <Story />
    </ChakraProvider>
  ),
];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
