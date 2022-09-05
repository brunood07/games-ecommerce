import { BannerProps } from './Banner.types';
import { Button } from '../Button';
import { Caption, Image, Subtitle, Title, Wrapper } from './styles';

export const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subTitle,
  title
}: BannerProps) => {
  return (
    <Wrapper>
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
