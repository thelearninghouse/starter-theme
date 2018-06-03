# Theme Features

> **Note:** We're currently taking inventory and cleaning up some stuff from Bones. This page will be updated as it's reorganized.
## WordPress Features
WIP
### Menu
### Sidebar
### Custom Post Types
### Maintenance Mode
Maintenance Mode is a simple feature to indicate that a site is actively being worked on either locally, on staging, on live, or some combination and to check before making changes. Make sure to enable it on the live and staging sites when needed, and make a note of it in the Web Team Google sheet. The code to add this to the admin is located in `inc/maintenance-mode.php`.

## Templates
The theme includes templates for the blog, online degrees, and landing pages. To create other custom templates where needed, refer to [HP Hierarchy](https://wphierarchy.com/) to see a cheatsheet of WordPress's naming convention for template files.

For MAG sites, several page templates are included by default that correspond to standard pages:
- `front-page.php` - Home page
- `page-online-degrees.php` - Online Degrees
- `page-campus-degrees.php` - Campus Degrees
- `page.php` - Default page template, used for the Privacy Policy and Thank You page
- `404.php` - 404 page template, used when a page cannot be found

### Template Parts
Some sections may be repeated on several pages, like an about section for the school or a CTA ribbon. These should be stored in `template-parts` and can be called with [get_template_part()](https://developer.wordpress.org/reference/functions/get_template_part/) or simply `include()`.

_Example section included on a page:_
``` php
get_template_part( 'template-parts/about_facts' );
```

## Shortcodes

### [privacy]
For use on Privacy Policy pages, gets the standard privacy policy from a text document on the main Learning House website.

### [cta]
For use in blog posts to insert a custom Call to Action box in the post content. Pulls information from custom fields attached to the post.

## Components & Helper Functions
Functions that generate standard HTML in templates. Located in `inc/components` and `inc/template-tags.php`
***

### Accordion
> **Note:** I'm updating this to also accept the name of a repeater field and get the title and content more automatically than it does now.

Set of panels that can be opened and closed. Styling for accordions can be found in `library/scss/modules/accordion.scss`, and the JavaScript can be found in `library/js/components/accordion.js`.
``` php
function tlh_accordion( $data, $allow_multiple = false, $first_open = false, $class = false )
```
#### Parameters
- **$data** | _array (Required)_ An array of arrays containing the title and content to be used for each accordion section. Each panel array should have a `title` and `content` key.
- **$allow_multiple** | _boolean (Optional)_ Whether multiple panels should be able to be expanded at once.
- **$first_open** | _boolean (Optional)_ Whether the first panel should be expanded by default.
- **$class** | _string (Optional)_ Additional CSS classes to be added.

#### Examples
``` html
<!-- Create accordion from custom array -->
<div class="faqs">
<?php $faqs = [['title' => 'panel 1 title', 'content' => 'panel 1 content'], [...], [...]]; ?>
<?php tlh_accordion( $faqs, false, false ); ?>
</div>

<!-- Create accordion from field -->
<div class="faqs">
<?php $faqs = get_field('page_faq_list'); ?>
<?php tlh_accordion( $faqs, false, false ); ?>
</div>
```

***

### Icons
A simple wrapper to cleanly insert inline SVG icons with additional CSS classes if needed. Be sure to add the SVGs that you need into `library/images/icons`. Styling for icons can be found in `library/scss/modules/icon.scss`
``` php
function tlh_icon( $name, $class = NULL, $title = NULL )
```
#### Parameters
- **$name** | _string (Required)_ Name of icon to include, not including the file extension.
- **$class** | _string (Optional)_ Space separated list of additional classes to add to the generated `<i>` element.
- **$title** | _string (Optional)_ Title attribute that will be added to the `<i>`

#### Example
``` html
<a href="tel:1234567890"><?php tlh_icon('phone', 'large', 'Call us at'); ?> 123-456-7890</a>
```

***

### Responsive Background Image
Generates a `<style>` tag to add a background image with different sizes for the specified selector. If you're making a static responsive background (like a section on the homepage or other template) that won't be loaded from a field or featured image, use the `responsivebackground()` Sass mixin in the appropriate file and place your images in `library/images`.
``` php
function tlh_responsive_bg_style( $selector, $field_name = NULL, $sub_field = false )
```
#### Parameters
- **$selector** | _string (Required)_ CSS class that your background will be applied to.
- **$field_name** | _string (Optional)_ ACF field name that the image is stored in. If no field is specified, the image will be taken from the featured image attached to the post.
- **$sub_field** | _boolean (Optional)_ Whether the field name passed is a sub field. Defaults to false.

#### Examples
``` html
<!-- Pulls from featured image -->
<header class="hero-header">An example hero section.</header>
<?php tlh_responsive_bg_style('hero-header'); ?>

<!-- Pulls from ACF image field -->
<section class="program-careers">A section that needs a cool background.</section>
<?php tlh_responsive_bg_style('program-careers', 'program_career_bg'); ?>
```

``` html
<!-- Gets image from sub field for each item in a repeater field,
using ACF's get_row_index() to generate unique class names for each row -->
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

``` html
<!-- Adds a unique background image to each post in the Loop -->
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

		<?php $blog_class_name = 'background-' . get_the_ID(); ?>
		<div class="featured-image <?php echo $blog_class_name; ?>"></div>
		<?php tlh_responsive_bg_style( $blog_class_name ); ?>
	</article>
<?php endwhile; ?><?php endif; ?>
```

***

### Get Next Date (Post Type)
Gets the next closest date in the future for the specified type from the dates post type. The output format of the date is specified in ACF, which uses a PHP date format string. Refer to [the official docs](https://secure.php.net/manual/en/function.date.php) for a cheatsheet.
``` php
function tlh_get_next_date( $date_type = 'start-date' )
```
#### Parameters
- **$date_type** | _string (Optional)_ Slug of the `date_type` taxonomy term. Defaults to 'start-date'.

#### Examples
``` html
<!-- Get next start date -->
<strong>Next start date:</strong> <?php echo tlh_get_next_date(); ?>

<!-- Get next drop day -->
<p class="alert">Be sure to drop any classes before <?php echo tlh_get_next_date( 'drop-day' ); ?>!</p>
```
