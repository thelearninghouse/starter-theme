# Learning House Wordpress Starter Theme

This repo features the entire WordPress install including core files.

The core of this theme is based on [Bones theme](https://github.com/eddiemachado/bones).

## Basic Usage

### Install Grunt

Install by navigating to the theme's `library` folder and running `npm install`

### Critical CSS

This theme utilizes inline styling in the head of the document for faster load times. If it seems like your changes are not working there is a chance that these inline styles are overwriting your changes. To update run `grunt deploy` and it will update the critical css files accordingly.

### Watch Files

To start watching files use `grunt` from the `library` folder. This will run browsersync and then watch. You can now open any browser and when you make changes the browser(s) will inject the proper files automatically.

### Grid Usage

This theme uses Susy Grid. Documentation can be found [here](http://susydocs.oddbird.net/en/latest/)

**Basics**

To include columns `@include span(4)`
To include wrapper `@include container(1440px)`

## Menus

There are three menus setup for this theme by default:

1. **MAIN MENU** - Main Navigation
2. **SECONDARY MENU** - Secondary navigation at the top of header with contact information
3. **FOOTER MENU** - Footer Navigation

## Theme File Structure

``` bash
starter-theme/
├── library
|    ├── css  //
|    |   ├── minified  // Contains all minified versions of stylesheets
|    |   ├── prefixed  // Contains style sheets that have been through Autoprefixer
|    |   ├── home-critical.css // Critical CSS for homepage
|    |   ├── ie.css  // IE Stylesheet
|    |   ├── interior-critical.css  // Critical CSS for interior pages
|    |   ├── lp-critical.css  // Critical CSS for Landing Pages
|    |   ├── lp-style.css  // Main stylesheet for Landing Pages
|    |   ├── style.css  // Main Stylesheet
|    ├── images  // Images relative to the theme
|    ├── js  //
|    |   ├── build // Production Files
|    |   |   ├── production.js // Concatenated JavaScript file
|    |   |   └── production.min.js
|    |   ├── libs // For javascript libraries i.e. Modernizr
|    |   └──  scripts.js // Main javascript file
|    ├── plugins  // Zip files of plugins that are critical to the theme
|    ├── scss
|    |    ├── breakpoints
|    |    |    ├── _481up.scss // Applies to all screens above 480px wide
|    |    |    ├── _768up.scss // Applies to all screens above 768px wide
|    |    |    └── _base.scss // Base stylesheet for mobile and up
|    |    ├── modules
|    |    |    ├── _buttons.scss // Contains styling that applies to buttons
|    |    |    ├── _forms.scss // Form styling
|    |    |    ├── _progress.scss // Styling for the progress bar on blog posts
|    |    |    └── _tables.scss // Table styling
|    |    ├── partials
|    |    |    ├── _grid.scss // Setting up SUSY and grid styling
|    |    |    ├── _mixins.scss // All mixins
|    |    |    ├── _normalize.scss // Normalize
|    |    |    ├── _print.scss // Base print styles
|    |    |    ├── _typography.scss // Typography styling
|    |    |    └── _variables.scss // Variables (breakpoints, colors, etc.)
|    |    ├── ie.scss // IE stylesheet
|    |    ├── lp-style.scss // Landing Page stylesheet
|    |    └── style.scss // Main stylesheet, this gets compiled into ==> style.css
|    ├── .sassdocrc // Settings for SassDoc
|    ├── bones.php  // Functions and features for the theme
|    ├── bower.json  // Bower setup and dependencies
|    ├── class-tgm-plugin-activation.php  // Plugin that allows us to declare plugins the theme requires
|    ├── custom-post-types.php  // Where we register our custom post types for Online Degrees and Landing Pages
|    ├── Gruntfile.js  // Grunt setup file
|    └── package.json  // Grunt details and dependencies
├── 404.php  // Template for 404 page
├── archive-degrees.php  // Archive template for Online Degrees
├── archive.php  // Archive template for blog posts
├── favicon.png  // Favicon
├── footer.php // Footer template
├── front-page.php  // Homepage template
├── functions.php  // Controls features and functionality custom to the theme
├── header.php  // Header template
├── index.php  // Blog index template
├── page.php	  // Page template
├── screenshot.png  // Image used for the theme
├── sidebar.php  // Sidebar template
├── single-degrees.php  // Online Degree page template
├── single.php  // Single blog post template
└── style.css  // Stylesheet used for theme information
```

## Resources

### Editor config

A `.editorconfig` file is included to maintain consistent coding styles between different editors and IDEs. To find a plugin for your editor please visit [Editor Config Plugins](http://editorconfig.org/#download) and install. We are using the standard config that is recommended by wordpress.

### Style Guide

For common patterns and styles please use this resource. This was mostly created for the inbound when they create blog post. This style guide should be customized for each client according to their branding and OLC design. [View Style Guide](http://tlhstarter.wpengine.com/style-guide)

### Sassdoc

This documentation is for the front-end team for easy access to variable, mixins, functions, etc. [View SassDoc](http://tlhstarter.wpengine.com/sassdoc)

To update sassdoc run `grunt deploy` or `grunt sassdo`
