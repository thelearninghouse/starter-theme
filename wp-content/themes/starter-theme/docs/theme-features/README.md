# Theme Features

## Built-in WordPress Features

This theme tries to take advantage of native WordPress behavior wherever possible.

### Menus

By default there are four menus registered, three of which are for OLCs and the final one just for MAG site templates.

- Secondary Menu
- Main Menu
- Footer Links
- MAG Menu

Menus are registered in `inc/theme-support.php`.

### Custom Post Types

Custom post types are set up in `inc/custom-post-types.php`.

## Maintenance Mode

Maintenance Mode is a simple admin page feature to indicate that a site is actively being worked on either locally, on staging, on live, or some combination and to check before making changes in the database that might get overwritten. The code to add this to the admin is located in `inc/maintenance-mode.php`.

**Make sure to enable it on both live and staging sites when needed and update the [Master Project Status](https://docs.google.com/spreadsheets/d/1mNxjH_2hFouJVJ_iSnYfGuba7PKRkFvcNp4KV73npE8/edit#gid=662048833) sheet accordingly.**

## Limit Image Upload Size

In order to maintain performant page speed, this theme limits image upload file size to 300 KB and dimensions to 1600px width. To change these limits, modify `tlh_max_image_size` in `/inc/setup.php`.

## Templates

Basic templates are included for the homepage, blog, custom post types, internal pages and special page layouts. Custom page templates are located in `page-templates` and are prefixed with the site that they are used on (such as `olc__` for OLC templates). To create other custom templates where needed, refer to [WP Hierarchy](https://wphierarchy.com/) to see a cheatsheet of WordPress's naming convention for template files.

### Template Parts

Some sections may be repeated on several pages, like an about section for the school or a CTA ribbon. These should be stored in `template-parts` and can be called with [get_template_part()](https://developer.wordpress.org/reference/functions/get_template_part/) or simply `include()`.

_Example section included on a page:_

```php
get_template_part( 'template-parts/about_facts' );
```

## Editor Styles

To make use of the built-in style selector in TinyMCE, find the commented block in `inc/setup.php` containing `tlh_mce_before_init_insert_formats()` and uncomment the whole block. Add your formats as arrays to `$style_formats`, referring to [the WordPress TinyMCE docs](https://codex.wordpress.org/TinyMCE_Custom_Styles) as needed.

For further details, refer to [TinyMCE's documentation](https://www.tiny.cloud/docs/configure/content-formatting/#style_formats)

::: tip Note
To make sure the style preview shows correctly in the admin editor, include any necessary partials and mixins in `src/styles/admin-style.scss`.
:::

## Shortcodes

### [privacy]

For use on Privacy Policy pages, gets the standard privacy policy from a text document on the main Learning House website.

### [cta]

For use in blog posts to insert a custom Call to Action box in the post content. Pulls information from custom fields attached to the post.
