# Asdougl Components

Mostly a test project for setting up a component library on NPM.

## Install

```sh
npm i @asdougl/components
```

### Tailwind CSS Projects

Include in tailwind purge to ensure component styles are added, e.g.

```js
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/\\@asdougl/components/dist/**/*.js',
  ],
  ...everythingElse,
}
```

### Non-Tailwind CSS Projects

This implementation is **not recommended** however you can try and implement this. You'll need to include the compiled tailwind classes in your entry point (`index.js`, `index.ts`, `renderer.js`, etc.), as such:

```js
import '@asdougl/components/dist/index.css'
```

Please note this does **not** include any of the tailwind css base class, so there is no guarantee this will work with your environment. The classes may also **conflict** with your existing styles, especially if you use a library like bootstrap.
