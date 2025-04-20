# Collapse

## Vertical

```jsx
import { Button, Collapse } from 'bootstrap-preact';
import { useState } from 'preact/hooks';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
        Toogle
      </Button>

      <div style={{ height: 120 }}>
        <Collapse show={show}>
          <div style={{ width: 400, background: '#eee', padding: 8 }}>
            Some placeholder content for the collapse component. This panel is hidden by default but
            revealed when the user activates the relevant trigger.
          </div>
        </Collapse>
      </div>
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
    <div>
      <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
        Toogle
      </Button>

      <div style={{ height: 120 }}>
        <Collapse show={show} horizontal>
          <div style={{ width: 400, background: '#eee', padding: 8 }}>
            Some placeholder content for the collapse component. This panel is hidden by default but
            revealed when the user activates the relevant trigger.
          </div>
        </Collapse>
      </div>
    </div>
  );
}

render(<App />);
```
