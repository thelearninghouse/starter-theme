<?php

/**
* plugin options
*/

class SKGravityOptions
{

	private $options;
	function __construct()
	{
		$this->options = get_option(GRP_POST_OPTION_GROUP);
	}

	static private $instance;
	static public function getInstance(){
		if(!isset(self::$instance)){
			self::$instance = new SKGravityOptions();
		}
		return self::$instance;
	}

	//get re-write slug
	public function getReWriteSlug(){
		return (isset($this->options['skReWriteSlug']))?$this->options['skReWriteSlug']:DEFAULT_REWRITE;	
	}

	//is in page shortcode
	public function isInPageShortcode(){
		$isInsidePageShortcode = (isset($this->options['isInsidePageShortcode']))?$this->options['isInsidePageShortcode']:'';
		return ($isInsidePageShortcode=="ON")?true:false;
	}

	//parallax homepage settings
	public function getHomepageSettings(){
		$selectedFrontPage = (isset($this->options['selectedPage']))?$this->options['selectedPage']:false;
		$selectedLandingPage = (isset($this->options['selectedLandingPage']))?$this->options['selectedLandingPage']:false;
		$selectedFrontPage = ($selectedFrontPage!="-")?$selectedFrontPage:false;
		$selectedLandingPage = ($selectedLandingPage!="-")?$selectedLandingPage:false;
		return array('selectedFrontPage'=>$selectedFrontPage, 'selectedLandingPage'=>$selectedLandingPage);
	}
}

?>