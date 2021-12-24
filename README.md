# react-use-interval-hook

> A basic useInterval hook for React. Works just like you would expect setInterval to work.

[![NPM](https://img.shields.io/npm/v/react-use-interval-hook.svg)](https://www.npmjs.com/package/react-use-timer-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-interval-hook
```

## Usage

```jsx
import React, { useState } from "react";
import { useInterval } from "react-use-interval-hook";

const ExampleCounter = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>Count is: {count}</div>;
};
```

## License

MIT © [bnzone](https://github.com/bnzone)
