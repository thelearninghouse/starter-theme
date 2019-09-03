# Starter Theme

## Basic Info

- Theme Name: starter-theme
- Local Site URL: starter.loc
- Landing Pages: Custom Post Type
- Start Date Location: Custom Post Type

## Quick Start

1. Under _Appearance > Themes_, activate the new theme.
2. Under _Tools > Install Plugins_, make sure that the required plugins are installed and activated.
3. Under _Custom Fields_, sync all available fields to set up the included starting fields [(see ACF docs for more info)](https://www.advancedcustomfields.com/resources/synchronized-json/).
4. If required, pull down the latest live database with _Tools > Migrate DB Pro_ [(see docs for more info)](https://deliciousbrains.com/wp-migrate-db-pro/docs/getting-started/).
5. Make sure to update `directoryName` in `theme.config.js` to the directory name of the theme.
6. Run the following from the theme root:

```bash
# Install dependencies
npm install

# Create a file called .env and edit it so that DEV_URL to your local dev URL
cp .env.sample .env

# Development
npm run dev

# Production
npm run build
```

## Required Plugins

This theme uses TGM Plugin Activation to help install and activate plugins essential to the theme's functionality. If additional plugins are required for core theme features, make sure to add it to `wp-plugins.json` in the theme root. Refer to [TGMPA's documentation](http://tgmpluginactivation.com/configuration/#h-plugin-parameters) for all available options when requiring plugins.

## Resources

- [Starter Theme Docs](https://thelearninghouse.github.io/starter-theme/)
- [Advanced Custom Fields Docs](https://www.advancedcustomfields.com/resources/)
- [WordPress Developer Reference](https://developer.wordpress.org/reference/)

## Directory Structure

All commands are ran from root level of theme. This is where `package.json` lives. Configuration for development and building for production is handled by `webpack.mix.js`

### Source files

Source assets are in the `src` directory

### Production/Build Files

Production files are inside `public` directory
