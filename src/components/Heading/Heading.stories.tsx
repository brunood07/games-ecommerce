import React from 'react';
import { Story } from '@storybook/react';
import { Heading } from '.';
import { HeadingProps } from './Heading.types';

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Most Populars',
  color: 'black',
  lineLeft: false,
  lineBottom: false
};

export default {
  title: 'Heading',
  component: Heading
};
