import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

addDecorator(s => <ThemeProvider theme={theme}><GlobalStyles />{s()}</ThemeProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}