<?php
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/mobile/rx_mobile_detect.php');
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/libs/sk_utils.php');
require_once(GRP_CLASS_PATH.'/com/sakuraplugins/php/libs/rx__resizer.php');
/**
* Gravity front data
*/
class GravityFrontEngine
{
	private $post_id;
	private $post_custom_meta_data;
	private $customPostOptions;
	private $editor_contents;
	private $skUtils;
	function __construct($post_id)
	{
		$this->post_id = $post_id;		
		$this->customPostOptions = get_post_meta($post_id, GRP_POST_CUSTOM_META, false);
		$this->editor_contents = (isset($this->customPostOptions[0]['sectionContent']))?$this->customPostOptions[0]['sectionContent']:'';			
		$this->skUtils = new GRPUtils();
	}

	//check if mobile
	public function isMobile(){
		$detect_mobile = new GravityMobileDetect();
		return $detect_mobile->isMobile();
	}

	//if page is off
	public function isPageDeactivated(){
		$isPageDisabled = (isset($this->customPostOptions[0]['isPageDisabled']))?$this->customPostOptions[0]['isPageDisabled']:'';
		return ($isPageDisabled=="ON")?true:false;
	}
	//get redirect url
	public function getRedirectURL(){
		return (isset($this->customPostOptions[0]['pageRedirectURL']))?$this->customPostOptions[0]['pageRedirectURL']:'';
	}

	//check if page has a menu
	public function isMenu(){
		$showMenu = (isset($this->customPostOptions[0]['showMenu']))?$this->customPostOptions[0]['showMenu']:'';
		return ($showMenu=="ON")?true:false;
	}

	//check if page logo
	public function isPageLogo(){
		$isLogoCheckbox = (isset($this->customPostOptions[0]['isLogoCheckbox']))?$this->customPostOptions[0]['isLogoCheckbox']:'';
		return ($isLogoCheckbox=="ON")?true:false;
	}

	//get page logo
	public function getLogoSrc(){
		$pageLogoImage = "";
		$pageLogoImageID = (isset($this->customPostOptions[0]['pageLogoImageID']))?$this->customPostOptions[0]['pageLogoImageID']:'';
		if($pageLogoImageID!=""){
			$res = wp_get_attachment_image_src($pageLogoImageID, 'full');
			if($res[0])
				$pageLogoImage = $res[0];
		}
		return $pageLogoImage;
	}

