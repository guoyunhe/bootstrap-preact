import c from 'classnames';
import { JSX } from 'preact';
import { ResponsiveValue } from './types';
import { rc } from './utils';

export interface BoxProps extends JSX.HTMLAttributes<HTMLDivElement> {
  m?: ResponsiveValue<number>;
  mx?: ResponsiveValue<number | 'auto'>;
  my?: ResponsiveValue<number>;
  mt?: ResponsiveValue<number>;
  mb?: ResponsiveValue<number>;
  ms?: ResponsiveValue<number>;
  me?: ResponsiveValue<number>;

  p?: ResponsiveValue<number>;
  px?: ResponsiveValue<number>;
  py?: ResponsiveValue<number>;
  pt?: ResponsiveValue<number>;
  pb?: ResponsiveValue<number>;
  ps?: ResponsiveValue<number>;
  pe?: ResponsiveValue<number>;
}

export default function Box({
  m,
  mx,
  my,
  mt,
  mb,
  ms,
  me,
  p,
  px,
  py,
  pt,
  pb,
  ps,
  pe,
  className,
  ...rest
}: BoxProps) {
  return (
    <div
      className={c(
        className,
        rc('m-', m),
        rc('mx-', mx),
        rc('my-', my),
        rc('mt-', mt),
        rc('mb-', mb),
        rc('ms-', ms),
        rc('me-', me),
        rc('p-', p),
        rc('px-', px),
        rc('py-', py),
        rc('pt-', pt),
        rc('pb-', pb),
        rc('ps-', ps),
        rc('pe-', pe),
      )}
      {...rest}
    />
  );
}
