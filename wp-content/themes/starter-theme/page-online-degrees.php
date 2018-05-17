<?php
/*
Template Name: Online Degrees
*/
get_header(); ?>

<style media="screen">
	button:focus {
		/* border: 7px solid #ff6f6f; */
	}
	button.mixitup-control-active {
	    background: darkred;
	}
</style>
<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
	<?php get_template_part( 'template-parts/hero_title' ); ?>

	<div id="vlh-filtering">
		<search-filter v-model="currentSearchFIlter"></search-filter>

		<degree-list>
      <degree-item v-for="degree in degrees" :item="degree" :key="degree.ID" />
    </degree-list>

	</div>

</main>

<?php get_footer(); ?>
