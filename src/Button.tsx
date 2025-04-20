import c from 'classnames';
import { JSX } from 'preact';

export type ButtonProps = (
  | (JSX.ButtonHTMLAttributes<HTMLButtonElement> & { component?: 'button' })
  | (JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { component: 'a' })
) & {
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
  outline?: boolean;
  size?: 'sm' | 'lg';
  disabled?: boolean;
};

export default function Button({
  component = 'button',
  variant,
  outline,
  size,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const Component = component;
  return (
    <Component
      className={c(
        'btn',
        variant && `btn-${outline ? 'outline-' : ''}${variant}`,
        size && `btn-${size}`,
        disabled && 'disabled',
        className,
      )}
      disabled={disabled}
      aria-disabled={disabled}
      {...(rest as any)}
    />
  );
}
