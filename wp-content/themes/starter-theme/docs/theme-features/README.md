---
sidebar: auto
---

# Theme Features

## Built-in WordPress Features

This theme tries to take advantage of native WordPress behavior wherever possible.

### Menus

By default there are four menus registered, three of which are for OLCs and the final one just for MAG site templates.

- Secondary Menu
- Main Menu
- Footer Links
- MAG Menu

Menus are registered in `inc/theme-support.php`.

### Custom Post Types

Custom post types are set up in `inc/custom-post-types.php`.

### Maintenance Mode

Maintenance Mode is a simple admin page feature to indicate that a site is actively being worked on either locally, on staging, on live, or some combination and to check before making changes in the database that might get overwritten. The code to add this to the admin is located in `inc/maintenance-mode.php`.

**Make sure to enable it on both live and staging sites when needed and update the [Master Project Status](https://docs.google.com/spreadsheets/d/1mNxjH_2hFouJVJ_iSnYfGuba7PKRkFvcNp4KV73npE8/edit#gid=662048833) sheet accordingly.**

## Templates

Basic templates are included for the homepage, blog, custom post types, internal pages and special page layouts. Custom page templates are located in `page-templates` and are prefixed with the site that they are used on (such as `olc__` for OLC templates). To create other custom templates where needed, refer to [WP Hierarchy](https://wphierarchy.com/) to see a cheatsheet of WordPress's naming convention for template files.

### Template Parts

Some sections may be repeated on several pages, like an about section for the school or a CTA ribbon. These should be stored in `template-parts` and can be called with [get_template_part()](https://developer.wordpress.org/reference/functions/get_template_part/) or simply `include()`.

_Example section included on a page:_

```php
get_template_part( 'template-parts/about_facts' );
```

## Shortcodes

### [privacy]

For use on Privacy Policy pages, gets the standard privacy policy from a text document on the main Learning House website.

### [cta]

For use in blog posts to insert a custom Call to Action box in the post content. Pulls information from custom fields attached to the post.

## Components & Helper Functions

Functions that generate standard HTML in templates. Located in `inc/components` and `inc/template-tags.php`

### Accordion

Set of panels that can be opened and closed. Styling for accordions can be found in `src/scss/modules/_accordion.scss`, and the JavaScript can be found in `src/scripts/components/accordion.js`. Use `tlh_get_accordion()` to return a string for use in PHP instead of printing it.

```php
function tlh_accordion( $data, $allow_multiple = true, $first_open = false, $class = false )
```

#### Parameters

- **$data** \| _array (Required)_ An array of arrays containing the title and content to be used for each accordion section. Each panel array should have a `title` and `content` key.
- **$allow_multiple** \| _boolean (Optional)_ Whether multiple panels should be able to be expanded at once. Defaults to true.
- **$first_open** \| _boolean (Optional)_ Whether the first panel should be expanded by default. Defaults to false.
- **$class** \| _string (Optional)_ Additional CSS classes to be added. Defaults to none.

#### Examples

##### Create accordion from custom array:

```php
<div class="faqs">
<?php $faqs = array(
	array(
		'title' => 'panel 1 title',
		'content' => 'panel 1 content'
	),
	array(
		'title' => 'panel 2 title',
		'content' => 'panel 2 content'
	)
); ?>
<?php tlh_accordion( $faqs ); ?>
</div>
```

##### Create accordion from field

```php
<div class="faqs">
<?php $faqs = get_field('page_faq_list'); ?>
<?php tlh_accordion( $faqs, false, true ); ?>
</div>
```

### Byline

Prints a span containing the author, date, and list of categories for the current post. Use `tlh_get_byline()` to return a string for use in PHP instead of printing it.

```php
function tlh_byline();
```

#### Examples

```php
<div class="post">
<h1><?php the_title(); ?>
<?php tlh_byline(); ?>
<?php the_content(); ?>
</div>
```

### Icons

A simple wrapper to cleanly insert inline SVG icons with additional CSS classes if needed. Be sure to add the SVGs that you need into `src/images/icons`. Styling for icons can be found in `src/scss/modules/_icon.scss`. Use `tlh_get_icon()` to return a string for use in PHP instead of printing it.

```php
function tlh_icon( $name, $class = NULL, $title = NULL )
```

#### Parameters

- **$name** \| _string (Required)_ Name of icon to include, not including the file extension.
- **$class** \| _string (Optional)_ Space separated list of additional classes to add to the generated `<i>` element.
- **$title** \| _string (Optional)_ Title attribute that will be added to the `<i>`

#### Example

```php
<a href="tel:1234567890"><?php echo tlh_icon('phone', 'large', 'Call us at'); ?> 123-456-7890</a>
```

### Next Start Date

Prints the start date for the next closest upcoming semester. Use `tlh_get_next_start_date()` to return a string for use in PHP instead of printing it.

```php
function tlh_next_start_date( $date_format = 'F j' )
```

#### Parameters

- **$date_format** \| _string (Optional)_ String format of the date that's returned. Refer to [PHP's official manual on the date function](https://secure.php.net/manual/en/function.date.php) for the possible components that can be used.

#### Examples

```php
<strong>Next start date:</strong> <?php echo tlh_next_start_date(); ?>

<strong>Next start date:</strong> <?php echo tlh_next_start_date('F jS, Y'); ?>
```

### Responsive Background Image

Generates a `<style>` tag to add a background image with different sizes for the specified selector. If you're making a static responsive background (like a section on the homepage or other template) that won't be loaded from a field or featured image, use the `responsivebackground()` Sass mixin in the appropriate file and place your images in `src/images`.

```php
function tlh_responsive_bg_style( $selector, $field_name = NULL, $sub_field = false )
```

#### Parameters

- **$selector** \| _string (Required)_ Class name of the element to apply the generated styles to.
- **$field_name** \| _string (Optional)_ Custom Field to get the image from. If not supplied, the function will look for a featured image by default.
- **$sub_field** \| _boolean (Optional)_ Set to true if your image is a subfield in a repeater.

#### Examples

##### Pulls from featured image

```php
<header class="hero-header">An example hero section.</header>
<?php tlh_responsive_bg_style('hero-header'); ?>
```

##### Pulls from ACF Image Field

```php
<section class="program-careers">A section that needs a cool background.</section>
<?php tlh_responsive_bg_style('program-careers', 'program_career_bg'); ?>
```

##### Gets image from sub field for each item in a repeater field, using ACF's get_row_index() to generate unique class names for each row

```php
<ul class="read-more__actions">
	<?php while ( have_rows('page_read_more_items') ) : the_row(); ?>
		<li class="action-<?php echo get_row_index(); ?>">
			<h3><?php the_sub_field('title'); ?></h3>
			<?php the_sub_field('summary'); ?>
			<a class="button button--secondary button--wide" href="<?php the_sub_field('link'); ?>"><?php the_sub_field('button_label'); ?></a>
		</li>
		<?php tlh_responsive_bg_style( 'action-' . get_row_index(), 'image', true ); ?>
	<?php endwhile; ?>
</ul>
```

##### Adds a unique background image to each post in the Loop

```php
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

		<?php $blog_class_name = 'background-' . get_the_ID(); ?>
		<div class="featured-image <?php echo $blog_class_name; ?>"></div>
		<?php tlh_responsive_bg_style( $blog_class_name ); ?>
	</article>
<?php endwhile; ?><?php endif; ?>
```

### Get Phone Link

Gets a meta value and wraps it in an `<a>` tag with a properly escaped tel href attribute. Use `tlh_get_phone_link()` to return a string for use in PHP instead of printing it.

```php
function tlh_phone_link( $class = '', $custom_label = false, $field = 'school_phone', $options = true )
```

#### Parameters

- **$class** \| _string (Optional)_ CSS class for styling. Defaults to none.
- **$custom_label** \| _string (Optional)_ Label to replace the default phone number. Defaults to false.
- **$field** \| _string (Optional)_ Meta field key to get phone number from. Defaults to 'school_phone'.
- **$options** \| _string (Optional)_ Whether to get the phone number from the options page or current post. Defaults to true.

#### Example

```php
tlh_phone_link();
// output: <a href="tel:1234567890">(123) 456-7890</a>

$phone_label = tlh_get_icon( 'phone', 'inline' ) . ' Call Us';
tlh_phone_link( 'button', $phone_label, 'customer_service' );
// output: <a class="button" href="tel:1112223344"><span class="icon inline"></span> Call Us</a>
```

### TLH Field

Simple wrapper around ACF's get_field that outputs a default value if the specified field is empty for the current post. By default it will look for values stored in the options with the same key, but it will also accept a custom default when calling the function. If no value is found for the post AND no default is found, a warning will be displayed to logged in users. Use `tlh_get_field()` to return a string for use in PHP instead of printing it.

```php
function tlh_field( $field_name, $default_value = false )
```

#### Parameters

- **$field_name** \| _string (Required)_ meta key to get the value from.
- **$default_value** \| _mixed (Optional)_ If this argument is provided, it will be used instead of the value from the options. The type should match what is returned from the specified field. Defaults to false.

#### Example

```php
// Get default form code from options if one is not specified for the current post
tlh_field( 'form_code' );

// if there's no custom start date attached to the program, use the next closest.
tlh_field( 'program_start_date', tlh_get_next_start_date() );

// Get list of values from options if one is not specified for the current post
tlh_field( 'values_list' );

// create custom value list for LP template instead of using sitewide default list from options
$default_values = array(
	array(
		'title' => 'Value 1',
		'description' => 'value 1 description'.
	),
	array(
		'title' => 'Value 2',
		'description' => 'value 2 description'.
	),
);
tlh_field( 'values_list', $default_values );
```
