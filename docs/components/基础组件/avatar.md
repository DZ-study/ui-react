---
nav:
  title: Avatar
  path: /components
---

```tsx
import React, { useState, useCallback } from 'react';
import { Avatar, Button } from 'ui-react';

const obj = {
  1: 'middle',
  2: 'large',
  3: 'default',
};

export default () => {
  const [size, setSize] = useState<number>(0);
  const [counter, setCounter] = useState<number>(1);

  const handleClick = () => {
    console.log(size);
    setSize(size + 1);
  };

  const handleTest = useCallback(() => {
    console.log('我的头像');
  }, []);

  return (
    <div>
      <span>{size}</span>
      <Button type="primary" onClick={handleClick}>
        测试
      </Button>
      <Avatar counter={counter} onClick={handleTest} />
    </div>
  );
};
```
