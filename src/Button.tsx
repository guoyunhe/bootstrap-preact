import c from 'classnames';
import { ComponentType, JSX } from 'preact';

export type ButtonProps<P> = (
  | (JSX.ButtonHTMLAttributes<HTMLButtonElement> & { component?: 'button' })
  | (JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { component: 'a' })
  | (P & { component: ComponentType<P> })
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
  active?: boolean;
};

export default function Button<P extends { className: string }>({
  component = 'button',
  variant,
  outline,
  size,
  className,
  disabled,
  active,
  ...rest
}: ButtonProps<P>) {
  const Component = component;

  return (
    <Component
      className={c(
        'btn',
        variant && `btn-${outline ? 'outline-' : ''}${variant}`,
        size && `btn-${size}`,
        active && 'active',
        disabled && 'disabled',
        className,
      )}
      disabled={disabled}
      aria-disabled={disabled}
      aria-pressed={active}
      role="button"
      {...(rest as any)}
    />
  );
}
