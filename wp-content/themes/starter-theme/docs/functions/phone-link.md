# `tlh_phone_link()`

## Description

Gets a meta value and wraps it in an `<a>` tag with a properly escaped tel href attribute. Use `tlh_get_phone_link()` to return a string for use in PHP instead of printing it.

```php
function tlh_phone_link( $class = '', $custom_label = false, $field = 'school_phone', $options = true )
```

## Parameters

- **\$class** \| _string (Optional)_ CSS class for styling. Defaults to none.
- **\$custom_label** \| _string (Optional)_ Label to replace the default phone number. Defaults to false.
- **\$field** \| _string (Optional)_ Meta field key to get phone number from. Defaults to 'school_phone'.
- **\$options** \| _string (Optional)_ Whether to get the phone number from the options page or current post. Defaults to true.

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
tlh_phone_link();
// output: <a href="tel:1234567890">(123) 456-7890</a>

$phone_label = tlh_get_icon( 'phone', 'inline' ) . ' Call Us';
tlh_phone_link( 'button', $phone_label, 'customer_service' );
// output: <a class="button" href="tel:1112223344"><span class="icon inline"></span> Call Us</a>
```
