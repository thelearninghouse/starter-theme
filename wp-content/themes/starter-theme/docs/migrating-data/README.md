---
sidebar: auto
---

# Migrating Data

When content needs to be moved, keep in mind all the connected bits that need to go along with it. That may include attached images, metadata, taxonomy terms, and related plugins. You may choose to exclude some of this, for example tiny images that will be updated/removed anyway, or extra fields that might not be needed. If all you need is to transfer all of a certain post type, the default WordPress XML export may be enough. If you need a more selective export though, you can generate a custom CSV with exactly what you need.

::: tip
This process can also be used on the same site as a way of efficiently bulk-editing many different fields and taxonomies on a lot of different posts at once.
:::

## Tools

- [WP All Export (free)](https://wordpress.org/plugins/wp-all-export/)
- Spreadsheet editor and/or plain text editor
- [Really Simple CSV Importer](https://github.com/hissy/rs-csv-importer)
- [Search and Replace](https://wordpress.org/plugins/search-and-replace/)
- [Import External Images](https://wordpress.org/plugins/import-external-images/)

## Quick Checklist

1.  Find posts, select fields and export CSV with WP All Export
2.  Edit CSV if needed, changing post data and fields
3.  _Optional:_ add function to enable external image import (for post_thumbnails)
4.  _Optional:_ do a dry run to see if everything will import correctly
5.  Run importer
6.  _Optional:_ Import external images in post content
7.  Make sure any missing plugins are installed
8.  _Optional:_ Run search and replace

## Detailed Steps

### Exporting

The free version of WP All Export allows you to input an array of WP_Query parameters to specify which posts you'd like to export. I'd recommend only exporting one post type at a time, since they may have differing fields. See [WP_Query on the WordPress Codex](https://codex.wordpress.org/Class_Reference/WP_Query#Parameters) for more details on what parameters are available.

#### Example Query Parameters

Get all blog posts in the "Careers" category:

```php
'post_type' => 'post',
'category_name' => 'careers'
```

Get all child pages of the specified pages:

```php
'post_type' => 'page',
'post_parent__in' => array( 21, 33, 130 )
```

Once you have the posts you want to export selected, continue to the next screen and select which fields you would like to include in your export. **If you are exporting posts to move to a new install, I recommend you do not include an `ID` column, so that they get automatically generated new IDs.**

### Editing

Once you have your generated csv of post data, you can use Excel or any other spreadsheet editor to change values as needed. Moving blog posts to a custom post type like Program Resources is as easy as making sure a `post_type` column exists and filling in the correct post type slug. See the [Github page for Really Simple CSV Importer](https://github.com/hissy/rs-csv-importer) for a list of all possible columns.

Example with post data, a taxonomy, and a custom field:

```csv
post_title,post_type,post_status,tax_degree_area,main_heading_field
"MBA","degrees","publish","Business","Start your MBA today."
```

If you are importing posts with images embedded in the main post content and are planning on moving the images over, image files with relative urls won't be able to be found. Make sure they are all pointing to the old site by opening your CSV in a text editor and running a find and replace on `src=""/wp-content` and replace with full url of the live site that you exported the posts from.

Be careful about modifying serialized data saved to custom fields, especially when running a find and replace. Serialized data is different data types that are all converted to a string, and if it is not updated properly it won't import correctly. WP Garage has a good [article discussing its use in WordPress](https://www.wpgarage.com/tips/data-portability-and-data-serialization-in-wordpress/). If you need to modify serialized data, add a function to modify the data as it's being processed for import or run a [search and replace](https://wordpress.org/plugins/search-and-replace/) after everything has been imported to make sure that it's updated correctly.

::: warning
If you are moving posts to a separate install as new posts, I recommend not including an ID column at all. If it has an ID column with values it will try to find that post and update it if it already exists, which could cause issues with other posts already on the site.
:::

### Importing

Once installed, Really Simple CSV Importer can be found under _Tools > Import_.

#### Images

If you are importing post thumbnails from external URLs (like the old site), you may need to temporarily enable unsafe urls since WordPress blocks external URLs by default. Add this to `functions.php` to enable. **Remove when you're done!**

```php
// Add for sideloading external images, and remove when not needed
function tlh_allow_unsafe_urls($args, $url) {
	$args['reject_unsafe_urls'] = false;
	return $args;
}
add_filter('http_request_args', 'tlh_allow_unsafe_urls', 20, 2 );
```

#### Modify Data on Import

If you need to process your data before it's saved to the database (like handling multiple values for a custom field or removing specific taxonomy terms), several filters are provided to modify post data, meta fields, and taxonomy data before it's saved to the database.

```php
<?php
/*
Plugin Name: Really Simple CSV - Divide Meta Fields with Comma (add-on)
*/
add_filter('really_simple_csv_importer_save_meta', function($meta, $post, $is_update) {
    foreach ($meta as $key => $value) {
        if (strpos($value, ',') !== false) {
            $_value = preg_split("/,+/", $value);
            $meta[$key] = $_value;
        }
    }
    return $meta;
}, 10, 3);
?>
```

```php
<?php
/*
Plugin Name: Really Simple CSV - Handle Serialized Data Fields (add-on)
*/
add_filter('really_simple_csv_importer_save_meta', function($meta, $post, $is_update) {
    foreach ($meta as $key => $value) {
			if ($key == 'field_name') {
				$meta[$key] = unserialize($value);
			}
    }
    return $meta;
}, 10, 3);
?>
```

In addition, it also has filters for modifying a post after it has been saved. this is useful if you need to [save images as attachments and put their new ID in an image field](https://gist.github.com/hissy/0973a6a9977129a6ebd0).

#### Dry Run

If you'd like to test that your data will import as you expect, you can install the [Debugger Add-on](https://gist.github.com/hissy/7175656), which will simply print the import data instead of saving it to the database.

### Final Steps

After a successful import you may need to import external images in post content. [Import External Images](https://wordpress.org/plugins/import-external-images/) is a great tool to automatically import them into the gallery and replace the urls. Just like with importing post thumbnails, you may need to [temporarily enable unsafe urls](#images).

Check to make sure any additional plugins are installed for any shortcodes in posts that are imported.

::: warning
Make sure to remove `tlh_allow_unsafe_urls()` when you're done importing images.
:::
