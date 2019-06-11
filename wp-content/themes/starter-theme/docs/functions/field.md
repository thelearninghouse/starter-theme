# `tlh_field()`

## Description

Simple wrapper around ACF's get_field that outputs a default value if the specified field is empty for the current post. By default it will look for values stored in the options with the same key, but it will also accept a custom default when calling the function. If no value is found for the post AND no default is found, a warning will be displayed to logged in users. Use `tlh_get_field()` to return a string for use in PHP instead of printing it.

```php
function tlh_field( $field_name, $default_value = false )
```

## Parameters

- **\$field_name** \| _string (Required)_ meta key to get the value from.
- **\$default_value** \| _mixed (Optional)_ If this argument is provided, it will be used instead of the value from the options. The type should match what is returned from the specified field. Defaults to false.

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
