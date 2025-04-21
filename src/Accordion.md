# Accordion

## Single mode

```jsx
import { Accordion } from 'bootstrap-preact';

<Accordion
  items={[
    { title: 'Accordion Item 1', children: 'Accordion Content 1' },
    { title: 'Accordion Item 2', children: 'Accordion Content 2' },
    { title: 'Accordion Item 3', children: 'Accordion Content 3' },
  ]}
/>;
```

## Multiple mode

```jsx
import { Accordion } from 'bootstrap-preact';

<Accordion
  mode="multiple"
  items={[
    { title: 'Accordion Item 1', children: 'Accordion Content 1' },
    { title: 'Accordion Item 2', children: 'Accordion Content 2' },
    { title: 'Accordion Item 3', children: 'Accordion Content 3' },
  ]}
/>;
```

## Flush

```jsx
import { Accordion } from 'bootstrap-preact';

<Accordion
  flush
  items={[
    { title: 'Accordion Item 1', children: 'Accordion Content 1' },
    { title: 'Accordion Item 2', children: 'Accordion Content 2' },
    { title: 'Accordion Item 3', children: 'Accordion Content 3' },
  ]}
/>;
```
