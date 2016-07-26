# Learning House Wordpress Starter Theme

The core of this theme is based on [Bones theme](https://github.com/eddiemachado/bones)

## Basic Usage

#### Install Grunt or Gulp (package-gulp.json provided)

Install by navigating to the theme's `library` folder and running `npm install`

## Critical CSS

This theme utilizes inline styling in the head of the document for faster load times. If it seems like your changes are not working there is a chance that these inline styles are overwriting your changes. To update run `grunt deploy` and it will update the critical css files accordingly.

#### Watch Files

To start watching files use `grunt` or `gulp` from the `library` folder. This will run browsersync and then watch. You can now open any browser and when you make changes the browser(s) will inject the proper files automatically.

#### Grid Usage

This theme uses Susy Grid. Documentation can be found [here](http://susydocs.oddbird.net/en/latest/)

## Menus

There are three menus setup for this theme by default:

1. MAIN MENU - Main Navigation
2. SECONDARY MENU - Secondary navigation at the top of header with contact information
3. FOOTER MENU - Footer Navigation

## Plugins

This core wordpress install comes equipped with a couple handy plugins that we seem to use very often

#### Advanced Custom Fields Pro

There isn't much this plugin can't do including but not limited to: repeater fields, flexible content and global theme options. Documentation can be found [here](http://www.advancedcustomfields.com/pro/)

#### RICG Responsive Images

This is new to the starter theme as of August 2015. We are implementing this to take advantage of responsive images.

#### Title and Nofollow for links

This was requested by the inbound team to get the title field back on links.

#### Yoast SEO

Yoast is required on all of our sites for SEO optimization.

## Resources

#### Style Guide

For common patterns and styles please use this resource. This was mostly created for the inbound when they create blog post. [View Style Guide](http://tlhstarter.wpengine.com/style-guide)

#### Sassdoc

This documentation is for the front-end team for easy access to variable, mixins, functions, etc. [View SassDoc](http://tlhstarter.wpengine.com/sassdoc)
