<?php
/*
 * Plugin Name: TLH DataLayer
 * Plugin URI: http://www.learninghouse.com
 * Description: This plugin adds the TLH DataLayer
 * Version: 1.0.0
 * Author: The Learning House - Brent maggard
 * Author URI:
 * License: GPL2
 */

function tlh_add_basic_datalayer_data( $dataLayer ) {
	global $current_user, $wp_query;
	
	//User Data

	// Get the page Title
	$dataLayer["tlh-pageTitle"] = strip_tags( wp_title( "|", false, "right" ) );
	
	//GET LEADID ONLY FIRES ON /THANK-YOU/ pages
	$url = $_SERVER['REQUEST_URI']; 
	$urlString = parse_url($url, PHP_URL_PATH); 

	if ( preg_match( "/\/thank-you/", $urlString, $matches ) ) {
		if ( $_GET["lid"] ) { #GETS LEAD ID FROM URL LID VARIABLE
			$dataLayer["leadID"] = $_GET["lid"];
		} else { #IF LID NOT PRESENT SEE IF CAN FIND LEAD ID AT END OF URL (LEGACY)
			if ( preg_match( "/\d{5,100}/", $urlString, $lID ) ) {
			    $dataLayer["leadID"] = $lID[0];
			}
		}
	}
	
	//GET allocadiaID FROM URL TID
	if ( $_GET["tid"] ) {
		$dataLayer["allocadiaID"] = $_GET["tid"];
	}

	if ( is_singular() ) {
		$dataLayer["tlh-pagePostType"] = get_post_type();

		$dataLayer["tlh-pagePostType2"] = "single-".get_post_type();

		// determine post type from advanced custom fields
		//$_posttype = get_field("posttype");
		//if ($_posttype) {
		//	$dataLayer["tlh-pagePostType3"] = $_posttype;
		//}

		$_post_cats = get_the_category();
		if ( $_post_cats ) {
			$dataLayer["pageCategory"] = array();
			foreach( $_post_cats as $_one_cat ) {
				$dataLayer["pageCategory"][] = $_one_cat->slug;
			}
		}
		
		$_post_tags = get_the_tags();
		if ( $_post_tags ) {
			$dataLayer["pageAttributes"] = array();
			foreach( $_post_tags as $_one_tag ) {
				$dataLayer["pageAttributes"][] = $_one_tag->slug;
			}
		}
		
		
		$postuser = get_userdata( $GLOBALS["post"]->post_author );
		if ( false !== $postuser ) {
			$dataLayer["pagePostAuthor"] = $postuser->display_name;
		}
	
		$dataLayer["pagePostDate"] = get_the_date();
		$dataLayer["pagePostDateYear"] = get_the_date( "Y" );
		$dataLayer["pagePostDateMonth"] = get_the_date( "m" );
		$dataLayer["pagePostDateDay"] = get_the_date( "d" );

		if ( is_search() ) {
			$dataLayer["siteSearchTerm"] = get_search_query();
			$dataLayer["siteSearchFrom"] = ( isset($_SERVER["HTTP_REFERER"]) ? $_SERVER["HTTP_REFERER"] : "" );
			$dataLayer["siteSearchResults"] = $wp_query->post_count;
		}

	}
      
	$_gtm_tag .= '
	<script type="text/javascript">

	var dataLayer = dataLayer || []
';
	$_gtm_tag .= '
	dataLayer.push(' . str_replace(
			array( '"-~-', '-~-"' ),
			array( "", "" ),
			json_encode( $dataLayer )
		) . ');';

		$_gtm_tag .= '
	</script>';

      	echo $_gtm_tag;	

	return $dataLayer;
}

add_action( 'wp_head', 'tlh_add_basic_datalayer_data');

?>
