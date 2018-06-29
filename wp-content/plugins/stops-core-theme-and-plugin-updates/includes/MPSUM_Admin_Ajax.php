<?php

if (!defined('ABSPATH')) die('No direct access.');

/**
 * Easy Updates Manager Admin Ajax
 *
 * Handles ajax requests
 *
 * @since 7.0.1
 *
 * @package WordPress
 */
class MPSUM_Admin_Ajax {

	/**
	* Holds the class instance.
	*
	* @access static
	* @var MPSUM_Admin_Ajax $instance
	*/
	private static $instance = null;

	/**
	* Set a class instance.
	*
	* @access static
	*/
	public static function run() {
		if ( null == self::$instance ) {
			self::$instance = new self;
		}
	}

	/**
	* Class constructor.
	*
	* Initialize the class
	*/
	private function __construct() {
		add_action( 'wp_ajax_eum_ajax', array( $this, 'ajax_handler' ) );
	}

	/**
	 * Handles ajax all calls
	 */
	public function ajax_handler() {
		parse_str( file_get_contents( 'php://input' ), $data );
		$sub_action = isset( $data['sub_action'] ) ? $data['sub_action']: 'get_options';
		$nonce = isset( $data['_wpnonce'] ) ? $data['_wpnonce'] : '';
		if ( !wp_verify_nonce( $nonce, 'eum_nonce' ) || empty( $sub_action ) ) die( 'Security check' );

		if ( method_exists( $this, $sub_action ) ) {
			$results = call_user_func( array( $this, $sub_action ), $data );

			if ( is_wp_error( $results ) ) {
				$results = array(
					'result' => false,
					'error_code' => $results->get_error_code(),
					'error_message' => $results->get_error_message(),
					'error_data' => $results->get_error_data(),
				);
			}

			wp_send_json($results);
		}
	}

	/**
	 * Saves core options
	 *
	 * @param array $data - An array with option id and value to save
	 *
	 * @return array - An array of core options
	 */
	public function save_options( $data ) {
		$id = $data['id'];
		$value = $data['value'];

		// Get options
		$options = MPSUM_Updates_Manager::get_options( 'core', true );
		if ( empty( $options ) ) {
			$options = MPSUM_Admin_Core::get_defaults();
		}

		$id = sanitize_text_field( $id );
		$value = sanitize_text_field( $value );

		$email_errors = false;
		switch ( $id ) {
			case 'automatic-updates-default':
				$options[ 'automatic_development_updates' ] = 'off';
				$options[ 'automatic_major_updates' ] = 'off';
				$options[ 'automatic_minor_updates' ] = 'on';
				$options[ 'automatic_plugin_updates' ] = 'default';
				$options[ 'automatic_theme_updates' ] = 'default';
				$options[ 'automatic_translation_updates' ] = 'on';
				$options[ 'automatic_updates' ] = 'default';
				break;
			case 'automatic-updates-on':
				$options[ 'automatic_development_updates' ] = 'off';
				$options[ 'automatic_major_updates' ] = 'on';
				$options[ 'automatic_minor_updates' ] = 'on';
				$options[ 'automatic_plugin_updates' ] = 'on';
				$options[ 'automatic_theme_updates' ] = 'on';
				$options[ 'automatic_translation_updates' ] = 'on';
				$options[ 'automatic_updates' ] = 'on';
				break;
			case 'automatic-updates-off':
				$options[ 'automatic_development_updates' ] = 'off';
				$options[ 'automatic_major_updates' ] = 'off';
				$options[ 'automatic_minor_updates' ] = 'off';
				$options[ 'automatic_plugin_updates' ] = 'off';
				$options[ 'automatic_theme_updates' ] = 'off';
				$options[ 'automatic_translation_updates' ] = 'off';
				$options[ 'automatic_updates' ] = 'off';
				break;
			case 'automatic-updates-custom':
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-major-updates':
				if( 'on' == $value ) {
					$options[ 'automatic_major_updates' ] = 'on';
				} else {
					$options[ 'automatic_major_updates' ] = 'off';
				}
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-minor-updates':
				if( 'on' == $value ) {
					$options[ 'automatic_minor_updates' ] = 'on';
				} else {
					$options[ 'automatic_minor_updates' ] = 'off';
				}
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-development-updates':
				if( 'on' == $value ) {
					$options[ 'automatic_development_updates' ] = 'on';
				} else {
					$options[ 'automatic_development_updates' ] = 'off';
				}
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-translation-updates':
				if( 'on' == $value ) {
					$options[ 'automatic_translation_updates' ] = 'on';
				} else {
					$options[ 'automatic_translation_updates' ] = 'off';
				}
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-plugin-updates-default':
				$options[ 'automatic_plugin_updates' ] = 'default';
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-plugin-updates-on':
				$options[ 'automatic_plugin_updates' ] = 'on';
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-plugin-updates-off':
				$options[ 'automatic_plugin_updates' ] = 'off';
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-plugin-updates-individual':
				$options[ 'automatic_plugin_updates' ] = 'individual';
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-theme-updates-default':
				$options[ 'automatic_theme_updates' ] = 'default';
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-theme-updates-on':
				$options[ 'automatic_theme_updates' ] = 'on';
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-theme-updates-off':
				$options[ 'automatic_theme_updates' ] = 'off';
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'automatic-theme-updates-individual':
				$options[ 'automatic_theme_updates' ] = 'individual';
				$options[ 'automatic_updates' ] = 'custom';
				break;
			case 'disable-updates':
				if( 'on' == $value ) {
					$options[ 'all_updates' ] = 'on';
				} else {
					$options[ 'all_updates' ] = 'off';
				}
				break;
			case 'logs':
				if( 'on' == $value ) {
					update_site_option( 'mpsum_log_table_version', 0 );
					$options[ 'logs' ] = 'on';
				} else {
					MPSUM_Logs::drop();
					update_site_option( 'mpsum_log_table_version', 0 );
					$options[ 'logs' ] = 'off';
				}
				break;
			case 'core-updates':
				if( 'on' == $value ) {
					$options[ 'core_updates' ] = 'on';
				} else {
					MPSUM_Logs::drop();
					$options[ 'core_updates' ] = 'off';
				}
				break;
			case 'plugin-updates':
				if( 'on' == $value ) {
					$options[ 'plugin_updates' ] = 'on';
				} else {
					MPSUM_Logs::drop();
					$options[ 'plugin_updates' ] = 'off';
				}
				break;
			case 'theme-updates':
				if( 'on' == $value ) {
					$options[ 'theme_updates' ] = 'on';
				} else {
					MPSUM_Logs::drop();
					$options[ 'theme_updates' ] = 'off';
				}
				break;
			case 'translation-updates':
				if( 'on' == $value ) {
					$options[ 'translation_updates' ] = 'on';
				} else {
					MPSUM_Logs::drop();
					$options[ 'translation_updates' ] = 'off';
				}
				break;
			case 'browser-nag':
				if( 'on' == $value ) {
					$options[ 'misc_browser_nag' ] = 'on';
				} else {
					$options[ 'misc_browser_nag' ] = 'off';
				}
				break;
			case 'version-footer':
				if( 'on' == $value ) {
					$options[ 'misc_wp_footer' ] = 'on';
				} else {
					$options[ 'misc_wp_footer' ] = 'off';
				}
				break;
			case 'email-notifications':
				if( 'on' == $value ) {
					$options[ 'notification_core_update_emails' ] = 'on';
				} else {
					$options[ 'notification_core_update_emails' ] = 'off';
				}
				break;
			case 'notification-emails':
				if ( 'unset' === $value ) {
					$options[ 'email_addresses' ] = array();
					break;
				}
				$emails = explode( ',', $value );
				foreach( $emails as $index => &$email ) {
					$email = trim( $email );
					if ( ! is_email ( $email ) ) {

						// Email error. Get out.
						$email_errors = true;
						break;
					}
				}

				if ( ! $email_errors ) {
					$options[ 'email_addresses' ] = $emails;
				}
				break;
		}
		// Save options
		MPSUM_Updates_Manager::update_options( $options, 'core' );

		// Return email addresses in format
		$value = trim( $value );
		if ( 'unset' === $value ) {
			$options[ 'email_addresses' ] = array();
		}
		if ( is_array( $options[ 'email_addresses' ] ) ) {
			$options[ 'email_addresses' ] = implode( ',', $options[ 'email_addresses' ] );
		} else {
			$options[ 'email_addresses' ] = array();
		}


		// Check automatic updates for fresh installation
		if ( ! isset( $options[ 'automatic_updates' ] ) || 'unset' == $options[ 'automatic_updates' ] ) {
			$options[ 'automatic_updates' ] = 'default';
		}

		// Add error to options for returning
		if ( $email_errors ) {
			$options[ 'errors' ] = true;
			$options[ 'email_addresses' ] = $value;
		}
		return $options;
	}

