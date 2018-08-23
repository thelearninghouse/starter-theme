---
sidebar: auto
---

# Naming Conventions

## SCSS
### Files
All lowercase with hyphens instead of spaces.

#### Examples
* `mag-style.scss`
* `_page-title.scss`
* `_cta-blog.scss`

### Classes
Class names are organized using the [BEM](http://getbem.com/introduction/) naming convention. Use camel casing for all parts of class names.

#### Examples
* `.wrapLg`
* `.pageTitle`
* `.pageTitle--image`
* `.header__startDate`
* `.card`
* `.card__action--highlight`

### Variables
All variables and maps should use camel case. If sizes are needed, stick to two letter abbreviations when possible.

#### Examples
* `$textColor = color(offBlack);`
* `$heroSm = 'mountain-background-sm.jpg';`
* `$wrap: ( sm: 700px, md: 940px, lg: 1400px );`

## PHP
### Custom Templates
These should be prefixed with the site they are used on with two underscores followed by a descriptive name with hyphens instead of spaces.

#### Examples
* `olc__home.php`
* `olc__academic-calendar.php`
* `lp__brand.php`
* `mag__degrees.php`

### Template Parts + Other
Following the WordPress standard, any template parts and other included files should be all lowercase with hyphens instead of spaces.

#### Examples
* `page-title.php`
* `get-started-form.php`
* `benefits-list.php`
* `custom-post-types.php`

### Functions & Variables
Following the WordPress standard, any functions and variables should be all lowercase with underscores instead of spaces.

#### Examples
* `tlh_accordion()`
* `tlh_get_next_start_date()`
* `$accordion_data`
* `$start_date_format_str`

## Custom Fields
Custom field names should be all lowercase and underscores instead of spaces. If certain fields are always used together, consider adding a common prefix. Refer to ACF's [Best Practices Article](https://www.advancedcustomfields.com/blog/best-practices-designing-custom-fields/) for more useful information.

#### Examples
* `form_heading`
* `form_code`

## JS

### Files
These should be all lowercase with hyphens instead of spaces.

#### Examples
* `smooth-scroll.js`
* `main-navigation.js`
