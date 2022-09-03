import React from 'react';
import { Story } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '.';

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Buy now',
  size: 'medium',
  fullWidth: false
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Buy now',
  size: 'medium',
  fullWidth: false,
  icon: <AddShoppingCart />
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
};
