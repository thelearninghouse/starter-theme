<?php


namespace Yoast\AcfAnalysis\Tests\Configuration;

class RegistryTest extends \PHPUnit_Framework_TestCase {

	public function testSingleton(){

		$first = \Yoast_ACF_Analysis_Facade::get_registry();
		$second = \Yoast_ACF_Analysis_Facade::get_registry();

		$this->assertSame( $first, $second );

		$first->add( 'id', new \Yoast_ACF_Analysis_Configuration(
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store(),
			new \Yoast_ACF_Analysis_String_Store()
		) );

		$this->assertSame( $first, $second );

	}

	public function testAdd(){

		$id = 'add';
		$content = 'something';

		$registry = new \Yoast_ACF_Analysis_Registry();

		$this->assertNull( $registry->get( $id ) );

		$registry->add( $id, $content );

		$this->assertSame( $content, $registry->get( $id ) );

	}

}
