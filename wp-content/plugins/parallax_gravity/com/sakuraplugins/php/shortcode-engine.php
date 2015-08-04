<?php
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/plugin-options.php');
/**
* shortcodes
*/
class SKGravityShortcodes
{
	private $pluginOptions;
	function __construct($pluginOptions)
	{
		$this->pluginOptions = $pluginOptions;
	}

	//register
	public function register(){
		//row
		add_shortcode('sk_row', array($this, 'sk_row'));
		add_shortcode('sk_one_third', array($this, 'one_third'));		
		add_shortcode('sk_two_thirds', array($this, 'two_thirds'));
		add_shortcode('sk_one_half', array($this, 'one_half'));
		add_shortcode('gravity_move', array($this, 'gravity_move'));
		add_shortcode('gravity_button', array($this, 'gravity_button'));
		add_shortcode('gravity_title', array($this, 'gravity_title'));
		add_shortcode('gravity_title_small', array($this, 'gravity_title_small'));
		add_shortcode('gravity_title_inside', array($this, 'gravity_title_inside'));
		add_shortcode('gravity_nav_wrapper', array($this, 'gravity_nav_wrapper'));
		add_shortcode('sk_short_paragraph', array($this, 'sk_short_paragraph'));		
		if(SKGravityOptions::getInstance()->isInPageShortcode()){
			add_shortcode('sk_gravity_inpage', array($this, 'sk_gravity_inpage'));
		}
	}

	public function sk_gravity_inpage($atts, $content = null){
		extract(shortcode_atts(array('id' => ''), $atts));
		require_once(GRP_CLASS_PATH.'/com/sakuraplugins/php/gravity-engine.php');
		if($id==""){
			echo "GRAVITY!!!---Missing post ID!!!!";
			return;
		}				
		$out = "";
		$postData = get_post($id, OBJECT);
		if($postData==null)
			return;
		$gravity_engine = new GravityFrontEngine($postData->ID);
		$sectionsNo = $gravity_engine->getSectionsNumber();
		$sectionArrowW = 2100;
		$sectionArrowH = 80;
		$sectionArrowWSmall = 40;
		$sectionArrowHSmall = 30;					

		$out = '<div class="gravityPage">';
		for ($i=0; $i < $sectionsNo; $i++){
			$backSettings = $gravity_engine->getBackgroundSettings($i);
			//section
			$out .= '<div id="'.$gravity_engine->getStaticID($i).'" data-scrollduration="'.$gravity_engine->getSectionScrollDuration($i).'" class="gravitySection" data-hasbackgroundimage="'.$backSettings['hasBackground'].'" data-backimageurl="'.$backSettings['backImageSrc'].'" style="'.$gravity_engine->getSectionCSS($i).'">';
					//top arrow
					if($gravity_engine->isSectionBackgroundArrowTop($i)){					
						$out .= '<div class="gravityUpArrow">';
				             $out .= '<svg width="'.$sectionArrowW.'" height="'.$sectionArrowH.'" viewBox="0 0 '.$sectionArrowW.' '.$sectionArrowH.'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">';         
				                  $out .= '<polygon fill-opacity="1" fill="#'.$gravity_engine->getSectionBackgroundColor($i).'" points="0,0 '.($sectionArrowW/2).','.$sectionArrowH.' '.$sectionArrowW.',0 '.$sectionArrowW.','.$sectionArrowH.' 0,'.$sectionArrowW.'" />';
				             $out .= '</svg>';
						$out .= '</div>';					
					}					

					//centred content
					if(!$gravity_engine->isFullWidthContent($i)){
						$out .= '<div class="container">';
							$out .= '<div class="row">';
								$out .= '<div class="col-md-12">';					
									$out .= wpautop(do_shortcode($gravity_engine->getContent($i)));
								$out .= '</div>';
							$out .= '</div>';
						$out .= '</div>';
					}else{
						//full width content
						$out .= '<div>';							
							$out .= wpautop(do_shortcode($gravity_engine->getContent($i)));
						$out .= '</div>';					
					}

					//bottom arrow
					if($gravity_engine->isSectionBackgroundArrow($i)){
						if(!$gravity_engine->isSectionArrowSmall($i)){
							$out .= '<div class="gravityDownArrow">';
					             $out .= '<svg width="'.$sectionArrowW.'" height="'.$sectionArrowH.'" viewBox="0 0 '.$sectionArrowW.' '.$sectionArrowH.'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">';            
					                  $out .= '<polygon fill-opacity="1" fill="#'.$gravity_engine->getSectionBackgroundColor($i).'" points="0,0 '.$sectionArrowW.',0 '.($sectionArrowW/2).','.$sectionArrowH.'" />';
					             $out .= '</svg>';
							$out .= '</div>';							
						}else{
							$out .= '<div class="gravityDownArrow" style="bottom: -'.$sectionArrowHSmall.'px;">';
					             $out .= '<svg width="'.$sectionArrowWSmall.'" height="'.$sectionArrowHSmall.'" viewBox="0 0 '.$sectionArrowWSmall.' '.$sectionArrowHSmall.'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">';            
					                  $out .= '<polygon fill-opacity="1" fill="#'.$gravity_engine->getSectionBackgroundColor($i).'" points="0,0 '.$sectionArrowWSmall.',0 '.($sectionArrowWSmall/2).','.$sectionArrowHSmall.'" />';
					             $out .= '</svg>';
							$out .= '</div>';							
						}
					}

			$out .= '</div>';
			//section
		}
		$out .= '</div>';
		return $out;
	}	

