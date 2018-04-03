# Development

```bash
npm run dev
```

# Building For Production

```bash
npm run build
```

# Directory Structure

All commands are ran from root level of them. This is where `package.json` lives.

Configuration for development and building for production is handled by `webpack.mix.js`

## Source files

Source assets are in the `src` directory

## Production/Build Files

Production files are inside `public` directory

## Theme Config

Use `theme.config.js` to set the directory name of the theme at `directoryName`

## Env Config

1. Take `.env.sample` and change the file name to to `.env`.
2. Set `DEV_URL` to your local development URL
