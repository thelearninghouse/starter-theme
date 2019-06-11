# `tlh_responsive_bg_style()`

## Description

Generates a `<style>` tag to add a background image with different sizes for the specified selector. If you're making a static responsive background (like a section on the homepage or other template) that won't be loaded from a field or featured image, use the `responsivebackground()` Sass mixin in the appropriate file and place your images in `src/images`. Place the function directly after the div that will use the background image.

```php
function tlh_responsive_bg_style( $selector, $field_name = NULL, $sub_field = false )
```

## Parameters

- **\$selector** \| _string (Required)_ Class name of the element to apply the generated styles to.
- **\$field_name** \| _string (Optional)_ Custom Field to get the image from. If not supplied, the function will look for a featured image by default.
- **\$sub_field** \| _boolean (Optional)_ Set to true if your image is a subfield in a repeater.

## Changelog

<table>
	<thead>
		<tr>
			<th>Version</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1.0.0</td>
			<td>Introduced.</td>
		</tr>
	</tbody>
</table>

## Examples

### Pulls from featured image

```php
<header class="hero-header">An example hero section.</header>
<?php tlh_responsive_bg_style('hero-header'); ?>
```

### Pulls from ACF Image Field

```php
<section class="program-careers">A section that needs a cool background.</section>
<?php tlh_responsive_bg_style('program-careers', 'program_career_bg'); ?>
```

### Gets image from sub field in a repeater field

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

### Adds a unique background image to each post in the Loop

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
