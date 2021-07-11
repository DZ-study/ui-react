---
nav:
  title: Menu
  path: /components
---

## Menu

水平方向（默认）

```tsx
import React, { useState } from 'react';
import { Menu } from 'ui-react';
import 'ui-react/src/menu/styles/index.scss';

export default () => {
  console.log('menu...');
  const [index, setIndex] = useState<string>('0');

  return (
    <>
      <Menu defaultIndex={index} onSelect={(index) => setIndex(index)}>
        <Menu.Item>cool link</Menu.Item>
        <Menu.Item disabled>disabled</Menu.Item>
        <Menu.Item>cool link 2</Menu.Item>
      </Menu>
      {index === '0' && <div>cool link</div>}
      {index === '2' && <div>cool link 2</div>}
    </>
  );
};
```

垂直方向

```tsx
import React, { useState } from 'react';
import { Menu } from 'ui-react';
import 'ui-react/src/menu/styles/index.scss';

export default () => {
  const [index, setIndex] = useState<string>('0');

  return (
    <>
      <Menu
        defaultIndex={index}
        onSelect={(index) => setIndex(index)}
        direction="vertical"
      >
        <Menu.Item>cool link</Menu.Item>
        <Menu.Item disabled>disabled</Menu.Item>
        <Menu.Item>cool link 2</Menu.Item>
      </Menu>
    </>
  );
};
```
