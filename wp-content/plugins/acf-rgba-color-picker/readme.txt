=== ACF RGBA Color Picker ===
Contributors: tmconnect
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=XMLKD8H84HXB4&lc=US&item_name=Donation%20for%20WordPress%20Plugins&no_note=0&cn=Add%20a%20message%3a&no_shipping=1&currency_code=EUR
Tags: acf, acfpro, advanced custom fields, color, color picker, rgba, rgba color picker 
Requires at least: 4.7
Tested up to: 4.9.5
Stable tag: 1.2.1
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A RGBA-Color-Picker field for Advanced Custom Fields

== Description ==

The RGBA Color Picker is a color picker that supports transparency colors in RGBA-Mode.

= Custom color palette =

The plugin offers the possibility to customize the color palette according to your own wishes. You can define your own custom color palette with the `acf/rgba_color_picker/palette` filter. In addition, you can define an individual color palette for each field in the field settings.

**New in version 1.2.0**

If there are a lot of colors for the color palette, the color fields are getting very tiny. To prevent this, the color fields are now displayed in several rows (with a maximum of 10 colors per row). So it is possible to define a lot of colors for the standard palette.

Furthermore, the color picker is now absolutely positioned and this does not shift other elements of the page every time the color picker is opened.

**This plugin works only with the [ACF PRO](https://www.advancedcustomfields.com/pro/) (version 5.5.0 or higher).**

= Localizations =
* English
* Deutsch


== Installation ==

1. Upload the `rgba_color_picker` folder to your `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Done!


== Custom color palette ==

Use the `acf/rgba_color_picker/palette` filter to create your own standard color palette for the color picker. Your custom standard color palette, just like the default color palette, can be overridden in the field settings for each field individually.

= Fixed color palette =
Put a code like this into your themes functions.php (you can use HEX or RGBA color values and can also mix them):

`<?php
function set_acf_rgba_color_picker_palette() {
	$palette = array(
		'#FFF',
		'#0018ff',
		'#00FF36',
		'rgba(255,168,0,0.7)'
	);

	return $palette;
}
add_filter('acf/rgba_color_picker/palette', 'set_acf_rgba_color_picker_palette');
?>`

= Dynamic color palette =
If you have an options page where you define some standard colors, create an array from this options like this:

`<?php
function set_acf_rgba_color_picker_palette() {
	// optional - add colors which are not set in the options page
	$palette = array(
		'#FFF',
		'#000'
	);

	if ( have_rows('YOUR_COLOR_REPEATER_FIELD', 'YOUR_OPTIONS_PAGE') ) {
		while( have_rows('YOUR_COLOR_REPEATER_FIELD', 'YOUR_OPTIONS_PAGE') ) { the_row();
			$palette[] = get_sub_field('YOUR_COLOR_FIELD');
		}
	}

	return $palette;
}
add_filter('acf/rgba_color_picker/palette', 'set_acf_rgba_color_picker_palette');
?>`

This is an example using a repeater field to set the colors; if you store your colors within a string, convert this string into an array.

= Hiding color palette =
If you dont want to show a color palette set the return value of the filter to false:

`<?php
add_filter('acf/rgba_color_picker/palette', '__return_false');
?>`

Setting the color palette to false will disable and hide the "Color Palette" and "Hide Color Palette" options in the field settings.


== Screenshots ==

1. The RGBA Color Picker field settings
2. The RGBA Color Picker with the standard color palette
3. The RGBA Color Picker with a custom color palette


== Changelog ==

= v1.2.1 =
* Minor bug fixes

= v1.2.0 =
* Correct use of standard color
* Changed position of color picker
* Better handling for color palettes

= v1.1.0 =
* Changed class name to prevent future conflicts with ACF

= v1.0.3 =
* Updated wp-color-picker-alpha to V2.0.0 of compatibility for WP 4.9

= v1.0.2 =
* Optimized init of acf/rgba_color_picker/palette filter

= v1.0.1 =
* Fixed display error on Chrome and Firefox on Windows

= v1.0.0 =
* Initial release of this plugin, tested and stable.