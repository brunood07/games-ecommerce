import React from 'react';
import { Story } from '@storybook/react';
import { Banner } from '.';
import { BannerProps } from './Banner.types';

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subTitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
};
Default.parameters = {
  layout: 'fullscreen'
};

export default {
  title: 'Banner',
  component: Banner
};
