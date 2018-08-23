<?php // check if the repeater field has rows of data
if( have_rows('school_benefits_list') ): ?>
  <section class="schoolBenefits" aria-labelledby="schoolBenefitsHeading">
		<div class="wrapLg">
    	<h2 class="schoolBenefits__title" id="schoolBenefitsHeading"><?php the_field('school_benefits_list_title'); ?></h2>
	    <ul class="benefitsList">
	   	<?php // loop through the rows of data
	      while ( have_rows('school_benefits_list') ) : the_row(); ?>
	        <li>
						<div class="benefitsList__item">
	          	<?php $benefit_icon = get_sub_field('icon');

							if ( $benefit_icon['mime_type'] == 'image/svg+xml' ) { ?>
								<div class="benefitsList__icon benefitsList__icon--svg" role="presentation" aria-hidden="true">
									<?php preg_match('/\/\/.*\/wp-content\/uploads(.*)/', $benefit_icon['url'], $benefit_icon_url_array);
									$benefit_icon_url = wp_upload_dir()['basedir'] . $benefit_icon_url_array[1];
									include($benefit_icon_url); ?>
								</div>
							<?php } else { ?>
								<img class="benefitsList__icon" src="<?php echo $benefit_icon['url']; ?>" alt="" role="presentation" aria-hidden="true">
							<?php } ?>
							<div class="benefitsList__copy">
			          <h3 class="benefitsList__title"><?php the_sub_field('title'); ?></h3>
			          <?php the_sub_field('description'); ?>
							</div>
						</div>
	        </li>
	      <?php endwhile; ?>
	    </ul>
		</div>
  </section>
<?php endif; ?>
