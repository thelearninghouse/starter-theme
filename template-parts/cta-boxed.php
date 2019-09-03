<?php
// check if the repeater field has rows of data
if( have_rows('mag_home_cards') ) { ?>
    <section class="banner-boxes" aria-label="Learn more about our degree programs">
        <div class="cta-boxed">
            <?php while ( have_rows('mag_home_cards') ) : the_row(); ?>
                <div class="cta-boxed__item">
                    <div class="cta-boxed__card">
                        <h2 class="h3 cta-boxed__card-title"><?php the_sub_field('title'); ?></h2>
                        <p class="cta-boxed__card-summary"><?php the_sub_field('summary'); ?></p>
                        <a class="cta-boxed__card-action button" href="<?php the_sub_field('button_link'); ?>"><?php the_sub_field('button_label'); ?></a>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    </section>
<?php } ?>