	/**
	 * Get all core options
	 *
	 * @param array $data
	 *
	 * @return array - An array of core options
	 */
	public function get_options( $data ) {
		// Get options
		$options = MPSUM_Updates_Manager::get_options( 'core', true );
		if ( empty( $options ) ) {
			$options = MPSUM_Admin_Core::get_defaults();
		}

		// Set automatic updates defaults if none is selected
		if ( ! isset( $options[ 'automatic_updates' ] ) || 'unset' === $options[ 'automatic_updates' ] ) {

			// Check to see if automatic updates are on
			// Prepare for mad conditionals
			if ( 'off' == $options[ 'automatic_development_updates' ] && 'on' == $options[ 'automatic_major_updates' ] && 'on' == $options[ 'automatic_minor_updates' ] && 'on' == $options[ 'automatic_plugin_updates' ] && 'on' == $options[ 'automatic_theme_updates' ] && 'on' == $options[ 'automatic_translation_updates' ] ) {
				$options[ 'automatic_updates' ] = 'on';
			} elseif( 'off' == $options[ 'automatic_development_updates' ] && 'off' == $options[ 'automatic_major_updates' ] && 'off' == $options[ 'automatic_minor_updates' ] && 'off' == $options[ 'automatic_plugin_updates' ] && 'off' == $options[ 'automatic_theme_updates' ] && 'off' == $options[ 'automatic_translation_updates' ] ) {
				$options[ 'automatic_updates' ] = 'off';
			} elseif( 'off' == $options[ 'automatic_development_updates' ] && 'off' == $options[ 'automatic_major_updates' ] && 'on' == $options[ 'automatic_minor_updates' ] && 'default' == $options[ 'automatic_plugin_updates' ] && 'default' == $options[ 'automatic_theme_updates' ] && 'on' == $options[ 'automatic_translation_updates' ] ) {
				$options[ 'automatic_updates' ] = 'default';
			} else {
				$options[ 'automatic_updates' ] = 'custom';
			}
		}

		if ( ! is_array( $options[ 'email_addresses' ] ) ) {
			$options[ 'email_addresses' ] = array();
		}
		$options[ 'email_addresses' ] = implode( ',', $options[ 'email_addresses' ] );

		// return
		return $options;
	}

	/**
	 * Checks for user permission
	 *
	 * @return bool - Returns true, if user has enough permissions else returns false
	 */
	public function permission_callback() {
		if ( current_user_can( 'install_plugins' ) ) {
			return true;
		}
		return false;
	}
}
