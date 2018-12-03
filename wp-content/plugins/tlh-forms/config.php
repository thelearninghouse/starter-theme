<?php

// $githubAppId = '7674';
// $installationId = '77441';
$BASE_URL = 'https://forms.learninghouse.com/embed';
$BASE_QA_URL = 'https://yirga.qa.learninghouse.com/embed';

$githubAppId = '7865';
$installationId = '77706';

$school = get_option('school_name');
$plugin_private_key = get_option('private_key');
$github_token = get_option('github_token');

$privateKey = <<<EOD
$plugin_private_key
EOD;

$tlh_forms_settings_array = array(
	'include_vue_library',
	'include_polyfill',
	'affiliate_id',
	'client_id_index',
	'github_token',
	'private_key',
	'school_name',
	'school_form_id',
	'school_display_name',
	'theme'
);

$fields_array = array(
	array(
		'id' => 'include_vue_library',
		'title' => 'Include Vue Library',
		'callback' => 'textfield',
		'page' => 'theme-options',
		'section' => 'section',
		'args' => array(
			'label_for' => 'include_vue_library'
		)
	),
	array(
		'id' => 'include_polyfill',
		'title' => 'Include Polyfill',
		'callback' => 'textfield',
		'page' => 'theme-options',
		'section' => 'section',
		'args' => array(
			'label_for' => 'include_polyfill'
		)
	),			
 array(
   'id' => 'school_name',
   'title' => 'School Name',
   'callback' => 'textField',
   'page' => 'theme-options',
   'section' => 'section',
   'args' => array(
     'label_for' => 'school_name'
   )
 ),
 array(
   'id' => 'school_form_id',
   'title' => 'School Form ID',
   'callback' => 'textField',
   'page' => 'theme-options',
   'section' => 'section',
   'args' => array(
     'label_for' => 'school_form_id'
   )
 ),
 array(
	 'id' => 'school_display_name',
	 'title' => 'School Display Name',
	 'callback' => 'setting_school_display_name',
	 'page' => 'theme-options',
	 'section' => 'section',
	 'args' => array(
		 'label_for' => 'school_display_name'
	 )
 ),
 array(
	 'id' => 'github_token',
	 'title' => 'Github Token',
	 'callback' => 'textField',
	 'page' => 'theme-options',
	 'section' => 'section',
	 'args' => array(
		 'label_for' => 'github_token'
	 )
 ),
 array(
	'id' => 'private_key',
	'title' => 'Github App Private Key',
	'callback' => 'textField',
	'page' => 'theme-options',
	'section' => 'section',
	'args' => array(
		'label_for' => 'private_key'
	)
 ),
 array(
	 'id' => 'theme',
	 'title' => 'Color Theme For Forms',
	 'callback' => 'textField',
	 'page' => 'theme-options',
	 'section' => 'section',
	 'args' => array(
		 'label_for' => 'theme'
	 )
 ),
 array(
   'id' => 'affiliate_id',
   'title' => 'Affiliate ID',
   'callback' => 'textField',
   'page' => 'theme-options',
   'section' => 'section',
   'args' => array(
     'label_for' => 'affiliate_id'
   )
   ),
   array(
	'id' => 'client_id_index',
	'title' => 'Custom Dimension - Client ID Index',
	'callback' => 'textField',
	'page' => 'theme-options',
	'section' => 'section',
	'args' => array(
	  'label_for' => 'client_id_index'
	)
  )
);

$tlh_forms_meta_array = array(
	'_show_form',
	'_partnership_id',
	'_promotion_id',
	'_event_id',
	'_form_name',
	'_script_id',
	'_script_type',
	'theme'
);

?>
