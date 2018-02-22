<?php

namespace Yoast\AcfAnalysis\Tests\Dependencies;

use Brain\Monkey;

class ACFDependencyTest extends \PHPUnit_Framework_TestCase {
	protected function setUp() {
		parent::setUp();
		Monkey\setUp();
	}

	public function testNoACFClassExists() {
		$testee = new \Yoast_ACF_Analysis_Dependency_ACF();

		$this->assertFalse( $testee->is_met() );
	}

	public function testACFClassExists() {
		$testee = new \Yoast_ACF_Analysis_Dependency_ACF();

		require_once __DIR__ . DIRECTORY_SEPARATOR . 'ACFClass.php';

		$this->assertTrue( $testee->is_met() );
	}

	public function testAdminNotice() {
		$testee = new \Yoast_ACF_Analysis_Dependency_ACF();
		$testee->register_notifications();

		$this->assertTrue( has_action( 'admin_notices', array( $testee, 'message_plugin_not_activated' ) ) );
	}

	protected function tearDown() {
		Monkey\tearDown();
		parent::tearDown();
	}
}
