import cn from 'classnames';
import { ComponentChildren, JSX } from 'preact';
import './index.css';

export interface PreactBootstrapProps {
  children?: ComponentChildren;
  className?: string;
  style?: JSX.CSSProperties;
}

export function PreactBootstrap({ children, className, style }: PreactBootstrapProps) {
  return (
    <div className={cn('preact-bootstrap', className)} style={style}>
      {children}
    </div>
  );
}
