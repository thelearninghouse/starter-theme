# `tlh_byline()`

## Description

Prints a span containing the author, date, and list of categories for the current post. Use `tlh_get_byline()` to return a string for use in PHP instead of printing it.

```php
function tlh_byline();
```

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

```php
<div class="post">
	<h1><?php the_title(); ?>
	<?php tlh_byline(); ?>
	<?php the_content(); ?>
</div>
```
