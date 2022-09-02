import { ButtonProps } from './Button.types';
import { Wrapper } from './styles';

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </Wrapper>
  );
};
