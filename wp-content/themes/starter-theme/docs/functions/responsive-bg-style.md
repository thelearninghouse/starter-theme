# `tlh_responsive_bg_style()`

## Description

Generates a `<style>` tag to add a background image with different sizes for the specified selector. If you're making a static responsive background (like a section on the homepage or other template) that won't be loaded from a field or featured image, use the `responsivebackground()` Sass mixin in the appropriate file and place your images in `src/images`.

```php
function tlh_responsive_bg_style( $selector = '.background', $image_id = 0 )
```

## Parameters

- **\$selector** \| _string (Optional)_ CSS selector of the element to apply the generated styles to. Defaults to `.background`.
- **\$image_id** \| _integer (Optional)_ Image ID of the image in the gallery to use. Defaults to 0.

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
			<td>1.1.0</td>
			<td>Refactored to remove extraneous logic that tried to cover a lot of scenarios around fields/subfields (see pre-1.1.0 example).
				<ul>
					<li>Previously only accepted a simple CSS class name, but now uses a full CSS selector.</li>
					<li>Previously accepted an ACF field name with optional subfield flag. This has been removed and now accepts an image ID instead.</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>1.0.0</td>
			<td>Introduced.</td>
		</tr>
	</tbody>
</table>

## Examples

### Add the featured image to each post in the Loop

```php
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		<?php $blog_class_name = 'background-' . get_the_ID(); ?>
		<div class="featured-image <?php echo $blog_class_name; ?>"></div>
		<?php tlh_responsive_bg_style( '.'.$blog_class_name, get_post_thumbnail_id( get_the_ID() ) ); ?>
	</article>
<?php endwhile; ?><?php endif; ?>
```

### Pull from ACF Image Field

Assuming the field `program_career_bg` is set up to return the image id only.

```php
<section class="program-careers">A section that needs a cool background.</section>

<!-- field is set up to return image id -->
<?php tlh_responsive_bg_style( '.program-careers', get_field( 'program_career_bg' ) ); ?>

<!-- field is set up to return image array -->
<?php
$image = get_field( 'program_career_bg' );
tlh_responsive_bg_style( '.program-careers', $image['ID'] );
?>
```

---

### Pre-1.1.0: Pull from featured image

```php
<header class="hero-header">An example hero section.</header>
<?php tlh_responsive_bg_style( 'hero-header' ); ?>
```

### Pre-1.1.0: Pull from ACF Image Field

```php
<section class="program-careers">A section that needs a cool background.</section>
<?php tlh_responsive_bg_style( 'program-careers', 'program_career_bg' ); ?>
```

### Pre-1.1.0: Get image from sub field in a repeater field

```php
<ul class="read-more__actions">
	<?php while ( have_rows( 'page_read_more_items' ) ) : the_row(); ?>
		<li class="action-<?php echo get_row_index(); ?>">
			<h3><?php the_sub_field( 'title' ); ?></h3>
			<?php the_sub_field( 'summary' ); ?>
			<a class="button button--secondary button--wide" href="<?php the_sub_field( 'link' ); ?>"><?php the_sub_field( 'button_label' ); ?></a>
		</li>
		<?php tlh_responsive_bg_style( 'action-' . get_row_index(), 'image', true ); ?>
	<?php endwhile; ?>
</ul>
```
