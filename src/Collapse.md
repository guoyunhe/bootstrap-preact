# Collapse

## Vertical

```jsx
import { Button, Collapse } from 'bootstrap-preact';
import { useState } from 'preact/hooks';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ height: 150 }}>
      <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
        Toogle
      </Button>

      <Collapse show={show}>
        <div style={{ width: 400, background: '#eee', padding: 8 }}>
          Some placeholder content for the collapse component. This panel is hidden by default but
          revealed when the user activates the relevant trigger.
        </div>
      </Collapse>
    </div>
  );
}

render(<App />);
```

## Horizontal

```jsx
import { Button, Collapse } from 'bootstrap-preact';
import { useState } from 'preact/hooks';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ height: 150 }}>
      <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
        Toogle
      </Button>

      <Collapse show={show} horizontal>
        <div style={{ width: 400, background: '#eee', padding: 8 }}>
          Some placeholder content for the collapse component. This panel is hidden by default but
          revealed when the user activates the relevant trigger.
        </div>
      </Collapse>
    </div>
  );
}

render(<App />);
```
