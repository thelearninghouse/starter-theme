<?php

require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/customposts/SkCPT.php');
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/customposts/utils/CPTHelper.php');
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/script_manager/ScriptManager.php');
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/admin_pages/gr-optionpage.php');
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/plugin-options.php');
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/shortcode-engine.php');
/**
 * core class
 */
class GravityCore {

	/************* BASE PLUGIN EVENTS ***********/
	//init handler
	public function initializeHandler(){
		$this->addCPT();
		$this->initShortcodes();
	}


	//admin init handler
	public function adminInitHandler(){
		$this->rxCPT->addMetaBox(__('Landing Page Sections', GRP_PLUGIN_TEXTDOMAIN), 'meta_box_landing_023648', 'meta_box_sections');
		$this->rxCPT->addMetaBox(__('Landing Page Options', GRP_PLUGIN_TEXTDOMAIN), 'meta_box_options_294355', 'meta_box_options');
		if(SKGravityOptions::getInstance()->isInPageShortcode()){
			$this->rxCPT->addMetaBox(__('In Page Shortcode', GRP_PLUGIN_TEXTDOMAIN), 'meta_box_shortcode_294355', 'meta_box_shortcode');
		}
	}

	/**
	 * SAVE POST EXTRA DATA
	 */
	 public function savePostHandler(){
		global $post;
		if( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ){
			return $post_id;
		}
		if(!current_user_can('edit_posts') || !current_user_can('publish_posts')){
			return;
		}
			//save portfolio data
		if(isset($this->rxCPT) && isset($_POST['post_type'])){
			if($this->rxCPT->getPostSlug() == $_POST['post_type']){
				if(current_user_can( 'edit_posts', $post->ID ) && isset($_POST[$this->rxCPT->getPostCustomMeta()])){
					update_post_meta($post->ID, $this->rxCPT->getPostCustomMeta(), $_POST[$this->rxCPT->getPostCustomMeta()]);
				}
			}
		}
	 }

	//admin enqueue scripts handler
	public function adminEnqueueScriptsHandler(){
		if(!isset($this->rxCPT)){
			return;
		}
		$current_screen = get_current_screen();
		if($current_screen->post_type==$this->rxCPT->getPostSlug()){
			//default styles
			$this->enqueAdminCommonStyles();
			wp_enqueue_script('jquery');
			$this->enqueJQUI();

			GRPScriptManager::enqueColorPicker();

			wp_register_script('gravity_admin_js', GRP_TEMPPATH.'/com/sakuraplugins/js/admin.js', array('jquery'));
			wp_enqueue_script('gravity_admin_js');
		}
		$screenID = $current_screen->id;
		if($screenID==GRP_POST_SLUG.'_page_gravity_portfolio_sett'){
			$this->enqueAdminCommonStyles();
			wp_enqueue_script('jquery');
			wp_add_inline_style('gravity_admin_style_opts', $this->getGoogleFontsCSS());
		}
	}

	//admin common
	private function enqueAdminCommonStyles(){
			wp_register_style('gravity_admin_style', GRP_TEMPPATH.'/com/sakuraplugins/css/admin.css');
			wp_enqueue_style('gravity_admin_style');
			wp_register_style('gravity_admin_style_opts', GRP_TEMPPATH.'/com/sakuraplugins/css/admin_options.css');
			wp_enqueue_style('gravity_admin_style_opts');
	}
	private function enqueJQUI(){

			wp_register_style('jqui_style', GRP_TEMPPATH.'/com/sakuraplugins/css/jqui_style/redmond/jquery-ui-1.10.4.custom.min.css');
			wp_enqueue_style('jqui_style');
			//default JS
			wp_enqueue_script('jquery-ui-core');
			wp_enqueue_script('jquery-ui-draggable');
			wp_enqueue_script('jquery-ui-widget');
			wp_enqueue_script('jquery-ui-selectable');
			wp_enqueue_script('jquery-ui-button');
			wp_enqueue_script('jquery-ui-mouse');
			wp_enqueue_script('jquery-ui-spinner');
			wp_enqueue_script('jquery-ui-accordion');
			wp_enqueue_script('jquery-ui-dialog');
			wp_enqueue_script('jquery-ui-tabs');
	}