	/* sk_short_paragraph
	================================================== */	
	public function sk_short_paragraph($atts, $content = null){	
		extract(shortcode_atts(array('color' => '686868', 'max_width'=>'300'), $atts));			
		$return_val = '<div class="shortParagraph" style="color:#'.$color.'; max-width: '.$max_width.'px;">'.$content.'</div>';
		return $return_val;		
	}

	/* gravity_nav_wrapper
	================================================== */	
	public function gravity_nav_wrapper($atts, $content = null){	
		extract(shortcode_atts(array("slide_no" => "0"), $atts));			
		return '<div class="gravity_nav_wrapper" data-slideno="'.$slide_no.'">'.do_shortcode($content).'</div>';		
	}


	/* gravity_title_inside
	================================================== */	
	public function gravity_title_inside($atts, $content = null){
		extract(shortcode_atts(array("color" => "eb1c7d"), $atts));		
		return '<span style="color:#'.$color.';">'.$content.'</span>';		
	}

	/* gravity_title_small
	================================================== */	
	public function gravity_title_small($atts, $content = null){
		extract(shortcode_atts(array("color" => "CCCCCC", 'text_align'=>'left', 'background'=>''), $atts));
		$backCSS = ($background!="")?'background-color:#'.$background.'; display:inline-block;':'';		
		if($backCSS!=""){
			$out = '<div style="text-align: '.$text_align.';">';
			$out .= '<h2 class="gravity_title_small" style="color:#'.$color.'; text-align: '.$text_align.';'.$backCSS.'padding: 7px 12px !important;">'.do_shortcode($content).'</h2>';
			$out .= '</div>';
			return $out;
		}		
		return '<h2 class="gravity_title_small" style="color:#'.$color.'; text-align: '.$text_align.';">'.do_shortcode($content).'</h2>';		
	}

	/* gravity_title
	================================================== */	
	public function gravity_title($atts, $content = null){
		extract(shortcode_atts(array("color" => "CCCCCC", 'text_align'=>'center', 'background'=>''), $atts));
		$backCSS = ($background!="")?'background-color:#'.$background.'; display:inline-block;':'';			
		if($backCSS!=""){
			$out = '<div style="text-align: '.$text_align.';">';
			$out .= '<h2 class="gravity_title" style="color:#'.$color.'; text-align: '.$text_align.';'.$backCSS.'padding: 7px 12px !important;">'.do_shortcode($content).'</h2>';
			$out .= '</div>';
			return $out;
		}	
		return '<h2 class="gravity_title" style="color:#'.$color.'; text-align: '.$text_align.';'.$backCSS.'">'.do_shortcode($content).'</h2>';		
	}

	/* gravity_button
	================================================== */	
	public function gravity_button($atts, $content = null){
		extract(shortcode_atts(array("color" => "FFFFFF", 'href'=>'#', 'target'=>'_self', 'background'=>'eb1c7d', 'background_hover'=>'2c2c2c'), $atts));		
		return '<a data-hover="'.$background_hover.'" class="gravity_button" href="'.$href.'" target="'.$target.'" style="background-color: #'.$background.'; color:#'.$color.'">'.$content.'</a>';		
	}

	/* gravity_move
	================================================== */	
	public function gravity_move($atts, $content = null){
		extract(shortcode_atts(array("data" => "", "duration"=>'0.5'), $atts));		
		return '<div id="'.uniqid('obj').'" class="gravityMove" data-duration="'.$duration.'" data-efx="'.$data.'">'.do_shortcode($content).'</div><div class="gravityMoveEnd"></div>';		
	}

	/* sk row
	================================================== */	
	public function sk_row($atts, $content = null){
		return '<div class="row">'.do_shortcode($content).'</div>';
	}
	
	/* one third
	================================================== */	
	public function one_third($atts, $content = null){
		return '<div class="col-md-4">'.do_shortcode($content).'</div>';
	}
	
	/* two third
	================================================== */	
	public function two_thirds($atts, $content = null){
		return '<div class="col-md-8">'.do_shortcode($content).'</div>';
	}
	
	/* one half
	================================================== */	
	public function one_half($atts, $content = null){
		return '<div class="col-md-6">'.do_shortcode($content).'</div>';
	}


}

?>