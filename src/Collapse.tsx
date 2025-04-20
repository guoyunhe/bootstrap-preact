import c from 'classnames';
import { JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

export interface CollapseProps extends JSX.HTMLAttributes<HTMLDivElement> {
  /**
   * Toggle collapse content
   */
  show?: boolean;
  /**
   * Collapse in horizontal direcation
   */
  horizontal?: boolean;
}

export default function Collapse({ className, show, horizontal, ...rest }: CollapseProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  const [internalShow, setInternalShow] = useState(show);
  const [collapsing, setCollapsing] = useState(false);

  useEffect(() => {
    if (internalShow !== show) {
      setInternalShow(show);
      setCollapsing(true);

      // before collapsing class is added, set actual height/width style
      if (horizontal) {
        rootRef.current.style.width = show ? `0px` : `${rootRef.current.scrollWidth}px`;
      } else {
        rootRef.current.style.height = show ? `0px` : `${rootRef.current.scrollHeight}px`;
      }
    }
  }, [horizontal, internalShow, show]);

  useEffect(() => {
    if (collapsing) {
      // after collapsing class is added, set target height/width style
      if (horizontal) {
        rootRef.current.style.width = internalShow ? `${rootRef.current.scrollWidth}px` : `0px`;
      } else {
        rootRef.current.style.height = internalShow ? `${rootRef.current.scrollHeight}px` : `0px`;
      }
    } else if (horizontal) {
      rootRef.current.style.width = ``;
    } else {
      rootRef.current.style.height = ``;
    }
  }, [collapsing, horizontal, internalShow]);

  return (
    <div
      ref={rootRef}
      className={c(
        collapsing ? 'collapsing' : 'collapse',
        !collapsing && internalShow && 'show',
        horizontal && 'collapse-horizontal',
        className,
      )}
      onTransitionEnd={() => {
        setCollapsing(false);
      }}
      {...rest}
    />
  );
}
