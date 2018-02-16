A boilerplate project based on [parcel bundler](https://github.com/parcel-bundler/parcel).

The parcel bundler should be fairly recent:

```
yarn global add parcel-bundler
```

```
parcel --version
1.6.1
```

# Project

Install dependencies:

```
yarn
```

Run parcel dev server:

```
yarn start
```

Open http://localhost:1234, and edit source files in src for hot-reload.

For styling, edit `src/index.css`.

Edit the `src/index.html` to customize the HTML template.

# Node JS

Aside from frontend, you can also write NodeJS scripts in TypeScript. Put your scripts in [src/scripts](src/scripts), and compile by running:

```
yarn run ts-build
```

The scripts will be compiled to `lib/scripts`. Run with node:

```
node lib/scripts/hello.js
```

To automatically rebuild, run:

```
yarn run ts-watch
```
