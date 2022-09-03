import React from 'react';
import { Story } from '@storybook/react';

import { Menu } from '.';
import { MenuProps } from './Menu.types';

const Template: Story = (args: MenuProps) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: ''
};

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
};

export default {
  title: 'Menu',
  component: Menu
};
