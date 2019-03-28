<?php
/**
 * The 404 template file
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context               = Timber::get_context();
$context['page_title'] = 'Error 404: Page Not Found';

Timber::render( '404.twig', $context );
