# Learning House Wordpress Starter Theme

This repo features the entire WordPress install including core files.

The core of this theme is based on [Bones theme](https://github.com/eddiemachado/bones).

## Basic Usage

### Install Grunt or Gulp (package-gulp.json provided)

Install by navigating to the theme's `library` folder and running `npm install`

### Critical CSS

This theme utilizes inline styling in the head of the document for faster load times. If it seems like your changes are not working there is a chance that these inline styles are overwriting your changes. To update run `grunt deploy` and it will update the critical css files accordingly.

### Watch Files

To start watching files use `grunt` or `gulp` from the `library` folder. This will run browsersync and then watch. You can now open any browser and when you make changes the browser(s) will inject the proper files automatically.

### Grid Usage

This theme uses Susy Grid. Documentation can be found [here](http://susydocs.oddbird.net/en/latest/)

## Menus

There are three menus setup for this theme by default:

1. MAIN MENU - Main Navigation
2. SECONDARY MENU - Secondary navigation at the top of header with contact information
3. FOOTER MENU - Footer Navigation

## Theme File Structure

``` bash
starter-theme/
├── _library
|    ├── css  //
|       ├── minified  // Contains all minified versions of stylesheets
|       ├── prefixed  // Contains style sheets that have been through Autoprefixer
|       ├── home-critical.css // Critical CSS for homepage
|       ├── ie.css  // IE Stylesheet
|       ├── ie.css.map  // Source map for debugging
|       ├── interior-critical.css  // Critical CSS for interior pages
|       ├── lp-critical.css  // Critical CSS for Landing Pages
|       ├── lp-style.css  // Main stylesheet for Landing Pages
|       ├── lp-style.css.map	  // Source map for debugging
|       ├── style.css  // Main Stylesheet
|       └── style.css.map  // Source map for debugging
|    ├── images  // Images relative to the theme
|    ├── js  //
         ├── libs // For javascript libraries
        └── scripts.js // Main javascript file
        └── scripts.js // Main javascript file
|    ├── plugins  // Zip files of plugins that are critical to the theme
|    ├── scss //
|    ├── tasks  //
|    ├── .sassdocrc
|    ├── Gruntfile.js  //
|    ├── bones.php  //
|    ├── bower.json  //
|    ├── class-tgm-plugin-activation.php  //
|    ├── custom-post-types.php  //
|    ├── gulpfile.js  //
|    ├── maintenance.php  //
|    ├── package-gulp.json  //
|    └── package.json  //
├── 404.php  //
├── archive-degrees.php  //
├── archive.php  //
├── comments.php  //
├── favicon.png  //
├── footer.php //
├── front-page.php  //
├── functions.php  //
├── header.php  //
├── index.php  //
├── page.php	  //
├── screenshot.png  //
├── sidebar.php  //
├── single-degrees.php  //
├── single.php  //
└── style.css  //
```

## Resources

### Style Guide

For common patterns and styles please use this resource. This was mostly created for the inbound when they create blog post. [View Style Guide](http://tlhstarter.wpengine.com/style-guide)

### Sassdoc

This documentation is for the front-end team for easy access to variable, mixins, functions, etc. [View SassDoc](http://tlhstarter.wpengine.com/sassdoc)

To update sassdoc run `grunt deploy` or `grunt sassdo`
