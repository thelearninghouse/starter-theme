<?php
/**
 * TLH functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tlh-starter-theme
 */

// LOAD BONES CORE (if you remove this, the theme will break)
require_once( 'library/bones.php' );

function tlh_setup() {

  // include custom post type registration
  require_once( 'library/custom-post-types.php' );
  // launching operation cleanup
  add_action( 'init', 'tlh_head_cleanup' );
  // A better title
  add_filter( 'wp_title', 'rw_title', 10, 3 );
  // remove WP version from RSS
  add_filter( 'the_generator', 'tlh_rss_version' );
  // remove pesky injected css for recent comments widget
  add_filter( 'wp_head', 'tlh_remove_wp_widget_recent_comments_style', 1 );
  // clean up comment styles in the head
  add_action( 'wp_head', 'tlh_remove_recent_comments_style', 1 );
  // clean up gallery output in wp
  add_filter( 'gallery_style', 'tlh_gallery_style' );
  // enqueue base scripts and styles
  add_action( 'wp_enqueue_scripts', 'tlh_scripts_and_styles', 999 );
  // launching this stuff after theme setup
  tlh_theme_support();
  // adding sidebars to Wordpress (these are created in functions.php)
  add_action( 'widgets_init', 'tlh_register_sidebars' );
  // cleaning up random code around images
  add_filter( 'the_content', 'tlh_filter_ptags_on_images' );
  // cleaning up excerpt
  add_filter( 'excerpt_more', 'tlh_excerpt_more' );

} /* end tlh_setup */

// let's get this party started
add_action( 'after_setup_theme', 'tlh_setup' );


/************* OEMBED SIZE OPTIONS *************/

if ( ! isset( $content_width ) ) {
	$content_width = 680;
}

/************* ACTIVE SIDEBARS ********************/

// Sidebars & Widgetizes Areas
function tlh_register_sidebars() {
	register_sidebar(array(
		'id' => 'sidebar1',
		'name' => __( 'Sidebar 1' ),
		'description' => __( 'The first (primary) sidebar.' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="widgettitle">',
		'after_title' => '</h4>',
	));
} // don't remove this bracket!


/************* COMMENT LAYOUT *********************/

// Comment Layout
function tlh_comments( $comment, $args, $depth ) {
   $GLOBALS['comment'] = $comment; ?>
  <div id="comment-<?php comment_ID(); ?>" <?php comment_class('cf'); ?>>
    <article  class="cf">
      <header class="comment-author vcard">
        <?php // custom gravatar call ?>
        <?php
          // create variable
          $bgauthemail = get_comment_author_email();
        ?>
        <img data-gravatar="http://www.gravatar.com/avatar/<?php echo md5( $bgauthemail ); ?>?s=40" class="load-gravatar avatar avatar-48 photo" height="40" width="40" src="<?php echo get_template_directory_uri(); ?>/library/images/nothing.gif" />
        <?php // end custom gravatar call ?>
        <?php printf(__( '<cite class="fn">%1$s</cite> %2$s' ), get_comment_author_link(), edit_comment_link(__( '(Edit)' ),'  ','') ) ?>
        <time datetime="<?php echo comment_time('Y-m-j'); ?>"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>"><?php comment_time(__( 'F jS, Y' )); ?> </a></time>

      </header>
      <?php if ($comment->comment_approved == '0') : ?>
        <div class="alert alert-info">
          <p><?php _e( 'Your comment is awaiting moderation.' ) ?></p>
        </div>
      <?php endif; ?>
      <section class="comment_content cf">
        <?php comment_text() ?>
      </section>
      <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
    </article>
  <?php // </li> is added by WordPress automatically ?>
<?php
} // don't remove this bracket!

/************* SOCIAL SHARING *********************/

function social_sharing_buttons($content) {
    if(is_singular( 'post' )){

        $socialContent = null;

        // Get current page URL
        $socialURL = urlencode(get_permalink());

        // Get current page title
        $socialTitle = str_replace( ' ', '%20', get_the_title());

        // Construct sharing URL without using any script
        $twitterURL = 'https://twitter.com/intent/tweet?text='.$socialTitle.'&amp;url='.$socialURL.'&amp;via=starter';
        $facebookURL = 'https://www.facebook.com/sharer/sharer.php?u='.$socialURL;
        $linkedInURL = 'https://www.linkedin.com/shareArticle?mini=true&url='.$socialURL.'&amp;title='.$socialTitle;

        // Add sharing button at the end of page/page content
        $socialContent.= '<div class="social-sharing">';
        $socialContent .= '<span class="social-sharing__label">Share on</span>';
        $socialContent .= '<a class="social-link social-link_twitter" href="'. $twitterURL .'" target="_blank"><span class="social-link__icon"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="18" height="18"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path></svg></span><span class="social-link__label">Twitter</span></a>';
        $socialContent.= '<a class="social-link social-link_facebook" href="'.$facebookURL.'" target="_blank"><span class="social-link__icon"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="18" height="18"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path></svg></span><span class="social-link__label">Facebook</span></a>';
        $socialContent .= '<a class="social-link social-link_linkedin" href="'.$linkedInURL.'" target="_blank"><span class="social-link__icon"><svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="18" height="18"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path></svg></span><span class="social-link__label">LinkedIn</span></a>';
        $socialContent .= '</div>';

        return $socialContent.$content;
    }else{
        // if not a post/page then don't include sharing button
        return $content;
    }
};
add_filter( 'the_content', 'social_sharing_buttons');



/************* JQUERY CONFLICT FIX *********************/

function enqueue_jquery_version() {
  wp_deregister_script( 'jquery' );
  wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', false, false, false );
  wp_enqueue_script( 'jquery' );
}
add_action('wp_enqueue_scripts', 'enqueue_jquery_version');

/************* CUSTOM TEMPLATE TAGS *********************/
require_once( 'library/template-tags.php' );


/* DON'T DELETE THIS CLOSING TAG */ ?>
