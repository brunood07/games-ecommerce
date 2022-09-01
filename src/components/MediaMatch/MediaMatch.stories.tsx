import React from 'react';
import { Story } from '@storybook/react';
import { MediaMatch } from '.';

const Template: Story = (args) => (
  <MediaMatch {...args}>Only on Desktop</MediaMatch>
);

export const Desktop = Template.bind({});
Desktop.args = {
  greaterThan: 'medium'
};

export const Mobile = Template.bind({});
Mobile.args = {
  lessThan: 'medium'
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};

export default {
  title: 'MediaMatch',
  component: MediaMatch
};
