# Button

## Variants

```jsx
import { Button } from 'bootstrap-preact';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="link">Link</Button>
</div>;
```

## Outline

```jsx
import { Button } from 'bootstrap-preact';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button outline variant="primary">
    Primary
  </Button>
  <Button outline variant="secondary">
    Secondary
  </Button>
  <Button outline variant="success">
    Success
  </Button>
  <Button outline variant="danger">
    Danger
  </Button>
  <Button outline variant="warning">
    Warning
  </Button>
  <Button outline variant="info">
    Info
  </Button>
  <Button outline variant="light">
    Light
  </Button>
  <Button outline variant="dark">
    Dark
  </Button>
</div>;
```

## Sizes

```jsx
import { Button } from 'bootstrap-preact';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button size="sm" variant="primary">
    Small
  </Button>
  <Button variant="primary">Medium</Button>
  <Button size="lg" variant="primary">
    Large
  </Button>
</div>;
```

## Tags

```jsx
import { Button } from 'bootstrap-preact';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button component="a" variant="primary" href="https://www.github.com/">
    Link
  </Button>
  <Button variant="primary" type="submit">
    Button
  </Button>
</div>;
```

## Disabled

```jsx
import { Button } from 'bootstrap-preact';

<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Button variant="primary" disabled>
    Primary
  </Button>
  <Button variant="secondary" disabled>
    Secondary
  </Button>
  <Button variant="success" disabled>
    Success
  </Button>
  <Button variant="danger" disabled>
    Danger
  </Button>
  <Button variant="primary" outline disabled>
    Primary
  </Button>
  <Button variant="secondary" outline disabled>
    Secondary
  </Button>
  <Button variant="success" outline disabled>
    Success
  </Button>
  <Button variant="danger" outline disabled>
    Danger
  </Button>
</div>;
```

## Toogle

```jsx
import { Button } from 'bootstrap-preact';
import { useState } from 'preact/hooks';

function App() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Button variant="primary" active={active1} onClick={() => setActive1((prev) => !prev)}>
        Toogle
      </Button>
      <Button
        variant="primary"
        outline
        active={active2}
        onClick={() => setActive2((prev) => !prev)}
      >
        Toggle
      </Button>
    </div>
  );
}

render(<App />);
```

## Wouter

[wouter-preact](https://github.com/molefrog/wouter/) is a 2KB routing library for Preact.

```jsx
import { Button } from 'bootstrap-preact';
import { Link } from 'wouter-preact';

<Button variant="primary" component={Link} href="../collapse">
  Wouter Link
</Button>;
```
