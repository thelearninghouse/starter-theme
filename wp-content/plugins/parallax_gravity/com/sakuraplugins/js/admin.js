jQuery(document).ready(function(){    
    var gravityAdmin = new ParallaxGrajvityAdmin();
    gravityAdmin.init();
});

function ParallaxGrajvityAdmin(){
	window.restore_send_to_editor = window.send_to_editor; 

	this.init = function(){				
		if(jQuery("#parallax_accordion").length==0)
			return;
		jQuery("#parallax_accordion")
		.accordion({
		heightStyle: "content",
		header: "> div > h3"
		, collapsible: true})
		.sortable({
		axis: "y",
		handle: "h3",
		stop: function( event, ui ) {
		// IE doesn't register the blur when sorting
		// so trigger focusout handlers to remove .ui-state-focus
		ui.item.children( "h3" ).triggerHandler( "focusout" );
		}
		});
	
		handleAllSections();

		jQuery('#addSectionBTN').click(function(e){
			e.preventDefault();
			addNewSection();
		});

		jQuery('#removeAllSectionBTN').click(function(e){
			e.preventDefault();
			if(confirm('Are you sure you want to remove all parallax sections?')){
				jQuery('#parallax_accordion').empty();
				jQuery('#removeAllSectionBTN').css('display', 'none');
				jQuery( "#parallax_accordion" ).accordion( "refresh" ); 
			}
		});
		if(jQuery( "#parallax_accordion" ).children().length==0){
			jQuery('#removeAllSectionBTN').css('display', 'none');	
		}		
		handlePageOptions();		
	}


	function handleAllSections(){
		jQuery('.px_group').each(function(indx){
			handleSectionBackground(jQuery(this));	
			addSectionEvents(jQuery(this));	
			jQuery('#removeAllSectionBTN').css('display', 'block');	
		});		
	}


	//add new section
	function addNewSection(){
		jQuery('#removeAllSectionBTN').css('display', 'block');	
		var post_custom_meta_data = jQuery('#sk_sectionsUI').attr("data-postmeta");
		var groupHTML = "";

						groupHTML += '<div class="px_group">';							 
							 groupHTML += '<h3 class="pxSectionTitle"><span class="hTitle">Section</span></h3>';
							 groupHTML += '<div>';
							 	groupHTML += '<input style="margin-right: 5px;" type="submit" value="Remove section" class="button-secondary pxFloatRight removeSectionBTN" />';
							 	
							 	groupHTML += '<!--section title-->';
							 	groupHTML += '<div class="sk_admin_row">';
							 		groupHTML += '<div class="sk_admin_span3">';
							 			groupHTML += '<p class="pTitle sectionTitleLabel"><strong>Section title</strong></p>';							 	
							 			groupHTML += '<input style="height: 30px;" class="smallInputText sectionTitleInput" type="text" name="'+post_custom_meta_data+'[pTitles][]" value="Section" />';
							 		groupHTML += '</div>';

							 		groupHTML += '<div class="sk_admin_span3">';
							 				groupHTML += '<div class="addToMenuSpace"></div>';
											groupHTML += '<label class="checkbox">';
											  groupHTML += '<input class="isAddToMenuCB" type="checkbox"> Link section to menu';
											groupHTML += '</label>';
											groupHTML += '<input class="isAddToMenuInput" type="hidden" name="'+post_custom_meta_data+'[isAddToMenuInput][]" value="false" />';
							 		groupHTML += '</div>';

							 		groupHTML += '<div class="sk_admin_span3">';
							 			groupHTML += '<div class="addToMenuSpace"></div>';
							 				groupHTML += '<div class="addToMenuSpace"></div>';
											groupHTML += '<label class="checkbox">';
											  groupHTML += '<input class="isExtMenuLinkCB" type="checkbox"> Is external menu link';
											groupHTML += '</label>';
											groupHTML += '<input class="isMenuExternalLinkInput" type="hidden" name="'+post_custom_meta_data+'[isMenuExternalLinkInput][]" value="" />';
							 				groupHTML += '<input class="menuExternalLinkInput" style="display: none;" placeholder="http://link" type="text" name="'+post_custom_meta_data+'[menuExternalLinkInput][]" value="" />';
							 				groupHTML += '<input class="menuExternalLinkTarget" style="display: none;" type="text" name="'+post_custom_meta_data+'[menuExternalLinkTarget][]" value="_blank" />';							 			
							 		groupHTML += '</div>';							 				

							 		groupHTML += '<div class="clear-fx"></div>';
							 	groupHTML += '</div>';
							 	groupHTML += '<!--/section title-->';
							 	
							 	groupHTML += '<div class="phline"></div>';

							 	groupHTML += '<!--section padding-->';
							 	groupHTML += '<div class="sk_admin_row">';
							 		groupHTML += '<div class="sk_admin_span5">';
							 			groupHTML += '<p class="pTitle"><strong>Padding top</strong></p>';
							 			groupHTML += '<input style="height: 30px;" class="smallInputText" type="text" name="'+post_custom_meta_data+'[pTop][]" value="80" />';
							 		groupHTML += '</div>';

							 		groupHTML += '<div class="sk_admin_span5">';
							 			groupHTML += '<p class="pTitle"><strong>Padding bottom</strong></p>';
							 			groupHTML += '<input style="height: 30px;" class="smallInputText" type="text" name="'+post_custom_meta_data+'[pBottom][]" value="80" />';
							 		groupHTML += '</div>';							 		

							 		groupHTML += '<div class="clear-fx"></div>';
							 	groupHTML += '</div>';
							 	groupHTML += '<!--/section padding-->';

							 	groupHTML += '<div class="phline"></div>';

							 	groupHTML += '<!--section background-->';
								groupHTML += '<div class="sk_admin_row">';
									groupHTML += '<div class="sk_admin_span3">';
											groupHTML += '<p class="pTitle"><strong>Section background color</strong></p>';
											groupHTML += '<input style="height: 30px;" class="smallInputText section_background_color" type="text" name="'+post_custom_meta_data+'[section_background_color][]" value="FFFFFF" />';
											groupHTML += '<p class="pTitle"><strong>Section text color</strong></p>';
											groupHTML += '<input style="height: 30px;" class="smallInputText section_text_color" type="text" name="'+post_custom_meta_data+'[section_text_color][]" value="666563" />';																						
											groupHTML += '<div class="spacer10"></div>';											
									groupHTML += '</div>';	

									groupHTML += '<div class="sk_admin_span3">';
											groupHTML += '<p class="pTitle"><strong>Background image</strong></p>';							    
										    groupHTML += '<input class="uploadSectionBackgroundBTN" type="submit" value="Upload image" class="button-secondary" />';					    		
										    groupHTML += '<p>';
										    	groupHTML += '<img class="sectionBackgroundImage" src="" />';
										    groupHTML += '</p>';										    
											groupHTML += '<input class="sectionBackAttachemetUI" class="inputText" type="hidden" name="'+post_custom_meta_data+'[sectionBackAttachemetID][]" value="" />';											
									groupHTML += '</div>';

									groupHTML += '<div class="sk_admin_span3">';
											groupHTML += '<p class="pTitle"><strong>Background settings</strong></p>';
											groupHTML += '<label class="checkbox">';
											  groupHTML += '<input class="isSectionBack" type="checkbox"> Use background image';
											groupHTML += '</label>';
											groupHTML += '<input class="isSectionBackInput" type="hidden" name="'+post_custom_meta_data+'[isSectionBackInput][]" value="false" />';
											groupHTML += '<div class="spacer10"></div>';
											groupHTML += '<label class="checkbox">';
											  groupHTML += '<input class="isSectionBackFixed" type="checkbox"> Is background fixed position';
											groupHTML += '</label>';
											groupHTML += '<input class="isSectionBackFixedInput" type="hidden" name="'+post_custom_meta_data+'[isSectionBackFixedInput][]" value="false" />';
											groupHTML += '<div class="spacer10"></div>';										
											groupHTML += '<label class="checkbox">';
											  groupHTML += '<input class="isSectionBackRepeat" type="checkbox"> Repeat image (only if pattern)';
											groupHTML += '</label>';
											groupHTML += '<input class="isSectionBackRepeatInput" type="hidden" name="'+post_custom_meta_data+'[isSectionBackRepeatInput][]" value="false" />';	

											groupHTML += '<div class="spacer10"></div>';
											groupHTML += '<label class="checkbox checkboxGravity">';
											  groupHTML += '<input class="isSectionArrowDown" type="checkbox"> Activate section arrow down (only if is background color)';
											groupHTML += '</label>';	
											groupHTML += '<input class="isSectionArrowDownInput" type="hidden" name="'+post_custom_meta_data+'[isSectionArrowDownInput][]" value="false" />';

											groupHTML += '<div class="spacer10"></div>';
											groupHTML += '<label class="checkbox checkboxGravity">';
											  groupHTML += '<input class="isSmallArrow" type="checkbox"> Is small arrow down';
											groupHTML += '</label>';	
											groupHTML += '<input class="isSmallArrowInput" type="hidden" name="'+post_custom_meta_data+'[isSmallArrowInput][]" value="false" />';

											groupHTML += '<div class="spacer10"></div>';
											groupHTML += '<label class="checkbox checkboxGravity">';
											  groupHTML += '<input class="isSectionArrowUp" type="checkbox"> Activate section arrow up (only if is background color)';
											groupHTML += '</label>';	
											groupHTML += '<input class="isSectionArrowUpInput" type="hidden" name="'+post_custom_meta_data+'[isSectionArrowUpInput][]" value="false" />';																						

									groupHTML += '</div>';								

									groupHTML += '<div class="sk_clear_fx"></div>';							
								groupHTML += '</div>';
								groupHTML += '<!--section background-->';

							 	groupHTML += '<div class="phline"></div>';
							 	groupHTML += '<!--scroll duration-->';
							 	groupHTML += '<div class="sk_admin_row">';
							 		groupHTML += '<div class="sk_admin_span5">';
											groupHTML += '<p class="pTitle"><strong>Section scroll duration (pixels)</strong></p>';
											groupHTML += '<input style="height: 30px;" class="smallInputText section_scroll_duration" type="text" name="'+post_custom_meta_data+'[section_scroll_duration][]" value="1000" />';											
											groupHTML += '<div class="spacer10"></div>';
									groupHTML += '</div>';

							 		groupHTML += '<div class="sk_admin_span5">';
											groupHTML += '<p class="pTitle"><strong>Full width content</strong></p>';							 				
												groupHTML += '<label class="checkbox">';
												  groupHTML += '<input class="isFullContentCB" type="checkbox"> Is full width content';
												groupHTML += '</label>';	
												groupHTML += '<input class="isFullContentInput" type="hidden" name="'+post_custom_meta_data+'[isFullContentInput][]" value="false" />';									
											groupHTML += '<div class="spacer10"></div>';
									groupHTML += '</div>';

									groupHTML += '<div class="sk_clear_fx"></div>';														 	
								groupHTML += '</div>';
								groupHTML += '<!--/scroll duration-->';								
								groupHTML += '<div class="spacer10"></div>';								

								groupHTML += '<!--editor-->';
								groupHTML += '<div class="custom_editors">';
									groupHTML += '<p class="sk_notice"><strong>NOTE!</strong> In order to display the editor please save/update the page first.</p>';
								groupHTML += '</div>';
								groupHTML += '<!--/editor-->';

								groupHTML += '<!--fake textarea-->';
								groupHTML += '<textarea class="fakeTextArea" name="'+post_custom_meta_data+'[sectionContent][]"></textarea>';
								groupHTML += '<!--/fake textarea-->';																

							 groupHTML += '</div>';							 
						groupHTML += '</div>';



		var groupUI = jQuery(groupHTML);
		groupUI.appendTo(jQuery("#parallax_accordion"));		
		addSectionEvents(groupUI);
		handleSectionBackground(groupUI);
		jQuery( "#parallax_accordion" ).accordion( "refresh" );		
	}


	function addSectionEvents(section){
		//handle checkboxes
		var isAddToMenuCB = section.find('.isAddToMenuCB');
        isAddToMenuCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isAddToMenuInput').val(this.checked);
        });

        //external menu link
		var isExtMenuLinkCB = section.find('.isExtMenuLinkCB');
        isExtMenuLinkCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isMenuExternalLinkInput').val(this.checked);
            if(this.checked){
            	jQuery(this).parent().parent().find('.menuExternalLinkInput').css('display', 'block');
            	jQuery(this).parent().parent().find('.menuExternalLinkTarget').css('display', 'block');
            }else{
            	jQuery(this).parent().parent().find('.menuExternalLinkInput').css('display', 'none');
            	jQuery(this).parent().parent().find('.menuExternalLinkTarget').css('display', 'none');
            }
        });	        	

		var isFullContentCB = section.find('.isFullContentCB');
        isFullContentCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isFullContentInput').val(this.checked);
        });	        	

		var isBackCB = section.find('.isSectionBack');
        isBackCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isSectionBackInput').val(this.checked);
        });
		var isBackFixedCB = section.find('.isSectionBackFixed');
        isBackFixedCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isSectionBackFixedInput').val(this.checked);
        });
		var isBackRepeatCB = section.find('.isSectionBackRepeat');
        isBackRepeatCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isSectionBackRepeatInput').val(this.checked);
        }); 

		var isBackArrowCB = section.find('.isSectionArrowDown');
        isBackArrowCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isSectionArrowDownInput').val(this.checked);
        });  

		var isBackArrowUpCB = section.find('.isSectionArrowUp');
        isBackArrowUpCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isSectionArrowUpInput').val(this.checked);
        });

		var isBackArrowUpCB = section.find('.isSmallArrow');
        isBackArrowUpCB.change(function(){            	                  
            jQuery(this).parent().parent().find('.isSmallArrowInput').val(this.checked);
        });                                  		                         		

		section.find('.removeSectionBTN').click(function(e){
			e.preventDefault();
			if(confirm('Are you sure you want to remove current section?')){
				jQuery(this).parent().parent().remove();
				jQuery( "#parallax_accordion" ).accordion( "refresh" );	
				if(jQuery( "#parallax_accordion" ).children().length==0){
					jQuery('#removeAllSectionBTN').css('display', 'none');	
				}
			}
		});
		//title change
		var titleInputUi = section.find('.sectionTitleInput');
			titleInputUi.bind('keyup', function(){				
				jQuery(this).parent().parent().parent().parent().find('.hTitle').html(jQuery(this).val());				
			});

		var callerBTN;
		//background upload
        section.find('.skButton').click(function(e){
            e.preventDefault();
            callerBTN = jQuery(this);
            SKMediaUpload.startUplod(true, function(data){            	
	            callerBTN.parent().find('.sectionBackgroundImage').attr('src', data[0].iconUrl);
	            callerBTN.parent().find('.sectionBackAttachemetUI').val(data[0].id); 
	            jQuery( "#parallax_accordion" ).accordion( "refresh" );             	
            });
            return;      
        }); 
	}

    var sendToEditorCustom = function(html){
        var originalImage = jQuery(html).attr('href');
        var thumbImage = jQuery(html).find('img').attr('src');
        var imgid = jQuery(html).find('img').attr('class');
        var imageID = imgid.slice( ( imgid.search(/wp-image-/) + 9 ), imgid.length );
        imageSelectedCallback(originalImage, thumbImage, imageID);
        tb_remove();          
    }	


	//handle section background
	function handleSectionBackground(section){
		var backgroundColorUI = section.find('.section_background_color');

		backgroundColorUI.colpick({
			layout:'hex',
			submit:0,
			colorScheme:'dark',
			color: backgroundColorUI.val(),
			onChange:function(hsb,hex,rgb,el,bySetColor) {
				jQuery(el).css('border-color','#'+hex);
				// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
				if(!bySetColor) jQuery(el).val(hex);
			}
		}).keyup(function(){
			jQuery(this).colpickSetColor(this.value);
		});	

		var section_text_color = section.find('.section_text_color');
		section_text_color.colpick({
			layout:'hex',
			submit:0,
			color: section_text_color.val(),
			colorScheme:'dark',
			onChange:function(hsb,hex,rgb,el,bySetColor) {
				jQuery(el).css('border-color','#'+hex);
				// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
				if(!bySetColor) jQuery(el).val(hex);
			}
		}).keyup(function(){
			jQuery(this).colpickSetColor(this.value);
		});			
    			
	}


	//handle page options
	function handlePageOptions(){
		//menu
		//showMenuCheckbox		
        jQuery('#showMenuCheckbox').change(function(){            	                  
            if(this.checked){
            	jQuery('#menuRelatedOptions').removeClass('hideMe');
            }else{
            	jQuery('#menuRelatedOptions').addClass('hideMe');
            }
        });

		jQuery("#option_tabs").tabs({ active: 0 });	

		jQuery("#menuBackgroundColor").colpick({
			layout:'hex',
			submit:0,
			color: jQuery("#menuBackgroundColor").val(),
			colorScheme:'dark',
			onChange:function(hsb,hex,rgb,el,bySetColor) {
				jQuery(el).css('border-color','#'+hex);
				// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
				if(!bySetColor) jQuery(el).val(hex);
			}
		}).keyup(function(){
			jQuery(this).colpickSetColor(this.value);
		});	

		jQuery("#menuPageColor").colpick({
			layout:'hex',
			submit:0,
			color: jQuery("#menuPageColor").val(),
			colorScheme:'dark',
			onChange:function(hsb,hex,rgb,el,bySetColor) {
				jQuery(el).css('border-color','#'+hex);
				// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
				if(!bySetColor) jQuery(el).val(hex);
			}
		}).keyup(function(){
			jQuery(this).colpickSetColor(this.value);
		});

		jQuery("#menuSelectedColor").colpick({
			layout:'hex',
			submit:0,
			color: jQuery("#menuSelectedColor").val(),
			colorScheme:'dark',
			onChange:function(hsb,hex,rgb,el,bySetColor) {
				jQuery(el).css('border-color','#'+hex);
				// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
				if(!bySetColor) jQuery(el).val(hex);
			}
		}).keyup(function(){
			jQuery(this).colpickSetColor(this.value);
		});		


		//logo upload
        jQuery('#skUploadLogo').click(function(e){
            e.preventDefault();
            window.send_to_editor = sendToEditorCustom;
            imageSelectedCallback = capturePageLogoUpload;  
            tb_show('Upload image', 'media-upload.php?post_id=0&type=image&TB_iframe=true', false);  
            return false;        
        });
         
        var capturePageLogoUpload = function(originalImage, thumbImage, imageID){
	            jQuery('#pageLogoImage').attr('src', thumbImage);
	            jQuery('#pageLogoImageID').val(imageID);           
	            window.send_to_editor = window.restore_send_to_editor;          	
        }
		//favicon upload
        jQuery('#skUploadFavico').click(function(e){
            e.preventDefault();
            window.send_to_editor = sendToEditorCustom;
            imageSelectedCallback = capturePageFavUpload;  
            tb_show('Upload image', 'media-upload.php?post_id=0&type=image&TB_iframe=true', false);  
            return false;        
        });
         
        var capturePageFavUpload = function(originalImage, thumbImage, imageID){
	            jQuery('#pageFavImage').attr('src', thumbImage);
	            jQuery('#pageFavImageID').val(imageID);           
	            window.send_to_editor = window.restore_send_to_editor;          	
        }


	}

}


//upload
function SKMediaUploadCls(){

	this.startUplod = function(isMultiple, callBack){
    	var send_attachment_bkp = wp.media.editor.send.attachment;
	    var frame = wp.media({
	        title: "Select Images",
	        multiple: isMultiple,
	        library: { type: 'image' },
	        button : { text : 'add image' }
	    });
        frame.on('close',function() {                        
            var selection = frame.state().get('selection');
            if(selection.length==0)
            	return; 
            var data = new Array();
            selection.each(function(attachment) { 
	            var iconUrl = 'http://placehold.it/150x150';    
	           	if(attachment.attributes.sizes.thumbnail!=undefined){
	               iconUrl = (attachment.attributes.sizes.thumbnail.url!='')?attachment.attributes.sizes.thumbnail.url:iconUrl;
	           	}             	
            	data.push({id:attachment.id, iconUrl:iconUrl});            	                                                     
            });
            callBack(data);
            wp.media.editor.send.attachment = send_attachment_bkp;
        });	
        frame.open();
        return false;    
	}		
}
var SKMediaUpload = new SKMediaUploadCls();


