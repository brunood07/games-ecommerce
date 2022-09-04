import React from 'react';
import { Story } from '@storybook/react';
import { Footer } from '.';

const Template: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Footer',
  component: Footer
};
