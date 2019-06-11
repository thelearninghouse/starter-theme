# `tlh_social_share_buttons()`

## Description

Generates share buttons for a post. Also includes a function that appends it to the end of single blog post content automatically. Use `tlh_get_social_share_buttons()` to return a string for use in PHP instead of printing it.

```php
function tlh_social_share_buttons( $post_id = null )
```

## Parameters

- **\$post_id** \| _integer (Optional)_ post ID to get information from. Defaults to current post.

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
// Show share buttons for current post
tlh_social_share_buttons();

// Show a list of posts and share buttons for each
foreach ($related_posts as $related_post) {
	the_title( $related_post->ID );
	tlh_social_share_buttons( $related_post->ID );
}
```
