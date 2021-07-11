---
  title: Space
  path: /components
---

### 水平（按钮）

```tsx
import React from 'react';
import { Space, Button } from 'ui-react';
import 'ui-react/src/Space/styles/index.scss';

export default () => (
  <Space direction="horizontal" justify="space-between" align="baseline">
    <Button type="primary">Primary</Button>
    <Button type="default">Default</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    <Button disabled>Disabled</Button>
  </Space>
);
```

### 垂直（按钮）

```tsx
import React from 'react';
import { Space, Button } from 'ui-react';

export default () => (
  <Space direction="vertical" justify="space-between">
    <Button type="primary">Primary</Button>
    <Button type="default">Default</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    <Button disabled>Disabled</Button>
  </Space>
);
```

### 垂直（普通元素）

```tsx
import React from 'react';
import { Space, Button } from 'ui-react';

export default () => (
  <Space direction="vertical" justify="space-between">
    <div>Hello React1</div>
    <div>Hello React2</div>
    <div>Hello React1</div>
    <div>Hello React3</div>
    <div>Hello React4</div>
  </Space>
);
```

### 水平（普通元素）

```tsx
import React from 'react';
import { Space, Button } from 'ui-react';

export default () => (
  <Space direction="horizontal">
    <div>Hello React1</div>
    <div>Hello React2</div>
    <div>Hello React1</div>
    <div>Hello React3</div>
    <div>Hello React4</div>
  </Space>
);
```

#### 间距大小

```tsx
import React from 'react';
import { Space, Button } from 'ui-react';
import 'ui-react/src/Space/styles/index.scss';

export default () => (
  <>
    <p>large</p>
    <Space direction="horizontal" size="large">
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button disabled>Disabled</Button>
    </Space>
    <p>middle</p>
    <Space direction="horizontal" size="middle">
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button disabled>Disabled</Button>
    </Space>
    <p>small</p>
    <Space direction="horizontal" size="small">
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button disabled>Disabled</Button>
    </Space>
  </>
);
```
