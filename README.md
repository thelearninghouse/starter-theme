# Learning House Wordpress Starter Theme

This is a base theme to speed up development of all marketing sites. It is designed to be duplicated and modified as needed to build a site branded for a particular school. Necessary plugins are bundled, as well as a configuration file for [Advanced Custom Fields](https://www.advancedcustomfields.com/) to set up standard fields to help organize information for the school and programs offered.

## Features

- Gulp task that compiles Sass, minifies JS, and live-updates the page with BrowserSync
- Pre-defined templates for standard pages (like MAG sites)
- Custom post types for Programs, Landing Pages, and Launch Landing Pages
- General purpose accessible components like accordions and icons

## Getting Started

1. Create a new repository for the new theme and clone this theme into it.
2. Set up a new local development environment and clone the new repository into it.
3. Install dependencies by navigating to the theme's `library` folder and running `npm install`.
4. Edit `gulpfile.js` and change the proxy in the BrowserSync section to match the url you set up for your local development environment.
5. Run `gulp` from the `library` folder to start BrowserSync and watch for changes on source files.
6. Log in to the WP Admin.
7. Under _Appearance > Themes_, make sure that the correct theme is selected if you renamed the theme folder.
8. Under _Plugins_, make sure that the included plugins are activated.
9. Under _Custom Fields_, sync all available fields to set up the including starting fields [(see ACF docs for more info)](https://www.advancedcustomfields.com/resources/synchronized-json/).

## Theme File Structure

```bash
starter-theme/
├── acf-json // Contains acf field info json files
├── inc // Additional theme functionality
|    ├── components // Functions to build and create shortcodes for separate items
|    |   ├── accordion.php // Accordion Component
|    |   ├── cta.php // Blog Post CTA Component
|    |   ├── page-nav.php // Page Navigation Component
|    |   └── social-sharing.php // Social Sharing Component
|    ├── cleanup.php // Theme functionality from bones
|    ├── custom-post-types.php // Setting up custom post types
|    ├── enqueue-scripts.php // Enqueueing theme scripts
|    ├── maintenance-mode.php // Maintenance Alert Setup
|    ├── setup.php // Theme setup
|    ├── template-tages.php // custom php functions to generate html for templates
|    └── theme-support.php // Enable wordpress theme support
├── library
|    ├── css
|    ├── images  // Images relative to the theme
|    ├── js  //
|    |   ├── build // Production Files
|    |   ├── components // Modular JS files
|    |   |     ├── accordion.js
|    |   |     ├── mobile-nav.js
|    |   |     └── social-share-buttons.js
|    |   ├── vendor // Third Party scripts
|    |   |     ├── fixto.min.js // jQuery plugin for sticky positioning
|    |   |     ├── mixitiup.min.js // Filtering and sorting plugin
|    |   |     └── modaal.min.js // WCAG compliant modaal
|    |   └── scripts.js // Main javascript file
|    ├── scss
|    |    ├── base
|    |    |    ├── _mixins.scss // All mixins
|    |    |    └── _variables.scss // Variables (breakpoints, colors, etc.)
|    |    ├── generic
|    |    |    ├── _base.scss // general global element styles and resets
|    |    |    ├── _links.scss
|    |    |    ├── _tables.scss
|    |    |    ├── _typography.scss
|    |    ├── modules
|    |    |    ├── _accordion.scss // Styling for accordions
|    |    |    ├── _buttons.scss // Contains styling that applies to buttons
|    |    |    ├── _card.scss // Styling for cards
|    |    |    ├── _clearfix.scss // Clearfix class decleration
|    |    |    ├── _features.scss // Styling for the common list of icons with paragraphs
|    |    |    ├── _forms.scss // Form styling
|    |    |    ├── _icon.scss // Styling for inline svg icons
|    |    |    ├── _links.scss // Link Styling
|    |    |    ├── _media.scss // Styling for images, videos, etc.
|    |    |    ├── _progress.scss // Styling for the progress bar on blog posts
|    |    |    ├── _sidebar.scss // Sidebar Styling
|    |    |    ├── _social.scss // Social Sharing Styling
|    |    |    └── _tables.scss // Table styling
|    |    ├── pages
|    |    |    ├── _home.scss // Homepage Styling
|    |    |    ├── _layout.scss // Layout Styling
|    |    |    ├── _page.scss // Page Styling
|    |    |    └── _post.scss // Blog Post Styling
|    |    ├── critical-home.scss // Rendered in <style> tag on home page
|    |    ├── lp-style.scss // Landing Page stylesheet
|    |    ├── launch-lp-style.scss // Launch Landing Page stylesheet
|    |    └── style.scss // Main stylesheet, this gets compiled into ==> style.css
|    ├── gulpfile.js // gulp build file
|    └── package.json // npm details and dependencies
├── template-parts // Reusable sections (e.g. about, related posts, etc)
|    ├── hero_title.php
|    └── footer-scrips // Footer scripts for calling libraries on specific pages
|    |    └── online-degrees.php // Scripts for Online Degrees page (mixitup.js)
├── 404.php  // Template for 404 page
├── archive.php  // Archive template for blog posts
├── footer-lp.php // Landing Page Footer template
├── footer.php // Footer template
├── front-page.php  // Homepage template
├── functions.php  // Controls features and functionality custom to the theme
├── header-lp.php  // Landing Page Header template
├── header.php  // Header template
├── index.php  // Blog index template
├── page-faq.php  // FAQ page template
├── page-online-degrees.php  // Archive template for Online Degrees
├── page-get-started.php  // Get Started page template
├── page-thank-you.php  // Thank You page template
├── page.php      // Page template
├── screenshot.png  // Image used for the theme
├── sidebar.php  // Sidebar template
├── single-degrees.php  // Online Degree page template
├── single-landing-pages.php  // Landing Page page template
├── single-lauch-lps.php  // Launch LP's page template
├── single.php  // Single blog post template
└── style.css  // Stylesheet used for theme information
```

## Resources

- [Starter Theme Wiki](https://github.com/thelearninghouse/starter-theme/wiki)
- [Advanced Custom Fields Docs](https://www.advancedcustomfields.com/resources/)
- [WordPress Developer Reference](https://developer.wordpress.org/reference/)