# `tlh_next_start_date()`

## Description

Prints the start date for the next closest upcoming semester. Use `tlh_get_next_start_date()` to return a string for use in PHP instead of printing it.

```php
function tlh_next_start_date( $date_format = 'F j' )
```

## Parameters

- **\$date_format** \| _string (Optional)_ String format of the date that's returned. Refer to [PHP's official manual on the date function](https://secure.php.net/manual/en/function.date.php) for the possible components that can be used.

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
<strong>Next start date:</strong> <?php echo tlh_next_start_date(); ?>

<strong>Next start date:</strong> <?php echo tlh_next_start_date('F jS, Y'); ?>
```
