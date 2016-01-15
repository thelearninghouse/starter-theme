# Learning House Wordpress Starter Theme

The core of this theme is based on [Bones theme](https://github.com/eddiemachado/bones)

## Basic Usage

### Install Grunt

Install grunt by navigating to the theme's `library` folder and running `npm install`

### Watch Files

To start watching files use `grunt` from the `library` folder. This will run browsersync and then watch. You can now open any browser and when you make changes the browser(s) will inject the proper files automatically.

### Grid Usage

This theme uses [susy](http://susy.oddbird.net/)

Out of the box this is a 12 column grid on screen sizes 768px and up.

To include the column mixin use `@include span(10);`

To push use `@include push(2);`

To pull use `@include pull(2);`


## Plugins

This core wordpress install comes equipped with a couple handy plugins that we seem to use very often

### Advanced Custom Fields Pro

There isn't much this plugin can't do including but not limited to: repeater fields, flexible content and global theme options. Documentation can be found [here](http://www.advancedcustomfields.com/pro/)

### Parallax Gravity

This is the plugin that we use to create our landing pages. We use this because it has a great builder feature and also uses repeatable modules to make creating new pages super easy. Check out the documentation for more information [here](http://sakuraplugins.com/docs/gravity_documentation/)

### RICG Responsive Images

This is new to the starter theme as of August 2015. We are implementing this to take advantage of responsive images.

### EWWW Image Optimizer

This plugin optimizes images on upload and allows us to provide faster sites.

### Title and Nofollow for links

This was requested by the inbound team to get the title field back on links.

### Yoast SEO

Yoast is required on all of our sites for SEO optimization.

## Resources

### Style Guide
/style-guide

### Sassdoc
/sassdoc
