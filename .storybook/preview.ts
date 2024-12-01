import type { Preview } from '@storybook/svelte';
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/app.css"
import "@fontsource/vollkorn-sc"
import "@fontsource-variable/exo-2"
import "@fontsource-variable/vollkorn"


const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'bg-mono-50',
        dark: 'dark bg-mono-950',
        highContrast: 'highContrast'
      },
      defaultTheme: 'light'
    }

    )],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
