<?php

namespace Yoast\AcfAnalysis\Tests\Configuration;

use Brain\Monkey;
use Brain\Monkey\Functions;
use Brain\Monkey\Filters;

class ConfigurationTest extends \PHPUnit_Framework_TestCase {

	protected function setUp() {
		parent::setUp();
		Monkey\setUp();
	}

	public function testEmpty() {

		$version = '4.0.0';

		Functions\expect( 'get_option' )
			->once()
			->with( 'acf_version' )
			->andReturn( $version );

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store()
		);

		$this->assertSame(
			[
				'pluginName'     => \Yoast_ACF_Analysis_Facade::get_plugin_name(),
				'acfVersion'     => $version,
				'scraper'        => [],
				'refreshRate'    => 1000,
				'blacklistType'  => [],
				'blacklistName'  => [],
				'fieldSelectors' => [],
				'debug'          => false,
			],
			$configuration->to_array()
		);

	}

	public function testBlacklistTypeFilter() {

		$blacklist_type = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			$blacklist_type,
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store()
		);

		$blacklist_type2 = new \Yoast_ACF_Analysis_String_Store();

		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'blacklist_type' ) )
			->once()
			->with( $blacklist_type )
			->andReturn( $blacklist_type2 );

		$this->assertSame( $blacklist_type2, $configuration->get_blacklist_type() );

	}

	public function testBlacklistTypeFilterInvalid() {

		$store = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			$store,
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store()
		);

		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'blacklist_type' ) )
			->once()
			->with( $store )
			->andReturn( '' );

		$this->assertSame( $store, $configuration->get_blacklist_type() );
	}

	public function testBlacklistNameFilter() {

		$blacklist_name = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			$blacklist_name,
			new \Yoast_ACF_Analysis_String_Store()
		);

		$blacklist_name2 = new \Yoast_ACF_Analysis_String_Store();

		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'blacklist_name' ) )
			->once()
			->with( $blacklist_name )
			->andReturn( $blacklist_name2 );

		$this->assertSame( $blacklist_name2, $configuration->get_blacklist_name() );
	}

	public function testLegacyBlackistNameFilter() {

		$blacklist_name = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			$blacklist_name,
			new \Yoast_ACF_Analysis_String_Store()
		);

		Filters\expectApplied( 'ysacf_exclude_fields' )
			->once()
			->with( [] )
			->andReturn( [] );

		$this->assertSame( $configuration->get_blacklist_name(), $blacklist_name );


		Filters\expectApplied( 'ysacf_exclude_fields' )
			->once()
			->with( [] )
			->andReturn( [] );

		$this->assertSame( $configuration->get_blacklist_name()->to_array(), [] );


		Filters\expectApplied( 'ysacf_exclude_fields' )
			->once()
			->with( [] )
			->andReturn( [ 'some_field_name' ] );

		$this->assertSame( $configuration->get_blacklist_name()->to_array(), [ 'some_field_name' ] );
	}

	public function testLegacyBlackistNameFilterInvalid() {

		$blacklist_name = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			$blacklist_name,
			new \Yoast_ACF_Analysis_String_Store()
		);

		Filters\expectApplied( 'ysacf_exclude_fields' )
			->once()
			->with( [] )
			->andReturn( 'invalid' );

		$this->assertSame( $configuration->get_blacklist_name(), $blacklist_name );

		Filters\expectApplied( 'ysacf_exclude_fields' )
			->once()
			->with( [] )
			->andReturn( 'invalid' );

		$this->assertSame( $configuration->get_blacklist_name()->to_array(), [] );
	}

	public function testBlacklistNameFilterInvalid() {

		$store = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			$store,
			new \Yoast_ACF_Analysis_String_Store()
		);

		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'blacklist_name' ) )
			->once()
			->with( $store )
			->andReturn( '' );

		$this->assertSame( $store, $configuration->get_blacklist_name() );
	}

	public function testScraperConfigFilter(){
		$config = array();
		$blacklist = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			$blacklist,
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store()
		);

		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'scraper_config' ) )
			->once()
			->with( array() )
			->andReturn( $config );

		$this->assertSame( $config, $configuration->get_scraper_config() );
	}

	public function testInvalidScraperConfigFilter(){
		$blacklist = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			$blacklist,
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store()
		);

		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'scraper_config' ) )
			->once()
			->with( array() )
			->andReturn( '' );

		$this->assertSame( array(), $configuration->get_scraper_config() );
	}

	public function testRefreshRateFilter() {
		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'refresh_rate' ) )
			->once()
			->with( 1000 )
			->andReturn( 9999 );

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store()
		);

		$this->assertSame( 9999, $configuration->get_refresh_rate() );
	}

	public function testRefreshRateMinimumValueFilter() {
		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'refresh_rate' ) )
			->once()
			->with( 1000 )
			->andReturn( 1 );

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store()
		);

		$this->assertSame( 200, $configuration->get_refresh_rate() );
	}

	public function testFieldSelectorsFilter(){
		$custom_store = new \Yoast_ACF_Analysis_String_Store();
		$field_selector = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store(),
			$field_selector
		);

		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'field_selectors' ) )
			->once()
			->with( $field_selector )
			->andReturn( $custom_store );

		$this->assertSame( $custom_store, $configuration->get_field_selectors() );
	}

	public function testFieldSelectorsFilterInvalid() {

		$store = new \Yoast_ACF_Analysis_String_Store();

		$configuration = new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store(),
			$store
		);

		Filters\expectApplied( \Yoast_ACF_Analysis_Facade::get_filter_name( 'field_selectors' ) )
			->once()
			->with( $store )
			->andReturn( '' );

		$this->assertSame( $store, $configuration->get_field_selectors() );

	}

	protected function tearDown() {
		Monkey\tearDown();
		parent::tearDown();
	}
}
