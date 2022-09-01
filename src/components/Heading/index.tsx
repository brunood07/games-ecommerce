import { HeadingProps } from './Heading.types';
import { Wrapper } from './styles';

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </Wrapper>
  );
};

export default Heading;
