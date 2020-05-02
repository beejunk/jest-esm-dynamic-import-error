# jest-esm-dynamic-import-error

This is a minimal example for reproducing dynamic import errors when using native ESM modules in Jest.

## To reproduce

Clear the Jest cache:

```
$ npm run test:clearcache
```

Run the test suite two times:

```
$ npm run test
$ npm run test
```

The test should fail on the second run with the following error:

```
      1 | export default async function echo(importPath) {
    > 2 |   let { default: echoFn } = await import(`./${importPath}.js`);
        |                                               ^
      3 | 
      4 |   return echoFn();
      5 | }

      at invariant (node_modules/jest-runtime/build/index.js:1866:11)
      at echo (lib/index.js:2:47)
      at Object.<anonymous> (__tests__/hello.test.js:5:24)
```

For convenience sake, an *npm* script has been provided to quickly run through the above scenario:

```
$ npm run test:error
```
