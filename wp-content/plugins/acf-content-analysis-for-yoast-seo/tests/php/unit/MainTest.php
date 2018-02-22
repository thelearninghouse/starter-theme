<?php

namespace Yoast\AcfAnalysis\Tests;

use Brain\Monkey;
use Brain\Monkey\Functions;

class MainTest extends \PHPUnit_Framework_TestCase {

	protected function setUp() {
		parent::setUp();
		Monkey\setUp();
	}

	public function testInvalidConfig() {

		$registry = \Yoast_ACF_Analysis_Facade::get_registry();

		$registry->add( 'config', 'Invalid Config' );

		$testee = new \AC_Yoast_SEO_ACF_Content_Analysis();

		Functions\expect('get_option')
			->once()
			->with('acf_version')
			->andReturn(5);

		$testee->boot();

		$this->assertNotSame( 'Invalid Config', $registry->get( 'config' ) );
		$this->assertInstanceOf('\Yoast_ACF_Analysis_Configuration', $registry->get( 'config' ) );

	}

	protected function tearDown() {
		Monkey\tearDown();
		parent::tearDown();
	}
}
