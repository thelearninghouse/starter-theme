
<?php
// check if the flexible content field has rows of data
if( have_rows('main_content') ):
     // loop through the rows of data
    while ( have_rows('main_content') ) : the_row();
        if( get_row_layout() == 'wysiwyg' ):
          the_sub_field('content');
        elseif( get_row_layout() == 'accordion' ):
          $accordion_content = get_sub_field('accordion_content');
          tlh_accordion($accordion_content, get_sub_field('accordion_allow_multiple'), get_sub_field('accordion_first_open'));
				elseif( get_row_layout() == 'columns' ):
          $columns_content = get_sub_field('columns');
					if($columns_content) { ?>
						<div class="row">
							<?php foreach($columns_content as $column) { ?>
								<div class="col"><?php echo $column['content']; ?></div>
							<?php } ?>
						</div>
					<?php } ?>
        <?php endif;
    endwhile;
else :
    // no layouts found
endif; ?>
