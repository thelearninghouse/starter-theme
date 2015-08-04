<?php
require_once(GRP_CLASS_PATH.'/com/sakuraplugins/php/customposts/GenericPostType.php');
require_once(GRP_CLASS_PATH.'/com/sakuraplugins/php/libs/rx__resizer.php');
require_once(GRP_CLASS_PATH.'/com/sakuraplugins/php/libs/sk-qr-util.php');
require_once(GRP_CLASS_PATH.'com/sakuraplugins/php/plugin-options.php');
/**
 * Rx CPT
 */
class GrpCPT extends GRPGenericPostType {	

	public function meta_box_shortcode(){
		global $post;
		if(defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
			return $post_id;
		?>
		<p class="sk_notice"><strong>NOTE!</strong> This shortcode allows you to add the content of this landing page within one of your regular pages. The shortcode has been activated from plugin's option page (@see Documentation regarding this shortcode).</p>
		<p class="shortcode_show">[sk_gravity_inpage id="<?php echo get_the_ID();?>"]</p>
		<?php		
	}

	public function meta_box_options(){
		global $post;
		if(defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
			return $post_id;

		$customPostOptions = get_post_meta($post->ID, $this->getPostCustomMeta(), false);	
		$post_custom_meta_data = $this->getPostCustomMeta();														
		?>					
		<div class="spacer10"></div>
		<div id="option_tabs">
		  <ul>
		    <li><a href="#menu_tab">Page Menu</a></li>
		    <li><a href="#landingpage_deactivate">Deactivate/Redirect</a></li>
		    <li><a href="#sk_analytics">Page Analytics</a></li>
		    <li><a href="#sk_css">Custom CSS</a></li>
		    <li><a href="#sk_qr">QR code</a></li>
		    <li><a href="#sk_keywords">Keywords</a></li>
		    <li><a href="#sk_favico">Favicon</a></li>		    		    
		  </ul>
		  <div id="menu_tab">
			  	<?php
					$showMenu = (isset($customPostOptions[0]['showMenu']))?$customPostOptions[0]['showMenu']:'';
					$showMenuChecked = ($showMenu=="ON")?'checked':'';			  	
			  	?>
			  	<p class="sk_notice"><strong>NOTE!</strong> In order to add menu items, go to each section above and check "Link section to menu".</p>
			  	<label class="checkbox"><input id="showMenuCheckbox" type="checkbox" name="<?php echo $post_custom_meta_data;?>[showMenu]" value="ON" <?php echo $showMenuChecked;?>> Activate landing page menu</label>
			    <div id="menuRelatedOptions" class="<?php echo ($showMenu!="ON")?"hideMe":"";?>">

				 	<div class="sk_admin_row">
				 		<div class="sk_admin_span3">
					    	<?php
					    		$menuBackgroundColor = (isset($customPostOptions[0]['menuBackgroundColor']))?$customPostOptions[0]['menuBackgroundColor']:'FFFFFF';
					    	?>
							<p class="pTitle"><strong>Menu background color</strong></p>
							<input id="menuBackgroundColor" class="smallInputText" type="text" name="<?php echo $post_custom_meta_data;?>[menuBackgroundColor]" value="<?php echo $menuBackgroundColor;?>" />				 			
				 		</div>
				 		<div class="sk_admin_span3">
					    	<?php
					    		$menuPageColor = (isset($customPostOptions[0]['menuPageColor']))?$customPostOptions[0]['menuPageColor']:'000000';
					    		$menuSelectedColor = (isset($customPostOptions[0]['menuSelectedColor']))?$customPostOptions[0]['menuSelectedColor']:'4b8fe3';
					    	?>
							<p class="pTitle"><strong>Menu (text color)</strong></p>
							<input id="menuPageColor" class="smallInputText" type="text" name="<?php echo $post_custom_meta_data;?>[menuPageColor]" value="<?php echo $menuPageColor;?>" />				 			
							<p class="pTitle"><strong>Menu selected color</strong></p>
							<input id="menuSelectedColor" class="smallInputText" type="text" name="<?php echo $post_custom_meta_data;?>[menuSelectedColor]" value="<?php echo $menuSelectedColor;?>" />								
				 		</div>
				 		<div class="sk_admin_span3">
				 			<?php
								$isLogoCheckbox = (isset($customPostOptions[0]['isLogoCheckbox']))?$customPostOptions[0]['isLogoCheckbox']:'';
								$isLogoCheckboxChecked = ($isLogoCheckbox=="ON")?'checked':'';					 			
				 				$pageLogoImage = "";
				 				$pageLogoImageID = (isset($customPostOptions[0]['pageLogoImageID']))?$customPostOptions[0]['pageLogoImageID']:'';
				 				if($pageLogoImageID!=""){
				 					$res = wp_get_attachment_image_src($pageLogoImageID, 'full');
				 					if($res[0])
				 						$pageLogoImage = $res[0];
				 				}
				 			?>
							<p class="pTitle"><strong>Page logo</strong></p>								
							<a id="skUploadLogo" class="skButton skActionButton" href="#">Upload logo</a>						    						    
						    <p>
						    	<img id="pageLogoImage" src="<?php echo $pageLogoImage;?>" />
						    </p>										    
							<input id="pageLogoImageID" class="inputText" type="hidden" name="<?php echo $post_custom_meta_data;?>[pageLogoImageID]" value="<?php echo $pageLogoImageID;?>" />			 			
							<label class="checkbox"><input type="checkbox" name="<?php echo $post_custom_meta_data;?>[isLogoCheckbox]" value="ON" <?php echo $isLogoCheckboxChecked;?>> Show logo ON/OFF</label>
				 		</div>				 					 		
				 		<div class="clear-fx"></div>
				 	</div>

		    	</div>
		  </div>
		  <div id="landingpage_deactivate">
		  		<?php
					$isPageDisabled = (isset($customPostOptions[0]['isPageDisabled']))?$customPostOptions[0]['isPageDisabled']:'';
					$isPageDisabledChecked = ($isPageDisabled=="ON")?'checked':'';		  	
					$pageRedirectURL = (isset($customPostOptions[0]['pageRedirectURL']))?$customPostOptions[0]['pageRedirectURL']:'';					
		  		?>
		  		<p class="sk_notice"><strong>NOTE!</strong> If the campaign is over, deactivate the page and provide a redirect URL. This prevents possible visitors to hit a 404 page.</p>		  			    
		  		<label class="checkbox"><input type="checkbox" name="<?php echo $post_custom_meta_data;?>[isPageDisabled]" value="ON" <?php echo $isPageDisabledChecked;?>> Deactivate landing page.</label>
				<p class="pTitle"><strong>Redirect URL</strong></p>
				<input class="urlInputText" type="text" name="<?php echo $post_custom_meta_data;?>[pageRedirectURL]" placeholder="http://redirect-url.com" value="<?php echo $pageRedirectURL;?>" />			  		
		  </div>
		  <div id="sk_analytics">
			    <p class="sk_notice"><strong>NOTE!</strong> Add Google Analytics code below.</p>
			    <?php
			    	$pageAnalyticsTA = (isset($customPostOptions[0]['pageAnalyticsTA']))?$customPostOptions[0]['pageAnalyticsTA']:'';
			    ?>
			    <textarea class="textareaInput" name="<?php echo $post_custom_meta_data;?>[pageAnalyticsTA]"><?php echo $pageAnalyticsTA;?></textarea>
		  </div>
		  <div id="sk_css">
			    <p class="sk_notice"><strong>NOTE!</strong> Add custom CSS code below.</p>
			    <?php
			    	$pageCustomCSS = (isset($customPostOptions[0]['pageCustomCSS']))?$customPostOptions[0]['pageCustomCSS']:'';
			    ?>
			    <textarea class="textareaInput" name="<?php echo $post_custom_meta_data;?>[pageCustomCSS]"><?php echo $pageCustomCSS;?></textarea>
		  </div>
		  <div id="sk_qr">
			    <p class="sk_notice"><strong>NOTE!</strong> If your campaign also runs offline (Ex: flyers), you could print the QR code below on the flyer, that way if someone scans the QR code with the mobile device will go to this page. In order to save the QR code image: Right click on the image > "Save image as".</p>
			    <?php
			    	$qrBuild = new SkQR();
			    ?>
			    <div><img class="qrimage" src="<?php echo $qrBuild->getURL(get_permalink(get_the_ID()), 300);?>" alt="qr" /></div>
		  </div>
		  <div id="sk_keywords">
			    <p class="sk_notice"><strong>NOTE!</strong> Add keywords separated by commas.</p>
			    <?php
			    	$keywordsCustom = (isset($customPostOptions[0]['keywordsCustom']))?$customPostOptions[0]['keywordsCustom']:'';
			    ?>
			    <textarea class="textareaInput" name="<?php echo $post_custom_meta_data;?>[keywordsCustom]"><?php echo $keywordsCustom;?></textarea>
		  </div>
		  <div id="sk_favico">	
				  <?php
						$pageFavImage = "";
						$pageFavImageID = (isset($customPostOptions[0]['pageFavImageID']))?$customPostOptions[0]['pageFavImageID']:'';
						if($pageFavImageID!=""){
							$res = wp_get_attachment_image_src($pageFavImageID, 'full');
							if($res[0])
								$pageFavImage = $res[0];	
								$fav_temp_url = grp__resize($res[0], 16, 16, true);
								$pageFavImage = ($fav_temp_url)?$fav_temp_url:$pageFavImage;							
						}		  
				  ?>		    
				<p class="pTitle"><strong>Upload favicon here</strong></p>								
				<a id="skUploadFavico" class="skButton skActionButton" href="#">Upload</a>						    						    
			    <p>
			    	<img id="pageFavImage" src="<?php echo $pageFavImage;?>" />
			    </p>										    
				<input id="pageFavImageID" class="inputText" type="hidden" name="<?php echo $post_custom_meta_data;?>[pageFavImageID]" value="<?php echo $pageFavImageID;?>" />			    
		  </div>		  		  		  		  		  		  
		</div>



		<?php
	}	


	public function meta_box_sections(){
		global $post;
		if(defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
			return $post_id;
															
		?>	

		<p class="sk_notice"><strong>NOTE!</strong> Parallax Gravity allows you to build multiple sections inside a landing pages. Start creating sections below.</p>
		<div id="sk_sectionsUI" class="optionBox" data-postmeta="<?php echo $this->getPostCustomMeta();?>">
			
			<input id="addSectionBTN" type='submit' value='Add section' class='button-primary pxFloatRight' />
			<input id="removeAllSectionBTN" style="margin-right: 5px;" type='submit' value='Remove all sections' class='button-secondary pxFloatRight' />
			<div class="clear-fx"></div>
			<div class="spacer10"></div>			

			<?php
				$customPostOptions = get_post_meta($post->ID, $this->getPostCustomMeta(), false);
				$post_custom_meta_data = $this->getPostCustomMeta();				

				$pTitles = (isset($customPostOptions[0]['pTitles']))?$customPostOptions[0]['pTitles']:false;				

				$isAddToMenuInput = (isset($customPostOptions[0]['isAddToMenuInput']))?$customPostOptions[0]['isAddToMenuInput']:false;
				$isFullContentInput = (isset($customPostOptions[0]['isFullContentInput']))?$customPostOptions[0]['isFullContentInput']:false;

				//external menu link AC
				$isMenuExternalLinkInput = (isset($customPostOptions[0]['isMenuExternalLinkInput']))?$customPostOptions[0]['isMenuExternalLinkInput']:false;
				$menuExternalLinkInput = (isset($customPostOptions[0]['menuExternalLinkInput']))?$customPostOptions[0]['menuExternalLinkInput']:false;
				$menuExternalLinkTarget = (isset($customPostOptions[0]['menuExternalLinkTarget']))?$customPostOptions[0]['menuExternalLinkTarget']:false;

				$pTop = (isset($customPostOptions[0]['pTop']))?$customPostOptions[0]['pTop']:false;
				$pBottom = (isset($customPostOptions[0]['pBottom']))?$customPostOptions[0]['pBottom']:false;
				$section_background_color = (isset($customPostOptions[0]['section_background_color']))?$customPostOptions[0]['section_background_color']:false;
				$section_text_color = (isset($customPostOptions[0]['section_text_color']))?$customPostOptions[0]['section_text_color']:false;

				$section_scroll_duration = (isset($customPostOptions[0]['section_scroll_duration']))?$customPostOptions[0]['section_scroll_duration']:false;
									
				
				$sectionBackAttachemetID = (isset($customPostOptions[0]['sectionBackAttachemetID']))?$customPostOptions[0]['sectionBackAttachemetID']:false;			
				
				$isSectionBackInput = (isset($customPostOptions[0]['isSectionBackInput']))?$customPostOptions[0]['isSectionBackInput']:false;
				$isSectionBackFixedInput = (isset($customPostOptions[0]['isSectionBackFixedInput']))?$customPostOptions[0]['isSectionBackFixedInput']:false;						
				$isSectionBackRepeatInput = (isset($customPostOptions[0]['isSectionBackRepeatInput']))?$customPostOptions[0]['isSectionBackRepeatInput']:false;											
				$isSectionArrowDownInput = (isset($customPostOptions[0]['isSectionArrowDownInput']))?$customPostOptions[0]['isSectionArrowDownInput']:false;			
				$isSectionArrowUpInput = (isset($customPostOptions[0]['isSectionArrowUpInput']))?$customPostOptions[0]['isSectionArrowUpInput']:false;			
				$isSmallArrowInput = (isset($customPostOptions[0]['isSmallArrowInput']))?$customPostOptions[0]['isSmallArrowInput']:false;			
											

				$editor_contents = (isset($customPostOptions[0]['sectionContent']))?$customPostOptions[0]['sectionContent']:'';	

				//static ids
				$static_ids = (isset($customPostOptions[0]['static_ids']))?$customPostOptions[0]['static_ids']:false;	
			?>			
			<!--parallax container-->			
			<div id="parallax_accordion">

				<!--if data-->
				<?php if(is_array($pTitles)):?>
					<?php for ($i=0; $i < sizeof($pTitles); $i++):?>
					<?php
						$currentTitle = $pTitles[$i];

						$isAddToMenuInputVal = (isset($isAddToMenuInput[$i]))?$isAddToMenuInput[$i]:'';							
						$isAddToMenuInputValChecked = ($isAddToMenuInputVal!="false")?' checked':'';

						//external menu link						
						$isMenuExternalLinkInputVal = (isset($isMenuExternalLinkInput[$i]))?$isMenuExternalLinkInput[$i]:'';
						$isMenuExternalLinkInputValChecked = ($isMenuExternalLinkInputVal!="")?' checked':'';
						$menuExternalLinkInputVal = (isset($menuExternalLinkInput[$i]))?$menuExternalLinkInput[$i]:'';
						$menuExternalLinkTargetVal = (isset($menuExternalLinkTarget[$i]))?$menuExternalLinkTarget[$i]:'_blank';												

						$isFullContentInputVal = (isset($isFullContentInput[$i]))?$isFullContentInput[$i]:'';							
						$isFullContentInputValChecked = ($isFullContentInputVal!="false")?' checked':'';								

						$padding_top = (isset($pTop[$i]))?$pTop[$i]:'80';
						$padding_bottom = (isset($pBottom[$i]))?$pBottom[$i]:'80';
						$sectionBackground = (isset($section_background_color[$i]))?$section_background_color[$i]:'FFFFFF';
						$sectionTextCol = (isset($section_text_color[$i]))?$section_text_color[$i]:'666563';
												

						$sectionBAttachement = (isset($sectionBackAttachemetID[$i]))?$sectionBackAttachemetID[$i]:'';
						$sectionBackgroundImage = "";
						if($sectionBAttachement!=''){
							$hBackRes = wp_get_attachment_image_src($sectionBAttachement, 'thumbnail');
							$sectionBackgroundImage = ($hBackRes)?$hBackRes[0]:$sectionBackgroundImage;
						}
						$isSectionBackInputVal = (isset($isSectionBackInput[$i]))?$isSectionBackInput[$i]:'';							
						$isSectionBackInputValChecked = ($isSectionBackInputVal!="false")?' checked':'';

						$isSectionBackFixedInputVal = (isset($isSectionBackFixedInput[$i]))?$isSectionBackFixedInput[$i]:'';							
						$isSectionBackFixedInputValChecked = ($isSectionBackFixedInputVal!="false")?' checked':'';	

						$isSectionBackRepeatInputVal = (isset($isSectionBackRepeatInput[$i]))?$isSectionBackRepeatInput[$i]:'';							
						$isSectionBackRepeatInputValChecked = ($isSectionBackRepeatInputVal!="false")?' checked':'';

						$isSectionArrowDownInputVal = (isset($isSectionArrowDownInput[$i]))?$isSectionArrowDownInput[$i]:'';							
						$isSectionArrowDownInputValChecked = ($isSectionArrowDownInputVal!="false")?' checked':'';	

						$isSectionArrowUpInputVal = (isset($isSectionArrowUpInput[$i]))?$isSectionArrowUpInput[$i]:'';							
						$isSectionArrowUpInputValChecked = ($isSectionArrowUpInputVal!="false")?' checked':'';						
						

						$isSmallArrowInputVal = (isset($isSmallArrowInput[$i]))?$isSmallArrowInput[$i]:'';							
						$isSmallArrowInputValChecked = ($isSmallArrowInputVal!="false")?' checked':'';
						

						$sectionScrollDuration = (isset($section_scroll_duration[$i]))?$section_scroll_duration[$i]:'1000';																								

						//startic ID
						$static_ID = (isset($static_ids[$i]))?$static_ids[$i]:uniqid('gravityslide');
																
					?>
						<!--section group-->
						<div class="px_group">
							 <h3 class="pxSectionTitle"><span class="hTitle"><?php echo $currentTitle;?></span></h3>
							 <div>
							 	<input style="margin-right: 5px;" type='submit' value='Remove section' class='button-secondary pxFloatRight removeSectionBTN' />
							 	
							 	<!--static ID-->
							 	<input style="height: 30px;" class="smallInputText" type="hidden" name="<?php echo $post_custom_meta_data;?>[static_ids][]" value="<?php echo $static_ID;?>" />

							 	<!--section title-->
							 	<div class="sk_admin_row">
							 		<div class="sk_admin_span3">
							 			<p class="pTitle sectionTitleLabel"><strong>Section title</strong></p>							 	
							 			<input style="height: 30px;" class="smallInputText sectionTitleInput" type="text" name="<?php echo $post_custom_meta_data;?>[pTitles][]" value="<?php echo $currentTitle;?>" />
							 		</div>

							 		<div class="sk_admin_span3">
							 				<div class="addToMenuSpace"></div>
											<label class="checkbox">
											  <input class="isAddToMenuCB" type="checkbox"<?php echo $isAddToMenuInputValChecked;?>> Link section to menu
											</label>
											<input class="isAddToMenuInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isAddToMenuInput][]" value="<?php echo $isAddToMenuInputVal; ?>" />
							 		</div>	

							 		<div class="sk_admin_span3">
							 			<div class="addToMenuSpace"></div>
							 				<div class="addToMenuSpace"></div>
											<label class="checkbox">
											  <input class="isExtMenuLinkCB" type="checkbox"<?php echo $isMenuExternalLinkInputValChecked;?>> Is external menu link
											</label>
											<?php												
												$css_display_external = ($isMenuExternalLinkInputVal=="true")?"display: block;":"display: none;";
											?>
											<input class="isMenuExternalLinkInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isMenuExternalLinkInput][]" value="<?php echo $isMenuExternalLinkInputVal; ?>" />
							 				<input class="menuExternalLinkInput" style="<?php echo $css_display_external;?>" placeholder="http://link" type="text" name="<?php echo $post_custom_meta_data;?>[menuExternalLinkInput][]" value="<?php echo $menuExternalLinkInputVal; ?>" />
							 				<input class="menuExternalLinkTarget" style="<?php echo $css_display_external;?>" type="text" name="<?php echo $post_custom_meta_data;?>[menuExternalLinkTarget][]" value="<?php echo $menuExternalLinkTargetVal; ?>" />							 				
							 		</div>							 			

							 		<div class="clear-fx"></div>
							 	</div>
							 	<!--/section title-->
							 	
							 	<div class="phline"></div>

							 	<!--section padding-->
							 	<div class="sk_admin_row">
							 		<div class="sk_admin_span5">
							 			<p class="pTitle"><strong>Padding top</strong></p>
							 			<input style="height: 30px;" class="smallInputText" type="text" name="<?php echo $post_custom_meta_data;?>[pTop][]" value="<?php echo $padding_top;?>" />
							 		</div>

							 		<div class="sk_admin_span5">
							 			<p class="pTitle"><strong>Padding bottom</strong></p>
							 			<input style="height: 30px;" class="smallInputText" type="text" name="<?php echo $post_custom_meta_data;?>[pBottom][]" value="<?php echo $padding_bottom;?>" />
							 		</div>							 		

							 		<div class="clear-fx"></div>
							 	</div>
							 	<!--/section padding-->


							 	<div class="phline"></div>

							 	<!--section background-->
								<div class="sk_admin_row">
									<div class="sk_admin_span3">
											<p class="pTitle"><strong>Section background color</strong></p>
											<input style="height: 30px;" class="smallInputText section_background_color" type="text" name="<?php echo $post_custom_meta_data;?>[section_background_color][]" value="<?php echo $sectionBackground;?>" />
											<p class="pTitle"><strong>Section text color</strong></p>
											<input style="height: 30px;" class="smallInputText section_text_color" type="text" name="<?php echo $post_custom_meta_data;?>[section_text_color][]" value="<?php echo $sectionTextCol;?>" />											
											<div class="spacer10"></div>											
									</div>	

									<div class="sk_admin_span3">
											<p class="pTitle"><strong>Background image</strong></p>	
											<a class="skButton skActionButton" href="#">Upload image</a>						    
										    
										    <p>
										    	<img class="sectionBackgroundImage" src="<?php echo $sectionBackgroundImage;?>" />
										    </p>										    
											<input class="sectionBackAttachemetUI inputText" type="hidden" name="<?php echo $post_custom_meta_data;?>[sectionBackAttachemetID][]" value="<?php echo $sectionBAttachement;?>" />											
									</div>

									<div class="sk_admin_span3">
											<p class="pTitle"><strong>Background settings</strong></p>
											<label class="checkbox">
											  <input class="isSectionBack" type="checkbox"<?php echo $isSectionBackInputValChecked;?>> Use background image
											</label>
											<input class="isSectionBackInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isSectionBackInput][]" value="<?php echo $isSectionBackInputVal;?>" />
											<div class="spacer10"></div>
											<label class="checkbox">
											  <input class="isSectionBackFixed" type="checkbox"<?php echo $isSectionBackFixedInputValChecked;?>> Is background fixed position
											</label>
											<input class="isSectionBackFixedInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isSectionBackFixedInput][]" value="<?php echo $isSectionBackFixedInputVal;?>" />
											<div class="spacer10"></div>										
											<label class="checkbox">
											  <input class="isSectionBackRepeat" type="checkbox"<?php echo $isSectionBackRepeatInputValChecked;?>> Repeat image (only if pattern)
											</label>	
											<input class="isSectionBackRepeatInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isSectionBackRepeatInput][]" value="<?php echo $isSectionBackRepeatInputVal;?>" />																																																					
											
											<div class="spacer10"></div>
											<label class="checkbox checkboxGravity">
											  <input class="isSectionArrowDown" type="checkbox"<?php echo $isSectionArrowDownInputValChecked;?>> Activate section arrow down (only if is background color)
											</label>	
											<input class="isSectionArrowDownInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isSectionArrowDownInput][]" value="<?php echo $isSectionArrowDownInputVal;?>" />												


											<div class="spacer10"></div>
											<label class="checkbox checkboxGravity">
											  <input class="isSmallArrow" type="checkbox"<?php echo $isSmallArrowInputValChecked;?>> Is small arrow down
											</label>
											<input class="isSmallArrowInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isSmallArrowInput][]" value="<?php echo $isSmallArrowInputVal;?>" />	

											<div class="spacer10"></div>
											<label class="checkbox checkboxGravity">
											  <input class="isSectionArrowUp" type="checkbox"<?php echo $isSectionArrowUpInputValChecked;?>> Activate section arrow up (only if is background color)
											</label>	
											<input class="isSectionArrowUpInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isSectionArrowUpInput][]" value="<?php echo $isSectionArrowUpInputVal;?>" />											

									
									</div>									

									<div class="sk_clear_fx"></div>							
								</div>
								<!--section background-->


							 	<div class="phline"></div>
							 	<!--scroll duration-->
							 	<div class="sk_admin_row">
							 		<div class="sk_admin_span5">
											<p class="pTitle"><strong>Section scroll duration (pixels)</strong></p>
											<input style="height: 30px;" class="smallInputText section_scroll_duration" type="text" name="<?php echo $post_custom_meta_data;?>[section_scroll_duration][]" value="<?php echo $sectionScrollDuration;?>" />											
											<div class="spacer10"></div>
									</div>	


							 		<div class="sk_admin_span5">
										<p class="pTitle"><strong>Full width content</strong></p>							 				
											<label class="checkbox">												
												<input class="isFullContentCB" type="checkbox"<?php echo $isFullContentInputValChecked;?>> Is full width content
											</label>			
											<input class="isFullContentInput" type="hidden" name="<?php echo $post_custom_meta_data;?>[isFullContentInput][]" value="<?php echo $isFullContentInputVal; ?>" />							
										<div class="spacer10"></div>
									</div>

									<div class="sk_clear_fx"></div>																		 	
								</div>
								<!--/scroll duration-->								
								<div class="spacer10"></div>


								<!--editor-->
								<div class="custom_editors">									
									<?php
										$editor_content = (isset($editor_contents[$i]))?$editor_contents[$i]:'';
										wp_editor( $editor_content, uniqid('custom_editor'), array("textarea_name"=>$post_custom_meta_data.'[sectionContent][]', "wpautop"=>true));
									?>
								</div>
								<!--/editor-->


							 </div>							 
						</div>
						<!--/section group-->
					<?php endfor;?>
				
				<?php endif;?>
				<!--/if data-->	

			</div>	
			<!--/parallax container-->	
			<input class="dummy" type="hidden" name="<?php echo $post_custom_meta_data;?>[dummy][]" value="" />

		</div>		
		
		<?php
	}
		
		
}


?>