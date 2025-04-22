# Grid (Row & Col)

## Equal column grid

```jsx
import { Row, Col } from 'bootstrap-preact';

<Row>
  <Col>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
  <Col>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
  <Col>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
</Row>;
```

## Classic 12 column grid

```jsx
import { Row, Col } from 'bootstrap-preact';

<Row>
  <Col span={3}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/4
    </div>
  </Col>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col span={3}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/4
    </div>
  </Col>
</Row>;
```

## Responsive grid

```jsx
import { Row, Col } from 'bootstrap-preact';

<Row>
  <Col breakpoint="md">
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
  <Col breakpoint="md">
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
  <Col breakpoint="md">
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
</Row>;
```

```jsx
import { Row, Col } from 'bootstrap-preact';

<Row>
  <Col span={{ md: 3 }}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/4
    </div>
  </Col>
  <Col span={{ md: 6 }}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col span={{ md: 3 }}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/4
    </div>
  </Col>
</Row>;
```
