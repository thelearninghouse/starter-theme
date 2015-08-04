<?php
require_once(GRP_CLASS_PATH.'/com/sakuraplugins/php/gravity-engine.php');
$gravity_engine = new GravityFrontEngine(get_the_ID());
$sectionsNo = $gravity_engine->getSectionsNumber();

if($gravity_engine->isPageDeactivated())
	header('Location: '.$gravity_engine->getRedirectURL());

$sectionArrowW = 2100;
$sectionArrowH = 80;
$sectionArrowWSmall = 40;
$sectionArrowHSmall = 30;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="keywords" content="<?php $gravity_engine->_eKeywords();?>">
    <meta name="author" content="">    
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

    <title><?php echo get_the_title();?></title>

    	    <!-- Favicon
	  ================================================== -->   
	  <link rel="shortcut icon" href="<?php echo $gravity_engine->getFavIcon();?>" type="image/x-icon"> 

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css' />
    <?php wp_head(); ?> 
    <style type="text/css">
    	<?php $gravity_engine->_eStyles();?>
    	<?php $gravity_engine->_eCustomCSS();?>    	
    </style>


  </head>

  <body>
  <?php $gravity_engine->_eAnalytics();?>
  	<!--menu-->
  	<?php if($gravity_engine->isMenu()):?>
  		<div id="menuContainer" class="<?php echo ($gravity_engine->isMobile())?'':'invisibleMenu';?>">
	  		<!--container-->
		  	<div class="container">
		  		<div class="row">
		  			<!--if page logo-->
		  			<?php if($gravity_engine->isPageLogo()):?>
			  			<div id="logoUI">
			  				<a href="<?php echo get_permalink(get_the_ID());?>"><img class="logoImage" src="<?php echo $gravity_engine->getLogoSrc();?>" alt=""></a>
			  			</div>
			  		<?php endif;?>
			  		<!--/if page logo-->			  			  			
				  		<ul id="gravityMenuUI" class="<?php echo ($gravity_engine->isPageLogo())?"gravityMenuUIWithLogo":"";?>">
				  			<?php $gravity_engine->_eMenuItems();?>			  			
				  		</ul>
				  		<div class="clear-fx"></div>
		  		</div>
		  	</div>
		  	<!--/container-->
	  	</div>
  	<?php endif;?>
  	<!--/menu-->

	<!--gravity page content-->
	<div class="gravityPage">
	  	<!--sections-->
		<?php for ($i=0; $i < $sectionsNo; $i++):?>
		<?php
			$backSettings = $gravity_engine->getBackgroundSettings($i);
			$menuSectionClass = ($gravity_engine->isMenuSection($i))?' menuSection':'';
		?>	
			<!--section-->
			<div id="<?php echo $gravity_engine->getStaticID($i);?>" data-scrollduration="<?php echo $gravity_engine->getSectionScrollDuration($i);?>" class="gravitySection<?php echo $menuSectionClass;?>" data-hasbackgroundimage="<?php echo $backSettings['hasBackground'];?>" data-backimageurl="<?php echo $backSettings['backImageSrc'];?>" style="<?php echo $gravity_engine->getSectionCSS($i);?>">

				<!--arrow up-->
				<?php if($gravity_engine->isSectionBackgroundArrowTop($i)):?>						
					<div class="gravityUpArrow">
			             <svg width="<?php echo $sectionArrowW;?>" height="<?php echo $sectionArrowH;?>" viewBox="0 0 <?php echo $sectionArrowW;?> <?php echo $sectionArrowH;?>" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">            
			                  <polygon fill-opacity="1" fill="#<?php echo $gravity_engine->getSectionBackgroundColor($i);?>" points="0,0 <?php echo $sectionArrowW/2;?>,<?php echo $sectionArrowH;?> <?php echo $sectionArrowW;?>,0 <?php echo $sectionArrowW;?>,<?php echo $sectionArrowH;?> 0,<?php echo $sectionArrowW;?>" />
			             </svg>
					</div>																	
				<?php endif;?>
				<!--/arrow up-->

				<?php if(!$gravity_engine->isFullWidthContent($i)):?>
				<div class="container">
					<div class="row">
						<div class="col-md-12">					
							<?php echo wpautop(do_shortcode($gravity_engine->getContent($i)));?>
						</div>
					</div>
				</div>
				<?php endif;?>

				<?php if($gravity_engine->isFullWidthContent($i)):?>
						<div>					
							<?php echo wpautop(do_shortcode($gravity_engine->getContent($i)));?>
						</div>
				<?php endif;?>				

				<!--arrow down-->
				<?php if($gravity_engine->isSectionBackgroundArrow($i)):?>	
					<?php if(!$gravity_engine->isSectionArrowSmall($i)):?>	
					<div class="gravityDownArrow">
			             <svg width="<?php echo $sectionArrowW;?>" height="<?php echo $sectionArrowH;?>" viewBox="0 0 <?php echo $sectionArrowW;?> <?php echo $sectionArrowH;?>" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">            
			                  <polygon fill-opacity="1" fill="#<?php echo $gravity_engine->getSectionBackgroundColor($i);?>" points="0,0 <?php echo $sectionArrowW;?>,0 <?php echo $sectionArrowW/2;?>,<?php echo $sectionArrowH;?>" />
			             </svg>
					</div>
					<?php endif;?>
					<?php if($gravity_engine->isSectionArrowSmall($i)):?>
					<div class="gravityDownArrow" style="bottom: -<?php echo $sectionArrowHSmall;?>px;">
			             <svg width="<?php echo $sectionArrowWSmall;?>" height="<?php echo $sectionArrowHSmall;?>" viewBox="0 0 <?php echo $sectionArrowWSmall;?> <?php echo $sectionArrowHSmall;?>" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">            
			                  <polygon fill-opacity="1" fill="#<?php echo $gravity_engine->getSectionBackgroundColor($i);?>" points="0,0 <?php echo $sectionArrowWSmall;?>,0 <?php echo $sectionArrowWSmall/2;?>,<?php echo $sectionArrowHSmall;?>" />
			             </svg>
					</div>					
					<?php endif;?>
				<?php endif;?>
				<!--/arrow down-->

			</div>
			<!--/section-->

		<?php endfor;?>
	  	<!--/sections-->

	</div>
	<!--/gravity page content-->

  	<?php wp_footer(); ?> 
  </body>
</html>
