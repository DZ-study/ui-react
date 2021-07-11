---
nav:
  title: Icon
  path: /components
---

默认图标

```tsx
import React from 'react';
import { Icon } from 'ui-react';

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <Icon icon="coffee" theme="success" />
      <Icon icon="arrow-up" size="5x" />
      <Icon icon="spinner" size="2x" spin={true} />
    </div>
  );
};
```

不同类型

```tsx
import React from 'react';
import { Icon } from 'ui-react';
import 'ui-react/src/Icon/styles/index.scss';

export default () => {
  const themes = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'dark',
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {themes.map((theme) => (
        <Icon key={theme} icon="coffee" theme={theme} />
      ))}
    </div>
  );
};
```
