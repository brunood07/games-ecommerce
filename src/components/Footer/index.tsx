import Link from 'next/link';

import { Heading } from '../Heading';
import { Logo } from '../Logo';

import { Content, Column, Copyright, Wrapper } from './styles';

export const Footer = () => {
  return (
    <Wrapper>
      <Logo color="black" />
      <Content>
        <Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact us
          </Heading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </Column>

        <Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </Column>

        <Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>

          <nav aria-labelledby="footer-resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>Store</a>
            </Link>
            <Link href="/">
              <a>Search</a>
            </Link>
          </nav>
        </Column>

        <Column aria-labelledby="footer-contact">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </Column>
      </Content>
      <Copyright>Won Games 2022 @ All rights reserved.</Copyright>
    </Wrapper>
  );
};
