<?php

$link = get_field( 'link' );

$context['url']    = $link['url'];
$context['label']  = $link['title'];
$context['target'] = $link['target'];
$context['class']  = $block['className'];

Timber::render( 'index.twig', $context );
