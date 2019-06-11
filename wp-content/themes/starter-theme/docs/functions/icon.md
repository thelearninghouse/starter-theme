# `tlh_icon()`

## Description

A simple wrapper to cleanly insert inline SVG icons with additional CSS classes if needed. Be sure to add the SVGs that you need into `src/images/icons`. Styling for icons can be found in `src/scss/modules/_icon.scss`. Use `tlh_get_icon()` to return a string for use in PHP instead of printing it.

```php
function tlh_icon( $name, $class = NULL, $title = NULL )
```

## Parameters

- **\$name** \| _string (Required)_ Name of icon to include, not including the file extension.
- **\$class** \| _string (Optional)_ Space separated list of additional classes to add to the generated `<i>` element.
- **\$title** \| _string (Optional)_ Title attribute that will be added to the `<i>`

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

## Example

```php
<a href="tel:1234567890"><?php echo tlh_icon('phone', 'large', 'Call us at'); ?> 123-456-7890</a>
```
