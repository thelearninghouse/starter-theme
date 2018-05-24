<?php
  function setFilterOrder($term1, $term2) {
      if ($term1->display_position == $term2->display_position) {
          return 0;
      } elseif ($term1->display_position < $term2->display_position) {
          return -1;
      } else {
          return 1;
      }
  }

  function buildDegreeAreas($filterArray) {
    $degreeFilterArray = array();

    foreach ($filterArray as $filter) {
      if(!$filter->parent) {
        $degreeFilterArray[] = $filter;
      }
    }

    foreach ( $degreeFilterArray as $term ) {
      $term_id = $term->term_id;
      $taxonomy_name = $term->taxonomy;
      $term_children = get_terms( $term_id, $taxonomy_name );
      $term_children = get_terms([
          'parent' => $term_id,
          'taxonomy' => $taxonomy_name,
          'hide_empty' => false,
      ]);
      $sub_areas = $term_children ? $term_children : array();
      $acf_term_id = 'term_' . $term_id;
      $term->sub_areas = $sub_areas;

    }
    return $degreeFilterArray;
  }

  // get all direct decendants of the $parent
  function buildDegressArray($degrees) {
    foreach ( $degrees as $post ) {
      $array = array();
      $degreeAreas = get_the_terms( $post->ID, 'degree_area') ? get_the_terms( $post->ID, 'degree_area') : $array;
      $degreeLevels = get_the_terms( $post->ID, 'degree_level') ? get_the_terms( $post->ID, 'degree_level') : $array;
      $programSummary = get_field('program_summary', $post->ID) ? get_field('program_summary', $post->ID) : '';

      $post->degree_areas = $degreeAreas;
      $post->degree_levels = $degreeLevels;
      $post->summary = $programSummary;
      $post->url = get_permalink( $post->ID );

    }
    return $degrees;
  }


  function buildDegreeLevels($degreeLevels) {

    foreach ( $degreeLevels as $term ) {
      $array = array();
      $term_id = $term->term_id;
      $acf_term_id = 'term_' . $term_id;
      $displayPosition = get_term_meta( $term_id, 'tax_position', true ) ? get_term_meta( $term_id, 'tax_position', true ) : '0';
      $term->display_position = $displayPosition;
    }

    usort($degreeLevels, 'setFilterOrder');
    return $degreeLevels;
  }


  function setupDegreeFilteringData() {
    $allDegreesArgs = array(
       'posts_per_page' => -1,
       'orderby' => 'title',
       'order'   => 'ASC',
       'post_type' => 'degrees',
       'post_status' => 'publish',
    );


    $allDegrees = get_posts( $allDegreesArgs );
    $degree_areas = get_field('degree_area_filters', 'option') ? get_field('degree_area_filters', 'option') : array();
    $degree_levels = get_field('degree_level_filters', 'option') ? get_field('degree_level_filters', 'option') : array();

    $data = array(
      'degrees' => buildDegressArray($allDegrees),
      'degreeAreas' => buildDegreeAreas($degree_areas),
      'degreeLevels' => buildDegreeLevels($degree_levels)
    );

    return $data;
  }

  function buildDegreeFilteringSettingsPage() {

    if( function_exists('acf_add_options_page') ) {
      acf_add_options_sub_page(array(
        'page_title' 	=> 'Degree Filtering Plugin Settings',
        'menu_title'	=> 'Degree Filtering Plugin',
        'parent_slug'	=> 'theme-settings',
      ));
    }

    if( function_exists('acf_add_local_field_group') ) {
      acf_add_local_field_group(array(
        'key' => 'group_5ab4073782723',
        'title' => 'Degree Filtering Plugin Settings',
        'fields' => array(
          array(
            'key' => 'field_5ab407560ce91',
            'label' => 'Degree Area Filters',
            'name' => 'degree_area_filters',
            'type' => 'taxonomy',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '',
              'class' => '',
              'id' => '',
            ),
            'taxonomy' => 'degree_area',
            'field_type' => 'checkbox',
            'allow_null' => 0,
            'add_term' => 1,
            'save_terms' => 0,
            'load_terms' => 0,
            'return_format' => 'object',
            'multiple' => 0,
          ),
          array(
            'key' => 'field_5ab407adcc248',
            'label' => 'Degree Level Filters',
            'name' => 'degree_level_filters',
            'type' => 'taxonomy',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
              'width' => '',
              'class' => '',
              'id' => '',
            ),
            'taxonomy' => 'degree_level',
            'field_type' => 'checkbox',
            'allow_null' => 0,
            'add_term' => 0,
            'save_terms' => 0,
            'load_terms' => 0,
            'return_format' => 'object',
            'multiple' => 0,
          ),
        ),
        'location' => array(
          array(
            array(
              'param' => 'options_page',
              'operator' => '==',
              'value' => 'acf-options-degree-filtering-plugin',
            ),
          ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => 1,
        'description' => '',
      ));
    }
  }

  buildDegreeFilteringSettingsPage();
?>
