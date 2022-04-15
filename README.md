# rollup-ts-reexport-bug

## Prerequisites 
```
npm i
```

## Build
```
npm run build
```

## Reproduction

When having multiple re-exports by using `export { default } from './Component` in a barrel file (es6 module) seems to not resolve types correctly.

E.g
```typescript
// Foo/Foo.tsx
import { FC } from "react";

const Foo: FC<{
  name: string;
}> = ({ name }) => <h2>Foo {name}</h2>;

export default Foo;

// Foo/index.ts
export { default } from "./Foo";

// index.ts
export { default as Foo } from "./Foo";
```

results in a `d.ts` file like:
```typescript
export { default as Foo };
```

but if instead of using [re-export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#re-exporting_aggregating) use import and then export works fine.

```typescript
// Foo/index.ts
import Foo from "./Foo";
export default Foo
```

### Expected Result 
```typescript
import { FC } from 'react';

interface BarProps {
    lastName: string;
}
declare const Bar: FC<BarProps>;

interface HelloWorldProps {
    name: string;
}
declare const Foo: FC<HelloWorldProps>;

export { Bar, Foo };
```

## Actual Results

```typescript
export { default as Bar, default as Foo };
```

