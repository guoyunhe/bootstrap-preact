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

## Duration

Collapse's default [transition-duration](https://getbootstrap.com/docs/5.3/components/collapse/#sass-variables) is `0.35s` in Sass/CSS. It must match the internal timeout of Preact component. If your theme has a different transition-duration, you need to change `duration` property, too.

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
        <Collapse show={show} duration={500}>
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
