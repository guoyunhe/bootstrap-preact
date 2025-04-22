import c from 'classnames';
import { JSX } from 'preact';
import { ResponsiveValue } from './types';
import { rc } from './utils';

export interface RowProps extends JSX.HTMLAttributes<HTMLDivElement> {
  g?: ResponsiveValue<number>;
  gx?: ResponsiveValue<number>;
  gy?: ResponsiveValue<number>;
  cols?: number;
}

export default function Row({ className, cols, g, gx, gy, ...rest }: RowProps) {
  return (
    <div
      className={c(
        'row',
        cols && `row-cols-${cols}`,
        rc('g-', g),
        rc('gx-', gx),
        rc('gy-', gy),
        className,
      )}
      {...rest}
    />
  );
}
