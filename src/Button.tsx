import c from 'classnames';
import { JSX } from 'preact';

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  size?: 'sm' | 'lg';
}

export default function Button({ variant, size, ...rest }: ButtonProps) {
  return (
    <button className={c('btn', variant && `btn-${variant}`, size && `btn-${size}`)} {...rest} />
  );
}
