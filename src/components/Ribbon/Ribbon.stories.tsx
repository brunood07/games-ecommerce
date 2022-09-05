import React from 'react';
import { Story } from '@storybook/react';
import { Ribbon } from '.';
import { RibbonProps } from './Ribbon.types';

const Template: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args}>Best Seller</Ribbon>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  size: 'normal'
};

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
};
