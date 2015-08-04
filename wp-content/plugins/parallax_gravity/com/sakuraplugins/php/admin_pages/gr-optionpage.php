<?php

/**
 *  generic settings
 */
class GravityGenericSettingsPage{
	
	private $optionsGroup;
	function __construct($optsGroup) {
		$this->optionsGroup = $optsGroup;
		add_action('admin_init', array($this, 'registerSettingsGroups'));
	}
	
	//register settings group
	public function registerSettingsGroups(){
		register_setting($this->optionsGroup, $this->optionsGroup);
	}	
	
	//get option group
	protected function getOptionGroup(){
		return $this->optionsGroup;
	}	
}


/**
 * RXOptionPage
 */
class GravityOptionPage extends GravityGenericSettingsPage {
	
	public function settings_page(){
		$options = get_option($this->getOptionGroup());							
		?>
		<div class="spacer10"></div>
		<form method="post" action="options.php">
			<?php settings_fields($this->getOptionGroup()); ?>				
		  
		  <!--options wrapper-->
		  <div id="optionsWrapper">	
		  	<h1 class="optionsMainTitle">Parallax Gravity Options</h1>

		  	<!--re-write-->
		  	<div class="whiteOptionBox">
		  		<h2 class="optionsSecondTitle">Re-Write slug</h2>
		  		<div class="hLineTitle"></div>
		  		<p class="sk_notice"><strong>NOTE!</strong> The re-write slug will affect the way permalinks look, ex: http://website.com/slug/item-name. If you change the slug, in order the changes to take effect, activate, than re-activate the plugin.</p>
		  		<p class="sk_notice"><strong>NOTE!</strong> Do not add spaces within the slug! Make sure you do not have the same slug as the name of a static page.</p>		  		
		  		<?php
		  			$skReWriteSlug = (isset($options['skReWriteSlug']))?$options['skReWriteSlug']:DEFAULT_REWRITE;
		  		?>
		  		<input type="text" name="<?php echo $this->getOptionGroup();?>[skReWriteSlug]" value="<?php echo $skReWriteSlug;?>" />
		  	</div>
		  	<!--/re-write-->
		  	
			<p class="submit">
				<input type="submit" class="button-primary pull-right" value="<?php _e('Save Changes', GRP_PLUGIN_TEXTDOMAIN) ?>" />
	        </p>

		  	<!--activate inside page shortcode-->
		  	<div class="whiteOptionBox">
		  		<h2 class="optionsSecondTitle">In Page Shortcode</h2>
		  		<div class="hLineTitle"></div>
		  		<p class="sk_notice"><strong>NOTE!</strong> This will activate the [sk_gravity_inpage] shortcode. [sk_gravity_inpage] allows you to include a landing page content within one of your regular pages. This feature is tested with the default WordPress themes, it might not work with all themes (@see Documentation regarding this shortcode)</p>		  				  		
		  		<p class="sk_notice"><strong>NOTE!</strong> Once you activate this option, a shortcode will be available for each landing page at the bottom of the edit page (Ex: Admin > ParallaxGravity > Edit "your page").</p>
		  		<?php		  			
					$isInsidePageShortcode = (isset($options['isInsidePageShortcode']))?$options['isInsidePageShortcode']:'';
					$isInsidePageShortcodeChecked = ($isInsidePageShortcode=="ON")?'checked':'';		  		
		  		?>		  		
		  		<input type="checkbox" name="<?php echo $this->getOptionGroup();?>[isInsidePageShortcode]" value="ON" <?php echo $isInsidePageShortcodeChecked;?>> Activate "sk_gravity_inpage" shortcode
		  	</div>
		  	<!--/activate inside page shortcode-->		  	

			<p class="submit">
				<input type="submit" class="button-primary pull-right" value="<?php _e('Save Changes', GRP_PLUGIN_TEXTDOMAIN) ?>" />
	        </p>


		  	<!--parallax home page-->
		  	<div class="whiteOptionBox">
		  		<h2 class="optionsSecondTitle">Parallax Home Page</h2>
		  		<div class="hLineTitle"></div>
		  		<p class="sk_notice"><strong>NOTE!</strong> In order to set one of Parallax Landing Pages as home page you should:
		  			<br />1. Create a regular page from "Admin > Pages > Add new"
		  			<br />2. Set the newly created page as front page from "Settings > Reading > Front page displays > A static page"
		  			<br />3. Select the newly created page from the list below.
		  			<br />4. Select the Landing Page you want to show up on frontpage from the list below.</p>		  				  				  		
	  			<?php
	  				$pages = get_pages(array('post_type'=>'page', 'post_status'=>'publish'));
	  				$selectedFrontPage = (isset($options['selectedPage']))?$options['selectedPage']:'-100';
	  				function checkSelected($currentPageID, $selectedPageID){
	  					if((string)$currentPageID==(string)$selectedPageID){
	  						echo ' selected="selected"';
	  					}
	  				}
	  			?>	
	  			<p><b>Select regular page</b></p>
	  			<select name="<?php echo $this->getOptionGroup();?>[selectedPage]">
	  				<option value="-">Select a Page...</option>
	  				<?php for($i=0; $i < sizeof($pages); $i++):?>
	  					<option value="<?php echo $pages[$i]->ID;?>"<?php checkSelected($pages[$i]->ID, $selectedFrontPage);?>><?php echo $pages[$i]->post_title;?></option>
	  				<?php endfor;?>
	  			</select>

	  			<?php
	  				$landingPages = get_posts(array('post_type'=>GRP_POST_SLUG, 'post_status'=>'publish', 'posts_per_page'=>-1));
	  				$selectedLandingPage = (isset($options['selectedLandingPage']))?$options['selectedLandingPage']:'-100';
	  				function checkSelectedLanding($currentPageID, $selectedPageID){
	  					if((string)$currentPageID==(string)$selectedPageID){
	  						echo ' selected="selected"';
	  					}
	  				}
	  				//print_r($landingPages);
	  			?>

	  			<p><b>Select landing page</b></p>
	  			<select name="<?php echo $this->getOptionGroup();?>[selectedLandingPage]">
	  				<option value="-">Select a Landing Page...</option>
	  				<?php for($i=0; $i < sizeof($landingPages); $i++):?>
	  					<option value="<?php echo $landingPages[$i]->ID;?>"<?php checkSelectedLanding($landingPages[$i]->ID, $selectedLandingPage);?>><?php echo $landingPages[$i]->post_title;?></option>
	  				<?php endfor;?>
	  			</select> 	  			  		
		  	</div>
		  	<!--/parallax home page-->		  	

			<p class="submit">
				<input type="submit" class="button-primary pull-right" value="<?php _e('Save Changes', GRP_PLUGIN_TEXTDOMAIN) ?>" />
	        </p>	        		  	

		</form>		
		
		<?php
	}





}


?>