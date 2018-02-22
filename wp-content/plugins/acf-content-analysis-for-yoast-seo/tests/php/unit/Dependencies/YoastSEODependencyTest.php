<?php

namespace Yoast\AcfAnalysis\Tests\Dependencies;

use Brain\Monkey;

class YoastSEODependencyTest extends \PHPUnit_Framework_TestCase {
	protected $preserveGlobalState = false;
	protected $runTestInSeparateProcess = true;

	protected function setUp() {
		parent::setUp();
		Monkey\setUp();
	}

	public function testFail() {
		$testee = new \Yoast_ACF_Analysis_Dependency_Yoast_SEO();

		$this->assertFalse( $testee->is_met() );
	}

	public function testPass() {
		define( 'WPSEO_VERSION', '4.0.0' );

		$testee = new \Yoast_ACF_Analysis_Dependency_Yoast_SEO();
		$this->assertTrue( $testee->is_met() );
	}

	public function testOldVersion() {
		define( 'WPSEO_VERSION', '2.0.0' );

		$testee = new \Yoast_ACF_Analysis_Dependency_Yoast_SEO();
		$this->assertFalse( $testee->is_met() );
	}

	public function testAdminNotice() {
		$testee = new \Yoast_ACF_Analysis_Dependency_Yoast_SEO();
		$testee->register_notifications();

		$this->assertTrue( has_action( 'admin_notices', array( $testee, 'message_plugin_not_activated' ) ) );
	}

	public function testAdminNoticeMinimumVersion() {
		define( 'WPSEO_VERSION', '2.0.0' );

		$testee = new \Yoast_ACF_Analysis_Dependency_Yoast_SEO();
		$testee->register_notifications();

		$this->assertTrue( has_action( 'admin_notices', array( $testee, 'message_minimum_version' ) ) );
	}

	protected function tearDown() {
		Monkey\tearDown();
		parent::tearDown();
	}
}
