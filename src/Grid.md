# Grid (Row & Col)

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

## Auto column grid

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

## Fixed column grid

```jsx
import { Row, Col } from 'bootstrap-preact';

<Row cols={2} g={4}>
  <Col>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
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

## Gutter sizes

### No gutter

```jsx
import { Row, Col } from 'bootstrap-preact';

<Row g={0}>
  <Col breakpoint="md">
    <div className="text-center" style={{ background: '#fee', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
  <Col breakpoint="md">
    <div className="text-center" style={{ background: '#efe', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
  <Col breakpoint="md">
    <div className="text-center" style={{ background: '#eef', paddingBlock: 50 }}>
      1/3
    </div>
  </Col>
</Row>;
```

### Same gutter in horizontal and vertical

```jsx
import { Row, Col } from 'bootstrap-preact';

<Row g={2}>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
</Row>;
```

### Different gutter in horizontal and vertical

```jsx
import { Row, Col } from 'bootstrap-preact';

<Row gx={4} gy={2}>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
  <Col span={6}>
    <div className="text-center" style={{ background: '#eee', paddingBlock: 50 }}>
      1/2
    </div>
  </Col>
</Row>;
```
