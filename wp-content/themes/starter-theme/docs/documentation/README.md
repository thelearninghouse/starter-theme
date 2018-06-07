---
sidebar: auto
---

# Theme Documentation

The documentation is built with [VuePress](https://github.com/vuejs/vuepress).

It's a Vue.js Static Site generator specifically built for documentation. While it's powered by Vue.js, no writing of Vue code is necessary.

<!-- ## Usage
Install it globally by running the following: -->

## Adding New Files
1. Create a new folder inside `docs` which will be the slug for the new page
2. Create a `README.md` file inside that new folder and write your documentation in markdown
3. Add the new route to the `nav` option inside `docs/.vuepress/config.js`

## Setup
```bash
npm install -g vuepress
```

## Dev
Dev environment for the Docs

```bash
npm run docs:dev
```

## Build
Builds the docs prior to deploying

```bash
npm run docs:build
```

## Deploying
Pushes the changes to the `gh-pages` branch of our repo

```bash
npm run docs:deploy
```
