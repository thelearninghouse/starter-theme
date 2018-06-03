---
sidebar: auto
---
# FAQ

## Adding a style or script

Use the `mix` function. and then the path of the asset. For Example:

```php
<?php require_once(get_template_directory() . '/mix-helpers.php'); ?>

<link rel="stylesheet" href="<?php echo mix('/css/lp-style.css'); ?>">
```

If you need to enqueue it:

```php
require_once(get_template_directory() . '/mix-helpers.php');

wp_register_script( 'tlh-js',  mix('/js/your-script.js'), array( '' ), '', true );
```
