import React from 'react';
import { Story } from '@storybook/react';
import { Menu } from '.';

const Template: Story = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Menu',
  component: Menu
};
