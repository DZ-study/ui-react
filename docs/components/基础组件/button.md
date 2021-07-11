---
nav:
  title: Button
  path: /components
---

## Button

```tsx
import React from 'react';
import { Button } from 'ui-react';
import 'ui-react/src/button/styles/index.scss';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button disabled>Disabled</Button>
      <Button type="link" href="http://www.baidu.com">
        跳转
      </Button>
    </div>
  );
};
```

## Button Size

```tsx
import React from 'react';
import { Button } from 'ui-react';
import 'ui-react/src/button/styles/index.scss';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" size="large">
        Primary
      </Button>
      <Button type="primary">Primary</Button>
      <Button type="primary" size="small">
        Primary
      </Button>
    </div>
  );
};
```

## Button Click

```tsx
import React from 'react';
import { Button } from 'ui-react';
import 'ui-react/src/button/styles/index.scss';

export default () => (
  <Button
    type="primary"
    onClick={() => {
      alert('Hello');
    }}
  >
    click me
  </Button>
);
```
