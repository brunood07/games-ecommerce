import React from 'react';
import { Story } from '@storybook/react';
import { Banner } from '.';
import { BannerProps } from './Banner.types';

const Template: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Banner {...args} />
  </div>
);

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

export const WithRibbon = Template.bind({});
WithRibbon.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subTitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
};

export default {
  title: 'Banner',
  component: Banner
};
