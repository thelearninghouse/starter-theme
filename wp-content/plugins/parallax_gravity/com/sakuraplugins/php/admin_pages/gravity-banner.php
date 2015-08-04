<?php
$skPluginInfo = get_plugin_data(GRAVITY_FILE, $markup = true, $translate = true );
?>
<div class="gravityBannerSpace"></div>
<div id="gravityBanner">
	<div id="adminLogo"></div>
	<div class="pluginInfo">Version <?php echo $skPluginInfo['Version']?></div>
	<div class="clear-admin"></div>
</div>