	//admin menu handler
	public function adminMenuHandler(){
		$sk_options_page = new GravityOptionPage(GRP_POST_OPTION_GROUP);
		add_submenu_page('edit.php?post_type='.GRP_POST_SLUG, 'Options', 'Options', 'manage_options', 'gravity_portfolio_sett', array($sk_options_page, 'settings_page'));
	}


	//WP Enqueue scripts handler
	public function WPEnqueueScriptsHandler(){
		if(!is_single() && SKGravityOptions::getInstance()->isInPageShortcode()==true){
			// $this->loadFrontendStyles();
		}
		if(is_single()){
			if(GRP_POST_SLUG==get_post_type()){
				$this->loadFrontendStyles();
			}
		}
	}


	private function loadFrontendStyles(){
		wp_register_style('gravity_bootstrap_light', GRP_TEMPPATH.'/css/bootstrap_light/bootstrap.min.css');
		wp_enqueue_style('gravity_bootstrap_light');
		wp_register_style('gravity_parallax_style', GRP_TEMPPATH.'/css/sk_gravity.css');
		wp_enqueue_style('gravity_parallax_style');

		wp_add_inline_style('gravity_parallax_style', $this->getGoogleFontsCSS());

		wp_enqueue_script('jquery');
		wp_enqueue_script('jquery-effects-core');
		GRPScriptManager::enqueTweenmax();

		wp_register_script('grp_scrollorama', GRP_TEMPPATH.'/js/external/gravity-scrollorama.js', array('jquery'));
		wp_enqueue_script('grp_scrollorama');
		wp_register_script('grp_waypoints', GRP_TEMPPATH.'/js/external/waypoints.min.js', array('jquery'));
		wp_enqueue_script('grp_waypoints');
		wp_register_script('grp_backstretch', GRP_TEMPPATH.'/js/external/backstretch.js', array('jquery'));
		wp_enqueue_script('grp_backstretch');

		wp_register_script('grp_parallax', GRP_TEMPPATH.'/js/parallax_gravity.js', array('jquery'));
		wp_enqueue_script('grp_parallax');
		wp_localize_script('grp_parallax', 'GRAVITY_PARALLAX_DATA', array('isMobileDevice'=>$this->isMobile()));
	}

	//check if is mobile
	private static function isMobile(){
		require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/mobile/rx_mobile_detect.php');
		$detect_mobile = new GravityMobileDetect();
		$is_mobile = 'false';
		if($detect_mobile->isMobile()){
			$is_mobile = 'true';
		}
		return $is_mobile;
	}

	//google fonts
	public function getGoogleFontsCSS(){
		return '
		  @import url(http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300);
		';
	}

	//remove support
	public function removeSupport($postTypeSlug, $val){
		remove_post_type_support($postTypeSlug, $val);
	}

	//add thumb size/support
	public function addThumbSize($w, $h, $postTypes=NULL){
		if(function_exists('add_theme_support')){
			(isset($postTypes))?add_theme_support('post-thumbnails', $postTypes):add_theme_support('post-thumbnails');
	        set_post_thumbnail_size($w, $h, true );
		}
	}

	//admin bar custom
	public function adminBarCustom(){
		if(function_exists('get_current_screen')){
			$current_screen = get_current_screen();
			if($current_screen->post_type==$this->rxCPT->getPostSlug()){
				require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/admin_pages/gravity-banner.php');
			}
		}
	}


