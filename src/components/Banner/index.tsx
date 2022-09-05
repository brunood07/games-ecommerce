import { BannerProps } from './Banner.types';

import { Button } from '../Button';
import { Ribbon } from '../Ribbon';

import { Caption, Image, Subtitle, Title, Wrapper } from './styles';

export const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subTitle,
  title,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary'
}: BannerProps) => {
  return (
    <Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <Image src={img} role="img" aria-label={title} />

      <Caption>
        <Title>{title}</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: subTitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </Caption>
    </Wrapper>
  );
};
