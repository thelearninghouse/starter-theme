---
sidebar: auto
---

# Important Files

This is an overview of the most important things to know to understand how to work with our theme.

> This will be separated into multiple files eventually.

## Important/Special Files

### `mix-helpers.php`

Helps with various things...

### `webpack.mix.js`

File for `laravel-mix` configuration

### `theme.config.js`

Set variables that can be used throughout theme

### `.env.sample`

Set local variables such as your dev url

### `deploy.docs.sh`

A script that handles pushing docs to `gh-pages` branch of repo

## External Libraries/Components

For more complex but often needed functionality such as carousels, sticky elements, degree filtering, included plugins/libraries are already included and ready to be used.

### [Glide](https://github.com/glidejs/glide)

Sliders and carousels

### [Stickybits](https://github.com/dollarshaveclub/stickybits)

Handles fixed positioning of elements

### [MixItUp](https://github.com/patrickkunka/mixitup)

Filtering & sorting

### [Vue.js](https://github.com/vuejs/vue)

Does many magical things

## Internal Libraries/Components

### Accordions

Panels that can be opened to reveal additional information, with additional options to only allow one open at a time and have the first one open by default. See [tlh_accordion()](/theme-features/#accordion) for more information and how to use it in templates.

### Menu/Submenu

Designed to work with WordPress-generated menus, with support for submenus.

### Smooth Scroll

Enable smooth scrolling for anchors. By default adding a class of `smooth-scroll` to an anchor tag enables the effect, but can be changed in `theme.config.js` if needed.

### SocialSharing Widget
