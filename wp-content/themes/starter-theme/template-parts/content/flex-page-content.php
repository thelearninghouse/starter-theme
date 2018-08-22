
<?php
// check if the flexible content field has rows of data
if( have_rows('main_content') ):
     // loop through the rows of data
    while ( have_rows('main_content') ) : the_row();
        if( get_row_layout() == 'wysiwyg' ) {
          the_sub_field('content');
        } elseif( get_row_layout() == 'accordion' ) {
          $accordion_content = get_sub_field('accordion_content');
          tlh_accordion($accordion_content, get_sub_field('accordion_allow_multiple'), get_sub_field('accordion_first_open'));
				} elseif( get_row_layout() == 'columns' ) {
          $columns_content = get_sub_field('columns');
					if($columns_content) { ?>
						<div class="row">
							<?php foreach($columns_content as $column) { ?>
								<div class="col"><?php echo $column['content']; ?></div>
							<?php } ?>
						</div>
					<?php }
				} elseif ( get_row_layout() == 'online_degrees_list' ) {

					$olc_url = get_field('olc_url', 'options');

					// Output options
					$list_columns = get_sub_field('list_columns');
					$organize_by_taxonomy = get_sub_field('organize_by_taxonomy');
					$taxonomy_display_style = get_sub_field('taxonomy_display_style');

					// Group by taxonomy?
					if ( $organize_by_taxonomy ) {
						$degree_levels = json_decode(file_get_contents($olc_url . '/wp-json/wp/v2/degree_level'));
						if ($degree_levels) {

							// Master list of levels + lists
							$degree_levels_list = array();

							foreach ($degree_levels as $degree_level) {

								// Get degrees for this level and generate list
								$degree_level_degrees = json_decode(file_get_contents($degree_level->_links->{'wp:post_type'}[0]->href . '&order=asc&orderby=title'));
								if ($degree_level_degrees) {
									$degree_sublist_markup = '<ul class="fancy-list';
									$degree_sublist_markup .= $list_columns ? ' columns-2">' : '">';
									foreach ($degree_level_degrees as $degree) {
										$degree_sublist_markup .= '<li>' . $degree->title->rendered . '</li>';
									}
									$degree_sublist_markup .= '</ul>';
								}

								// Add to master list
								$degree_levels_list[] = array(
									'title' => $degree_level->name,
									'content' => $degree_sublist_markup
								);
							}

							// Output
							echo '<div class="mag-degrees-list">';
							// Group by taxonomy in accordion or list?
							if ( $taxonomy_display_style ) {
								tlh_accordion( $degree_levels_list );
							} else {
								foreach ( $degree_levels_list as $level ) {
									echo '<h3>' . $level['title'] . '</h3>';
									echo $level['content'];
								}
							}
							echo '</div>';
						} else {
							echo '<p>No degrees found.</p>';
						}
					} else {
						$degrees = json_decode(file_get_contents($olc_url . '/wp-json/wp/v2/degrees?orderby=title&order=asc'));
						if ( $degrees ) {
							echo '<ul class="fancy-list';
							echo $list_columns ? ' columns-2">' : '">';
							foreach ($degrees as $degree) {
								echo '<li>' . $degree->title->rendered . '</li>';
							}
							echo '</ul>';
						}
					}
				}
    endwhile;
else :
    // no layouts found
endif; ?>
