<?php


namespace Yoast\AcfAnalysis\Tests\Configuration;


class StringStoreTest extends \PHPUnit_Framework_TestCase {

	/**
	 * @return \Yoast_ACF_Analysis_String_Store
	 */
	protected function getStore() {
		return new \Yoast_ACF_Analysis_String_Store();
	}

	public function testEmpty(){
		$store = $this->getStore();
		$this->assertEmpty( $store->to_array() );
	}

	public function testAdd(){

		$type = "test";

		$store = $this->getStore();
		$store->add( $type );

		$this->assertSame( [ $type ],  $store->to_array() );

	}

	public function testAddSame(){

		$type = "test";

		$store = $this->getStore();
		$store->add( $type );
		$store->add( $type );

		$this->assertSame( [ $type ],  $store->to_array() );

	}

	public function testAddMultiple(){

		$typeA= "A";
		$typeB= "B";

		$store = $this->getStore();
		$store->add( $typeA );
		$store->add( $typeB );

		$this->assertSame( [ $typeA, $typeB ],  $store->to_array() );

	}

	public function testAddMultipleSorting(){

		$typeA= "Z";
		$typeB= "A";

		$store = $this->getStore();
		$store->add( $typeA );
		$store->add( $typeB );

		$this->assertSame( [ $typeB, $typeA ],  $store->to_array() );

	}

	public function testAddNonString(){

		$store = $this->getStore();

		$this->assertFalse( $store->add( 999 ) );
		$this->assertEmpty( $store->to_array() );

	}

	public function testRemove(){

		$typeA= "A";
		$typeB= "B";

		$store = $this->getStore();

		$store->add( $typeA );
		$store->add( $typeB );

		$this->assertSame( [ $typeA, $typeB ],  $store->to_array() );

		$store->remove( $typeA );

		$this->assertSame( [ $typeB ],  $store->to_array() );

		$store->remove( $typeB );

		$this->assertEmpty( $store->to_array() );

	}

	public function testRemoveNonString(){

		$store = $this->getStore();
		$store->add( "999" );

		$this->assertFalse( $store->remove( 999 ) );

	}

	public function testRemoveNonExist(){

		$store = $this->getStore();

		$this->assertFalse( $store->remove( "test" ) );

	}

}