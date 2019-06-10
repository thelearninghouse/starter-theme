<?php
// create custom plugin settings menu
add_action( 'admin_menu', 'tlh_create_resources_menu' );

function tlh_create_resources_menu() {
	//create new top-level menu
	add_menu_page( 'Resources', 'Resources', 'manage_options', 'resources', 'tlh_resources_overview_page', 'dashicons-index-card', 30 );
}

function tlh_resources_overview_page() {
	?>
<div class="wrap">
<h1>Resources</h1>
<p>Select a resource type to add/edit.</p>
</div>
<?php } ?>
