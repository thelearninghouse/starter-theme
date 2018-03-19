<?php
/*
Template Name: Thank You
*/
get_header(); ?>

	<?php get_template_part( 'template-parts/hero_title' ); ?>

	<div class="content">

		<div class="wrap">

				<main id="content" class="main-content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

					<div class="thank-you-content">
         		<h2>Next Steps</h2>
           	<p>Now that you’ve requested more information, here are a few things to keep an eye out for:</p>
           	<ol>
             	<li><span>A phone call in the next 24 hours:</span> One of our friendly enrollment counselors will reach out to you and help you begin your journey toward an St. Ambrose education. It will come from an 800 number, so don’t let it go to voice mail.</li>
             	<li><span>An information packet:</span> Check your email for our ePacket with more information about our degree programs. Be sure to check your spam folder in case it lands there.</li>
             	<li><span>Have a plan:</span> Our enrollment counselors want to help you find the program that’s best for you. Be ready to answer some simple questions about your educational goals and plans, and we’ll guide you through the process.</li>
           	</ol>
         	</div>

         	<div class="thank-you-cta-container">
         		<a class="thank-you-cta thank-you-cta--apply" href="/" target="_blank">
           		<span class="thank-you-cta__heading h3">Ready to Apply?</span>
	           	<span>You don't have to wait for us. Apply now!</span>
	         	</a>
	         	<a class="thank-you-cta thank-you-cta--call" href="tel:<?php the_field('school_phone', 'option'); ?>">
	           	<span class="thank-you-cta__heading h3">Ready to Talk?</span>
	           	<span>More questions? Give us a call at <?php the_field('school_phone', 'option'); ?>, and we’ll be glad to answer them.</span>
	         	</a>
         	</div>

				</main>


		</div>

	</div>

<?php get_footer(); ?>
