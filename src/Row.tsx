import c from 'classnames';
import { JSX } from 'preact';
import { ResponsiveValue } from './types';
import { rc } from './utils';

export interface RowProps extends JSX.HTMLAttributes<HTMLDivElement> {
  g?: ResponsiveValue<number>;
  gx?: ResponsiveValue<number>;
  gy?: ResponsiveValue<number>;
}

export default function Row({ className, g, gx, gy, ...rest }: RowProps) {
  return (
    <div className={c('row', rc('g-', g), rc('gx-', gx), rc('gy-', gy), className)} {...rest} />
  );
}
