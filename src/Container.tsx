import c from 'classnames';
import { JSX } from 'preact';

export interface ContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fluid?: boolean;
}

export default function Container({
  breakpoint = 'sm',
  className,
  fluid,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={c(fluid ? 'container-fluid' : `container-${breakpoint}`, className)}
      {...rest}
    />
  );
}
