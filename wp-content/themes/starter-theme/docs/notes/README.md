For polyfill case if can't don't want to include `babel-polyfill`:

```php
wp_register_script( 'polyfill', 'https://cdn.polyfill.io/v2/polyfill.min.js', array(), '', false );
wp_enqueue_script( 'polyfill' );
```
