# `tlh_accordion()`

## Description

Set of panels that can be opened and closed. Styling for accordions can be found in `src/scss/modules/_accordion.scss`, and the JavaScript can be found in `src/scripts/components/accordion.js`. Use `tlh_get_accordion()` to return a string for use in PHP instead of printing it.

```php
function tlh_accordion( $data, $allow_multiple = true, $first_open = false, $class = false )
```

## Parameters

- **\$data** \| _array (Required)_ An array of arrays containing the title and content to be used for each accordion section. Each panel array should have a `title` and `content` key.
- **\$allow_multiple** \| _boolean (Optional)_ Whether multiple panels should be able to be expanded at once. Defaults to true.
- **\$first_open** \| _boolean (Optional)_ Whether the first panel should be expanded by default. Defaults to false.
- **\$class** \| _string (Optional)_ Additional CSS classes to be added. Defaults to none.

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

### Create accordion from custom array

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

### Create accordion from field

```php
<div class="faqs">
<?php $faqs = get_field('page_faq_list'); ?>
<?php tlh_accordion( $faqs, false, true ); ?>
</div>
```
