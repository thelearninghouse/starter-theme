<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

if ( is_home() ) {
	$heading_field    = get_field( 'hero_heading', get_option( 'page_for_posts' ) );
	$subheading_field = get_field( 'hero_subheading', get_option( 'page_for_posts' ) );
} else {
	$heading_field    = get_field( 'hero_heading' );
	$subheading_field = get_field( 'hero_subheading' );
}

$context                  = Timber::get_context();
$context['posts']         = new Timber\PostQuery();
$context['page_title']    = $heading_field ?: get_the_title();
$context['page_subtitle'] = $subheading_field;
Timber::render( 'index.twig', $context );
