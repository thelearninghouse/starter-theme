# Learning House Wordpress Starter Theme

The core of this theme is based on [Bones theme](https://github.com/eddiemachado/bones)

## Basic Usage

### Install Grunt

Install grunt by navigating to the theme's `library` folder and type `npm install --save-dev`

To start watching files use `grunt watch` from the `library` folder

### Grid Usage

This theme uses [semantic.gs](https://github.com/tylertate/semantic.gs)

Out of the box this is a 10 column grid on screen sizes 768px and up.

To include the column mixin use `@include column(10);`

To push use `@include push(2);`

To pull use `@include pull(2);`


## Plugins

This core wordpress install comes equipped with a couple handy plugins that we seem to use very often

### Advanced Custom Fields Pro

There isn't much this plugin can't do. Documentation can be found [here](http://www.advancedcustomfields.com/pro/)

### Widget Context

A super handy plugin that allows you to specify where widgets get displayed. Instead of multiple sidebars this makes it easy to show different content on different pages.

