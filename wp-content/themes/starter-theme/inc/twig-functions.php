<?php
/**
 * Twig functions for this theme
 *
 * @package starter-theme
 */

add_filter(
	'timber/twig',
	function( \Twig_Environment $twig ) {

		$twig->addFunction( new Timber\Twig_Function( 'mix', 'mix' ) );
		$twig->addFunction( new Timber\Twig_Function( 'wp_image', 'wp_get_attachment_image' ) );
		$twig->addFunction( new Timber\Twig_Function( 'byline', 'tlh_get_byline' ) );
		$twig->addFunction( new Timber\Twig_Function( 'icon', 'tlh_get_icon' ) );
		$twig->addFunction( new Timber\Twig_Function( 'next_start_date', 'tlh_get_next_start_date' ) );
		$twig->addFunction( new Timber\Twig_Function( 'phone_link', 'tlh_get_phone_link' ) );

		return $twig;
	}
);
