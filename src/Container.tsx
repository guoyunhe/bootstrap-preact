import c from 'classnames';
import { JSX } from 'preact';
import { Breakpoint } from './types';

export interface ContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  breakpoint?: Breakpoint;
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
