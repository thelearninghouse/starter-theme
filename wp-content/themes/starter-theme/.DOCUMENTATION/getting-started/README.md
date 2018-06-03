---
sidebar: auto
---

# Getting Started

## Development

### Dev: Option 1
```bash
npm run dev
```

### Dev: Option 2
```bash
npm run hot
```

<br>

::: tip For Better Development Experience use:
`npm run hot`
:::



## Building For Production

```bash
npm run build
```

## Directory Structure

All commands such as running the dev environment and building for production are ran from root level of the theme. **_( This is where `package.json` lives. )_**

### Source files

Source assets are in the `src` directory

### Production/Build Files

Production files are inside `public` directory

### Theme Config

Use `theme.config.js` to set the directory name of the theme at `directoryName`

### Env Config

1. Take `.env.sample` and change the file name to to `.env`.
2. Set `DEV_URL` to your local development URL

## Our Tooling

Laravel-Mix is used for handling all aspects of running a development environment and building for production

> Laravel-Mix is a wrapper around Webpack, which means it uses Webpack for running the dev environment and building for production but provides an easy-to-use API to configure your project's settings

The configuration file for Laravel-Mix is `webpack.mix.js` and can be found in our theme's root directory
