import c from 'classnames';
import { JSX } from 'preact';
import { Breakpoint, ResponsiveValue } from './types';
import { rc } from './utils';

export interface ColProps extends JSX.HTMLAttributes<HTMLDivElement> {
  breakpoint?: Breakpoint;
  span?: ResponsiveValue<number>;
}

export default function Col({ breakpoint, className, span, ...rest }: ColProps) {
  return (
    <div
      className={c(breakpoint ? `col-${breakpoint}` : 'col', rc('col-', span), className)}
      {...rest}
    />
  );
}
