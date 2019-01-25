# useHandler react hook

Install it with yarn:

```
yarn add use-handler
```

Or with npm:

```
npm i use-handler --save
```

## Demo

This hook useful for optimizations.
Let's assume we have a list of items. Each item is clickable. Use-handler allows us to cache the onClick handlers:
https://codesandbox.io/s/vjko8kroyl

## Simple example

In this example react won't change the subscribtion function after each updating lifecycle:

```javascript
import React, { useState } from 'react';
import { useHandler } from 'use-handler';

export default function Input() {
  const [text, setText] = useState('Hello');
  const onChange = useHandler((e) => {
    setText(e.target.value);
  });

  return (
    <div>
      <input defaultValue={'Hello'} onChange={onChange} />
      <p>Actual value: {text}</p>
    </div>
  );
}
```
