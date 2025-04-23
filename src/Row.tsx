import c from 'classnames';
import Box, { BoxProps } from './Box';
import { ResponsiveValue } from './types';
import { rc } from './utils';

export interface RowProps extends BoxProps {
  g?: ResponsiveValue<number>;
  gx?: ResponsiveValue<number>;
  gy?: ResponsiveValue<number>;
  cols?: number;
}

export default function Row({ className, cols, g, gx, gy, ...rest }: RowProps) {
  return (
    <Box
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
