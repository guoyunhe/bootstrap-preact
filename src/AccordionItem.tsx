import c from 'classnames';
import { ComponentChildren, JSX } from 'preact';
import Collapse from './Collapse';

export interface AccordionItemProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'title' | 'onChange'> {
  title?: ComponentChildren;
  show?: boolean;
  onChange?: (show: boolean) => void;
}

export default function AccordionItem({
  className,
  children,
  title,
  show,
  onChange,
  ...rest
}: AccordionItemProps) {
  return (
    <div className={c('accordion-item', className)} {...rest}>
      <h2 className="accordion-header">
        <button
          className={c('accordion-button', !show && 'collapsed')}
          type="button"
          onClick={() => {
            onChange?.(!show);
          }}
        >
          {title}
        </button>
      </h2>

      <Collapse show={show}>
        <div className="accordion-body">{children}</div>
      </Collapse>
    </div>
  );
}
