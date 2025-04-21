import c from 'classnames';
import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import AccordionItem, { AccordionItemProps } from './AccordionItem';

export interface AccordionProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'children'> {
  flush?: boolean;
  items?: AccordionItemProps[];
  mode?: 'single' | 'multiple';
}

export default function Accordion({
  flush,
  className,
  items,
  mode = 'single',
  ...rest
}: AccordionProps) {
  const [internalShowKeys, setInternalShowKeys] = useState([0]);
  return (
    <div className={c('accordion', flush && 'accordion-flush', className)} {...rest}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          show={internalShowKeys.includes(index)}
          onChange={(show) => {
            if (mode === 'single') {
              setInternalShowKeys([index]);
            } else if (show) {
              setInternalShowKeys((prev) => [...prev, index]);
            } else {
              setInternalShowKeys((prev) => prev.filter((k) => k !== index));
            }
          }}
        />
      ))}
    </div>
  );
}
