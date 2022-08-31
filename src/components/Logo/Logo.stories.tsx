import React from 'react';
import { Story } from '@storybook/react';
import Logo from '.';
import { LogoProps } from './Logo.types';

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'white'
};

export default {
  title: 'Logo',
  component: Logo
};