	private $pluginOptions;
	//init listeners
	public function start($opts){
		$this->pluginOptions = $opts;
		//return;
		add_action('init', array($this, 'initializeHandler'));
		add_action('admin_init', array($this, 'adminInitHandler'));
		add_action('save_post', array($this, 'savePostHandler'));
		add_action('admin_enqueue_scripts', array($this, 'adminEnqueueScriptsHandler'));
		add_action('admin_menu', array($this, 'adminMenuHandler'));
		add_action("wp_enqueue_scripts", array($this, 'WPEnqueueScriptsHandler'), 999);
		add_action("wp_before_admin_bar_render", array($this, 'adminBarCustom'));
		add_filter("single_template", array($this, 'rx_plugin_single'));
		register_activation_hook(GRAVITY_FILE, array($this, 'plugin_activate'));
		register_deactivation_hook(GRAVITY_FILE, array($this, 'plugin_deactivate'));
		add_filter('page_template', array($this, 'parallax_home'));
	}

	//parallax home page
	public function parallax_home($page_template){
		$sk_plugin_options = new SKGravityOptions();
		$sk_parallax_home_IDs = $sk_plugin_options->getHomepageSettings();
		if($sk_parallax_home_IDs['selectedFrontPage']!=false){
			if (is_page($sk_parallax_home_IDs['selectedFrontPage'])){
				$page_template = dirname( __FILE__ ).'/parallax-home.php';
			}
		}
		return $page_template;
	}


	//plugin activate
	public function plugin_activate(){
		//flush_rewrite_rules();
	}
	//plugin deactivate
	public function plugin_deactivate()
	{
		update_option('sk_is_rewrite', false);
		flush_rewrite_rules();
	}
	/************* END BASE PLUGIN EVENTS ***********/


	//rx single template
	public function rx_plugin_single($single_template){
		global $post;
		//echo "string2";
		//$single_template = dirname( __FILE__ ) . '/parallax-single.php';
		if($post->post_type==GRP_POST_SLUG){
			$single_template = dirname( __FILE__ ) . '/parallax-single.php';
			//print_r($single_template);
		}
		return $single_template;
	}

	private $rxCPT;
	/*
	 * create CPT
	 */
	public function addCPT(){
		$gravityOptions = SKGravityOptions::getInstance();
		$settings = array('post_custom_meta_data'=>GRP_POST_CUSTOM_META, 'post_type' => GRP_POST_SLUG, 'name' => __('Parallax Gravity', GRP_PLUGIN_TEXTDOMAIN), 'menu_icon' => GRP_TEMPPATH.'/com/sakuraplugins/images/icons/television-image.png',
		'singular_name' => __('Landing Page', GRP_PLUGIN_TEXTDOMAIN), 'rewrite' => $gravityOptions->getReWriteSlug(), 'add_new' => __('New Landing Page', GRP_PLUGIN_TEXTDOMAIN),
		'edit_item' => __('Edit', GRP_PLUGIN_TEXTDOMAIN), 'new_item' => __('New', GRP_PLUGIN_TEXTDOMAIN), 'view_item' => __('View item', GRP_PLUGIN_TEXTDOMAIN), 'search_items' => __('Search items', GRP_PLUGIN_TEXTDOMAIN),
		'not_found' => __('No item found', GRP_PLUGIN_TEXTDOMAIN), 'not_found_in_trash' => __('Item not found in trash', GRP_PLUGIN_TEXTDOMAIN),
		'supports' => array('title'));

		$cptHelper = new GrpCPTHelper($settings);
		$this->rxCPT = new GrpCPT();
		$this->rxCPT->create($cptHelper, $settings);

		//re-write once
		$isReWrite = get_option('sk_is_rewrite');
		if($isReWrite!=true){
			flush_rewrite_rules();
			update_option('sk_is_rewrite', true);
		}
	}

	/////////////// BEGIN SHORTCODES ///////////////
	private function initShortcodes(){
		$shortcodes = new SKGravityShortcodes($this->pluginOptions);
		$shortcodes->register();
	}






}


?>
