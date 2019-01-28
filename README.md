Note: you can use useCallback hook, that is already included in react instead of custom useHandler hook.
You can see example with useHandler and useCallback hooks here: https://codesandbox.io/s/vjko8kroyl

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

This hook is useful for optimizations. During developing you can face with the performance issue, that you can solve changing your components to PureComponents. But if you pass callbacks as plain functions in JSX code you will get different references and your component will be walk through whole updating lifecycle. This hook allows you to cache function and use the same function with the same reference.

The simplest example with useHandler and without it you can get here: https://codesandbox.io/s/vjko8kroyl

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