	//output custom styles
	public function _eStyles(){
		$menuColors = $this->getMenuColors();
		echo '
			#menuContainer{
			  background-color: #'.$menuColors["menuBackgroundColor"].';
			  background: rgba('.$menuColors['backRGB'][0].','.$menuColors['backRGB'][1].','.$menuColors['backRGB'][2].',.91);
			}		
			#gravityMenuUI li a{
				color: #'.$menuColors["menuPageColor"].';
			}
			.selectedMenuItem{
				color: #'.$menuColors["menuSelectedColor"].' !important;
				border-bottom-color: #'.$menuColors["menuSelectedColor"].';				
			}
		';
	}

	//get menu colors
	public function getMenuColors(){
		$menuBackgroundColor = (isset($this->customPostOptions[0]['menuBackgroundColor']))?$this->customPostOptions[0]['menuBackgroundColor']:'FFFFFF';
		$menuPageColor = (isset($this->customPostOptions[0]['menuPageColor']))?$this->customPostOptions[0]['menuPageColor']:'000000';
		$menuSelectedColor = (isset($this->customPostOptions[0]['menuSelectedColor']))?$this->customPostOptions[0]['menuSelectedColor']:'4b8fe3';
		$backRGB = $this->skUtils->html2rgb($menuBackgroundColor);
		return array('menuBackgroundColor'=>$menuBackgroundColor, 'backRGB'=>$backRGB, 'menuPageColor'=>$menuPageColor, 'menuSelectedColor'=>$menuSelectedColor);
	}

	//get menu items
	public function _eMenuItems(){			
		$pTitles = (isset($this->customPostOptions[0]['pTitles']))?$this->customPostOptions[0]['pTitles']:false;
		$isAddToMenuInput = (isset($this->customPostOptions[0]['isAddToMenuInput']))?$this->customPostOptions[0]['isAddToMenuInput']:false;
		$isMenuExternalLinkInput = (isset($this->customPostOptions[0]['isMenuExternalLinkInput']))?$this->customPostOptions[0]['isMenuExternalLinkInput']:false;
		$menuExternalLinkInput = (isset($this->customPostOptions[0]['menuExternalLinkInput']))?$this->customPostOptions[0]['menuExternalLinkInput']:false;
		$menuExternalLinkTarget = (isset($this->customPostOptions[0]['menuExternalLinkTarget']))?$this->customPostOptions[0]['menuExternalLinkTarget']:false;


		if($isAddToMenuInput!=false){
			for ($i=0; $i < sizeof($isAddToMenuInput); $i++) { 
				
				$dataIsExternalLink = "false";
				$menuExternalURL = "#";
				$menuExternalTarget = "_blank";
				if($isMenuExternalLinkInput!=false){					
					$isMenuExternalLinkInputVal = (isset($isMenuExternalLinkInput[$i]))?$isMenuExternalLinkInput[$i]:"";
					if($isMenuExternalLinkInputVal!=""){
						$dataIsExternalLink = $isMenuExternalLinkInputVal;
					}
					$menuExternalURL = (isset($menuExternalLinkInput[$i]))?$menuExternalLinkInput[$i]:"#";
					$menuExternalTarget = (isset($menuExternalLinkTarget[$i]))?$menuExternalLinkTarget[$i]:"_blank";
				}

				$isAddToMenuInputVal = (isset($isAddToMenuInput[$i]))?$isAddToMenuInput[$i]:'';											
				if($isAddToMenuInputVal!="false"){
					echo '<li><a class="menuItemCls" data-external-target="'.$menuExternalTarget.'" data-external-url="'.$menuExternalURL.'" data-external="'.$dataIsExternalLink.'" href="">'.$pTitles[$i].'</a></li>';	
				}
			}
		}
	}

	//analytics code
	public function _eAnalytics(){
		echo (isset($this->customPostOptions[0]['pageAnalyticsTA']))?$this->customPostOptions[0]['pageAnalyticsTA']:'';
	}

	//css code
	public function _eCustomCSS(){
		echo (isset($this->customPostOptions[0]['pageCustomCSS']))?$this->customPostOptions[0]['pageCustomCSS']:'';
	}

	//css keywords
	public function _eKeywords(){
		echo (isset($this->customPostOptions[0]['keywordsCustom']))?$this->customPostOptions[0]['keywordsCustom']:'';
	}			

	//is full width content
	public function isFullWidthContent($sectionNo){
		$isFullContentInput = (isset($this->customPostOptions[0]['isFullContentInput']))?$this->customPostOptions[0]['isFullContentInput']:false;
		$isFullContentInputVal = (isset($isFullContentInput[$sectionNo]))?$isFullContentInput[$sectionNo]:'';
		return ($isFullContentInputVal=="false")?false:true;
	}

	//return number od sections
	public function getSectionsNumber(){
		$pTitles = (isset($this->customPostOptions[0]['pTitles']))?$this->customPostOptions[0]['pTitles']:false;
		return (is_array($pTitles))?sizeof($pTitles):0;
	}

	//back settings
	public function getBackgroundSettings($sectionNo){
		$hasBackground = "false";
		$backImageSrc = "";
		//is background image
		$isSectionBackInput = (isset($this->customPostOptions[0]['isSectionBackInput']))?$this->customPostOptions[0]['isSectionBackInput']:false;
		$hasBackground = (isset($isSectionBackInput[$sectionNo]))?$isSectionBackInput[$sectionNo]:'false';

		if($hasBackground=="true"){
			//background image
			$sectionBackAttachemetID = (isset($this->customPostOptions[0]['sectionBackAttachemetID']))?$this->customPostOptions[0]['sectionBackAttachemetID']:false;			
			$attachementID = (isset($sectionBackAttachemetID[$sectionNo]))?$sectionBackAttachemetID[$sectionNo]:false;
			$backImageSrc = '';
			if($attachementID){
				$res = wp_get_attachment_image_src($attachementID, 'full');
				$backImageSrc = $res[0];
			}			

		}

		return array('hasBackground'=>$hasBackground, 'backImageSrc'=>$backImageSrc);
	}

	//get section CSS
	public function getSectionCSS($sectionNo){
		$pTop = (isset($this->customPostOptions[0]['pTop']))?$this->customPostOptions[0]['pTop']:false;
		$pBottom = (isset($this->customPostOptions[0]['pBottom']))?$this->customPostOptions[0]['pBottom']:false;

		//padding
		$topNo = (isset($pTop[$sectionNo]))?$pTop[$sectionNo]:'';
		$bottomNo = (isset($pBottom[$sectionNo]))?$pBottom[$sectionNo]:'';

		//background color
		$section_background_color = (isset($this->customPostOptions[0]['section_background_color']))?$this->customPostOptions[0]['section_background_color']:false;			
		$sectionBackgroundCol = (isset($section_background_color[$sectionNo]))?$section_background_color[$sectionNo]:'FFFFFF';

		$section_text_color = (isset($this->customPostOptions[0]['section_text_color']))?$this->customPostOptions[0]['section_text_color']:false;
		$sectionTextCol = (isset($section_text_color[$sectionNo]))?$section_text_color[$sectionNo]:'666563';			

		//background image
		$sectionBackAttachemetID = (isset($this->customPostOptions[0]['sectionBackAttachemetID']))?$this->customPostOptions[0]['sectionBackAttachemetID']:false;			
		$attachementID = (isset($sectionBackAttachemetID[$sectionNo]))?$sectionBackAttachemetID[$sectionNo]:false;
		$backImageSrc = '';
		if($attachementID){
			$res = wp_get_attachment_image_src($attachementID, 'full');
			$backImageSrc = $res[0];
		}


		//is background image
		$isSectionBackInput = (isset($this->customPostOptions[0]['isSectionBackInput']))?$this->customPostOptions[0]['isSectionBackInput']:false;
		$isSectionBackImage = (isset($isSectionBackInput[$sectionNo]))?$isSectionBackInput[$sectionNo]:'false';

		$isSectionBackFixedInput = (isset($this->customPostOptions[0]['isSectionBackFixedInput']))?$this->customPostOptions[0]['isSectionBackFixedInput']:false;						
		$isSectionBackFixedInputVal = (isset($isSectionBackFixedInput[$sectionNo]))?$isSectionBackFixedInput[$sectionNo]:'false';

		$isSectionBackRepeatInput = (isset($this->customPostOptions[0]['isSectionBackRepeatInput']))?$this->customPostOptions[0]['isSectionBackRepeatInput']:false;	
		$isSectionBackRepeatInputVal = (isset($isSectionBackRepeatInput[$sectionNo]))?$isSectionBackRepeatInput[$sectionNo]:'false';	


		$backImageCSS = '';
		if($isSectionBackImage=="true"){
			$backImageCSS = 'background: url('.$backImageSrc.');';
			if($isSectionBackRepeatInputVal=="true"){
				//repeat
				$backImageCSS .= 'background-repeat: repeat; background-position:left top;';
			}else{
				//no repeat
				$fixedCSSProp = ($isSectionBackFixedInputVal=="true")?'background-attachment:fixed; background-size: cover;':'';
				$backImageCSS .= 'background-repeat:no-repeat;'.$fixedCSSProp;
			}
		}

		return 'color: #'.$sectionTextCol.'; padding-top: '.$topNo.'px; padding-bottom: '.$bottomNo.'px; background-color: #'.$sectionBackgroundCol.';'.$backImageCSS;	
	}

	public function isSectionBackgroundArrow($sectionNo){		
		$isSectionArrowDownInput = (isset($this->customPostOptions[0]['isSectionArrowDownInput']))?$this->customPostOptions[0]['isSectionArrowDownInput']:false;			
		$isSectionArrowDownInputVal = (isset($isSectionArrowDownInput[$sectionNo]))?$isSectionArrowDownInput[$sectionNo]:'false';		
		return ($isSectionArrowDownInputVal=="true")?true:false;	
	}

	public function isSectionBackgroundArrowTop($sectionNo){		
		$isSectionArrowUpInput = (isset($this->customPostOptions[0]['isSectionArrowUpInput']))?$this->customPostOptions[0]['isSectionArrowUpInput']:false;			
		$isSectionArrowUpInputVal = (isset($isSectionArrowUpInput[$sectionNo]))?$isSectionArrowUpInput[$sectionNo]:'false';		
		return ($isSectionArrowUpInputVal=="true")?true:false;	
	}

	public function isSectionArrowSmall($sectionNo){
		$isSmallArrowInput = (isset($this->customPostOptions[0]['isSmallArrowInput']))?$this->customPostOptions[0]['isSmallArrowInput']:false;			
		$isSmallArrowInputVal = (isset($isSmallArrowInput[$sectionNo]))?$isSmallArrowInput[$sectionNo]:'false';		
		return ($isSmallArrowInputVal=="true")?true:false;			
	}	

	//check if section is added to the menu
	public function isMenuSection($sectionNo){
		$isAddToMenuInput = (isset($this->customPostOptions[0]['isAddToMenuInput']))?$this->customPostOptions[0]['isAddToMenuInput']:false;
		$isAddToMenuInputVal = (isset($isAddToMenuInput[$sectionNo]))?$isAddToMenuInput[$sectionNo]:'';
		return ($isAddToMenuInputVal=="true")?true:false;
	}

	//get section background color
	public function getSectionBackgroundColor($sectionNo){
		//background color
		$section_background_color = (isset($this->customPostOptions[0]['section_background_color']))?$this->customPostOptions[0]['section_background_color']:false;			
		return (isset($section_background_color[$sectionNo]))?$section_background_color[$sectionNo]:'FFFFFF';
	}

	//get section scroll duration
	public function getSectionScrollDuration($sectionNo){
		$section_scroll_duration = (isset($this->customPostOptions[0]['section_scroll_duration']))?$this->customPostOptions[0]['section_scroll_duration']:false;
		return (isset($section_scroll_duration[$sectionNo]))?$section_scroll_duration[$sectionNo]:'1000';
	}

	//get section content
	public function getContent($sectionNo){
		return (isset($this->editor_contents[$sectionNo]))?$this->editor_contents[$sectionNo]:'';
	}

	//get static ID
	public function getStaticID($sectionNo){		
		$static_ids = (isset($this->customPostOptions[0]['static_ids']))?$this->customPostOptions[0]['static_ids']:false;
		$static_ID = (isset($static_ids[$sectionNo]))?$static_ids[$sectionNo]:uniqid('gravityslide');	
		return $static_ID;
	}

	//favicon
	public function getFavIcon(){
		$pageFavImage = "";
		$pageFavImageID = (isset($this->customPostOptions[0]['pageFavImageID']))?$this->customPostOptions[0]['pageFavImageID']:'';
		if($pageFavImageID!=""){
			$res = wp_get_attachment_image_src($pageFavImageID, 'full');
			if($res[0])
				$pageFavImage = $res[0];	
				$fav_temp_url = grp__resize($res[0], 16, 16, true);
				$pageFavImage = ($fav_temp_url)?$fav_temp_url:$pageFavImage;							
		}
		return $pageFavImage;
	}

}

?>