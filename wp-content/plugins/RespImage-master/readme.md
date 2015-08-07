# RespImage - WordPress Plugin

Responsive image solution using picturefill.js by [Scott Jehl][1].

## How It Works
The plugin extends each posted image with a data-responsive attribute. A WordPress "the_content" filter replaced such an image with the picturefill.js markup. After deactivating the plugin or removing the data-responsive attribute, all images should appear as normal.

In the plugin options you can add your image sizes and up to five srcset sizes attributes. The first srcset size attribute acts as the default. Inside the data-responsive image attribute they can be selected, by adding a "/" and the corresponding index number from the options page.

**Example**

Loads the default srcset sizes attribute

    <img data-responsive="11" (...)> or
    <img data-responsive="11/1" (...)>

Loads the srcset sizes attribute with the id of 2

    <img data-responsive="11/2" (...)>


## Additional
To regenerate older images after setting your breakpoints, you can use the plugin [Regenerate Thumbnails][3]. Be careful and make first a backup of your images. For me, it works fine.

Plugin Page: [RespImage - WordPress Plugin][2]

  [1]: http://scottjehl.github.io/picturefill/
  [2]: http://elf02.de/2014/07/14/respimage-wordpress-plugin/
  [3]: http://wordpress.org/plugins/regenerate-thumbnails/
