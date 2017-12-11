<?php
$color_1 = get_field('hero_image', 'options'); ?>

<style>
  h1, h2, h3, h4, h5, h6 {
    font-family: <?php echo $headings_font['value']; ?>;
  }
  p, ul, ol, li {
    font-family: <?php echo $body_font['value']; ?>;
  }
  <?php // Get responsive hero background image
  $hero_image = get_field('hero_image'); ?>
  @media screen and (max-width: 767px) {
    #hero {
      background-image: url('<?php echo $hero_image['sizes']['medium_large']; ?>');
    }
  }
  @media screen and (min-width: 768px) {
    #hero {
      background-image: url('<?php echo $hero_image['url']; ?>');
    }
  }
  #form {
    background-color: <?php get_field('form_bg') == '' ? the_field('color_1', 'options') : the_field('form_bg'); ?>;
  }
  #value-props .value-props-container .value-prop {
    background-color: <?php the_field('vp_bgcolor'); ?>;
  }
</style>
