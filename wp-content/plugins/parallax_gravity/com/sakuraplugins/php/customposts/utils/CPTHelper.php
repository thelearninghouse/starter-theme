<?php

class GrpCPTHelper{
	
	public $postArgs;
	public $settings;
	function __construct($settings){
		$this->postArgs = $this->createPostType($settings);
	}
	
	//return valid settings
	public function getSettings(){
		return $this->settings;
	}
	
	//return post args
	public function getPostArgs(){
		return $this->postArgs;
	}
	//create generic post type
	private function createPostType($settings)
	{
		$validSettings = $this->validateSettings($settings);
		$labels = array('name' => $validSettings['name'],
		'singular_name' => $validSettings['singular_name'], 		
		'add_new' => _x($validSettings['add_new'], $validSettings['post_type']),
		'edit_item' => $validSettings['edit_item'],
	    'new_item' => $validSettings['new_item'],  
	    'view_item' => $validSettings['view_item'],  
	    'search_items' => $validSettings['search_items'],  
	    'not_found' =>  $validSettings['not_found'],  
	    'not_found_in_trash' => $validSettings['not_found_in_trash'],  
	    'parent_item_colon' => ''	
		);
	    $args = array(  
	        'labels' => $labels,  
	        'public' => true,  	        
	        'publicly_queryable' => true,  
	        'show_ui' => true,  
	        'query_var' => true,  	        
	        'rewrite' => array('slug'=>$validSettings['rewrite']),
	        'capability_type' => 'post',	        
	        'hierarchical' => false,  
	        'menu_position' => $validSettings['menu_position'],
	        'menu_icon' => $validSettings['menu_icon'],  
	        'supports' => $validSettings['supports'] 
	    );
		return $args;		
	}
	
	//validate post settings
	private function validateSettings($settings){
		$valid = array();
		$valid['post_type'] = $settings['post_type'];
		$valid['name'] = (isset($settings['name']))?$settings['name']:'Custom content';
		$valid['singular_name'] = (isset($settings['singular_name']))?$settings['singular_name']:'Custom content';
		$valid['rewrite'] = (isset($settings['rewrite']))?$settings['rewrite']:'portfolio';
		$valid['add_new'] = (isset($settings['add_new']))?$settings['add_new']:'Add new';
		$valid['edit_item'] = (isset($settings['name']))?$settings['edit_item']:'Edit item';		
		$valid['new_item'] = (isset($settings['new_item']))?$settings['edit_item']:'New item';
		$valid['view_item'] = (isset($settings['view_item']))?$settings['view_item']:'View item';
		$valid['search_items'] = (isset($settings['search_items']))?$settings['search_items']:'Search items';
		$valid['not_found'] = (isset($settings['not_found']))?$settings['not_found']:'Item not found';
		$valid['not_found_in_trash'] = (isset($settings['not_found_in_trash']))?$settings['not_found_in_trash']:'Item not found in trash';
		$valid['menu_position'] = (isset($settings['menu_position']))?$settings['menu_position']:NULL;
		$valid['menu_icon'] = (isset($settings['menu_icon']))?$settings['menu_icon']:NULL;
		$valid['supports'] = (isset($settings['supports']))?$settings['supports']:array('title', 'editor', 'thumbnail');
		return $valid;
	}
	
}

?>