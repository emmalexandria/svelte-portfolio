import type { Preview } from '@storybook/svelte';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/app.css'
// Supports weights 400-900
import '@fontsource-variable/vollkorn';
import '@fontsource-variable/exo-2';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
      'high-contrast': 'high-contrast',
      'dark-high-contrast': 'high-contrast dark',
    },
    defaultTheme: 'light'
  })

]

export default preview;
