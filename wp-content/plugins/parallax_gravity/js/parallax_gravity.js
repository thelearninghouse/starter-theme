
(function($) {
  "use strict";  
    jQuery(document).ready(function(){                   
    	var skx_gravity = new SKParallaxGravity();
    	skx_gravity.init();
    });

    var sectionsAC;
    var menuSectionsAC;
    var menuItemsAC;
    var restrictWaypointSelection = false;
    var menuIsOpen = false;
    var openAtPosition = 90;
    function SKParallaxGravity(){
        sectionsAC = new Array();   
        menuSectionsAC = new Array();
        menuItemsAC = new Array();             
    	var isMobileDevice = false;
    	var controller;
    	var animationEFX = Quad.easeOut;        
    	this.init = function(){    		            
    		isMobileDevice = (GRAVITY_PARALLAX_DATA.isMobileDevice=="true")?true:false; 
            gravityMoveDeactivate(isMobileDevice);  
    		interateSections();            
            handleArrowsDisplacement();
    		controller = jQuery.superscrollorama();
            if(!isMobileDevice){
              pinSlides();
            } 
            basicNavigation();  
            handleGravityButtons();
            handleNavWrappers();            		
    	}

        //add navigation
        function basicNavigation(){
            if(jQuery('#gravityMenuUI').length==0)
                return;
            jQuery('.menuItemCls').each(function(indx){
                menuItemsAC.push(jQuery(this));
                jQuery(this).click(function(e){
                    e.preventDefault();
                    if(jQuery(this).attr('data-external')=="true"){
                        var targetURL = jQuery(this).attr('data-external-url');
                        window.open(targetURL, jQuery(this).attr('data-external-target'));
                        return;
                    }
                    restrictWaypointSelection = true;
                    selectMenuItem(indx);
                    jQuery('body, html').animate({scrollTop:menuSectionsAC[indx].position().top}, 1000, 'easeInOutQuad', function() { 
                       restrictWaypointSelection = false;                                             
                    });                    
                });                
            });
            initWaypoints();
            initMenuEfx();
        }

        //parallax items if mobile
        function gravityMoveDeactivate(mobile){
            if(!mobile)
                return;
            jQuery('.gravityMove').each(function(indx){
                jQuery(this).css('visibility', 'visible');
            });
        }

        function handleNavWrappers(){
            jQuery('.gravity_nav_wrapper').each(function(indx){
                try{
                jQuery(this).find('.gravity_button').click(function(e){                    
                    e.preventDefault();                    
                });
                }catch(e){colsole.log(e)};
                jQuery(this).click(function(e){
                    e.stopPropagation();
                    e.preventDefault();                    
                    var slideMap = jQuery(this).attr('data-slideno');
                    try{
                        restrictWaypointSelection = true;                    
                        jQuery('body, html').animate({scrollTop:sectionsAC[parseInt(slideMap)].position().top}, 1000, 'easeInOutQuad', function() { 
                           restrictWaypointSelection = false;                                             
                        }); 
                    }catch(e){console.log(e)}                   
                });
            });
        }

        //handle gravity buttons
        function handleGravityButtons(){
            jQuery('.gravity_button').each(function(indx){
                var hoverCol = jQuery(this).attr('data-hover');
                var originalCol = jQuery(this).css('backgroundColor');
                jQuery(this).hover(function(e){
                    TweenMax.to(jQuery(this), .2, {css:{backgroundColor: hoverCol}, ease:Power4.EaseIn});
                }, function(e){
                    TweenMax.to(jQuery(this), .2, {css:{backgroundColor: originalCol}, ease:Power4.EaseIn});
                });
            });
        }

        //init waypoints
        function initWaypoints(){
            for (var i = 0; i < menuSectionsAC.length; i++) {
                menuSectionsAC[i].waypoint(function(direction) {  
                    if(!restrictWaypointSelection)                
                        selectMenuItem(parseInt(jQuery(this).attr('data-countIndx'))-1);
                }, {offset: -3});                                
            };
        }

        //menu efx
        function initMenuEfx(){
            if(isMobileDevice)
                return;

            jQuery('#menuContainer').css('opacity', 0);
            jQuery('#menuContainer').css('visibility', 'visible');

            jQuery(window).on('scroll', function(){
                if(jQuery(document).scrollTop()>openAtPosition){
                    if(!menuIsOpen){
                        menuIsOpen = true;
                        //show menu
                        TweenMax.to(jQuery('#menuContainer'), .2, {css:{opacity:0, top: -jQuery('#menuContainer').height()}, ease:Power4.EaseIn}); 
                        TweenMax.to(jQuery('#menuContainer'), .2, {css:{opacity:1, top: 0}, ease:Power4.EaseIn});                      
                    }
                }
                if(jQuery(document).scrollTop()<openAtPosition){
                    if(menuIsOpen){
                        menuIsOpen = false;
                        //hide menu
                        TweenMax.to(jQuery('#menuContainer'), .2, {css:{opacity:0, top: -jQuery('#menuContainer').height()}, ease:Power4.EaseIn});                    
                    }
                }            
            });            
        }

        function selectMenuItem(index){
            for (var i = 0; i < menuItemsAC.length; i++) {
                menuItemsAC[i].removeClass('selectedMenuItem');
                if(i==index)
                    menuItemsAC[i].addClass('selectedMenuItem');
            };
        }

        //handle arrows displacement
        function handleArrowsDisplacement(){
            //gravityDownArrow           
            jQuery('.gravityDownArrow').each(function(indx){
                jQuery(this).css('left', jQuery('.gravityPage').width()/2-jQuery(this).width()/2+'px');                            
            });            
            jQuery('.gravityUpArrow').each(function(indx){
                jQuery(this).css('left', jQuery('.gravityPage').width()/2-jQuery(this).width()/2+'px');                
            });                         
        }

        jQuery(window).resize(function(){          
            handleArrowsDisplacement();
        });          

        //extract data
        function extractData(st){
            return st.split("/");
        }
        //build object
        function buildObj(st){
            return eval("("+st+")");
        }
        function pinSlides(){

            var firstSection = false;
            jQuery('.gravitySection').each(function(indx){
                var slideId = jQuery(this).attr('id');
                var slideScroll = parseInt(jQuery(this).attr('data-scrollduration'));
                var pinAnimations = new TimelineLite();

                var itemsExists = false;
                //search for gravity move items
                jQuery('#'+slideId+' .gravityMove').each(function(index){
                    var data_efx = jQuery(this).attr('data-efx');
                    var duration = parseFloat(jQuery(this).attr('data-duration'));                    

                    if(data_efx!=undefined && data_efx!=""){
                        var EFXs = extractData(data_efx);
                        var currentMoveID = jQuery(this).attr('id');

                        var currentEfxObj;
                        //if more than one effect raw data
                        if(EFXs.length>1){ 
                            itemsExists = true;
                            for (var i = 0; i < EFXs.length; i++) {
                                //var currentEfxObj=eval("("+EFXs[0]+")");
                                var currentEfxObj=buildObj(EFXs[i]);
                                if(i==0){
                                    pinAnimations.append(
                                      TweenMax.fromTo(jQuery('#'+currentMoveID), duration, 
                                        {css:currentEfxObj, immediateRender:true}, 
                                        {css:buildObj(EFXs[1])})
                                    );                                    
                                }
                                if(i!=0&&i!=1){
                                    pinAnimations.append(
                                      TweenMax.to(jQuery('#'+currentMoveID), duration, 
                                        {css:currentEfxObj})
                                    )                                     
                                }
                            };
                            
                        }
                        //end if more than one effect raw data
                    }
                });
                //end search for gravity move items

                if(itemsExists){
                    controller.pin($('#'+slideId), slideScroll, {
                      anim: pinAnimations
                    });
                    jQuery('.gravitySection').each(function(indxx){
                        var slideId = jQuery(this).attr('id');
                        jQuery('#'+slideId+' .gravityMove').each(function(index){
                            jQuery(this).css('visibility', 'visible');
                        });
                    })
                }
            });
        }
    	//objects EFX
    	function gravitateFrom(){    		
    		jQuery('.gravityFrom').each(function(indx){    			
    			var rawData = jQuery(this).find('.jsData').html();   
    			jQuery(this).find('.jsData').remove(); 	
    			var duration = jQuery(this).attr('data-duration');	
                try{	    			
    			var obj = jQuery.parseJSON(rawData);    		                
    			controller.addTween('#'+jQuery(this).attr('id'), TweenMax.from( jQuery(this), duration, {css: obj, ease:animationEFX}));
                }catch(e){console.log('invalid JSON 43589');}
    		});
    	}
    	function gravitatePin(){    		
    		jQuery('.gravityPin').each(function(indx){    			
    			var rawData = jQuery(this).find('.jsData').html();   
    			jQuery(this).find('.jsData').remove(); 	
    			var duration = jQuery(this).attr('data-duration');		    			
                try{
    			var obj = jQuery.parseJSON(rawData);
    			var scrollDuration = jQuery(this).attr('data-scrollduration');    			    			
    			controller.addTween('#'+jQuery(this).attr('id'), TweenMax.from( jQuery(this), duration, {css: obj, ease:animationEFX}), parseInt(scrollDuration));  			
                }catch(e){console.log('invalid JSON 2817');}
    		});
    	}    	


    	function interateSections(){
            var countMenuSections = 0;
    		jQuery('.gravitySection').each(function(indx){
    			if(isMobileDevice){
    				checkBackgroundOnMobile(jQuery(this));
    			}
                sectionsAC.push(jQuery(this));
                if(jQuery(this).hasClass('menuSection')){
                    countMenuSections++;
                    jQuery(this).attr('data-countIndx', countMenuSections);
                    menuSectionsAC.push(jQuery(this));                                        
                }
    		});
    	}

    	//add support for background for mobile devices
    	function checkBackgroundOnMobile(section){
    		if(section.attr('data-hasbackgroundimage')=="true"){
    			section.backstretch(section.attr('data-backimageurl'));     			
    		}
    	}
    }




})(jQuery);