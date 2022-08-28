import { addDecorator } from '@storybook/react';

import GlobalStyles from '../src/styles/global';

addDecorator(s => <><GlobalStyles />{s()}</>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}