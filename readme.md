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
