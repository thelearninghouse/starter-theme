<?php $values_list = tlh_get_field('values_list'); ?>

<?php if ( $values_list ) { ?>
	<ul class="valuesList flexGrid">
		<?php foreach ( $values_list as $value ) { ?>
			<li class="valuesList__item flexGrid__item">
				<div class="value">
					<?php if ( array_key_exists( 'icon', $value ) ) {
						$value_icon = $value['icon'];
						if ( $value_icon['mime_type'] == 'image/svg+xml' ) { ?>
							<div class="value__icon value__icon--svg" role="presentation" aria-hidden="true">
								<?php preg_match('/\/\/.*\/wp-content\/uploads(.*)/', $value_icon['url'], $value_icon_url_array);
								$value_icon_url = wp_upload_dir()['basedir'] . $value_icon_url_array[1];
								include($value_icon_url); ?>
							</div>
						<?php } else { ?>
							<img class="value__icon" src="<?php echo $value_icon['url']; ?>" alt="" role="presentation" aria-hidden="true">
						<?php } ?>
					<?php } ?>
					<div class="value__copy">
						<h3 class="value__heading"><?php echo $value['title'] ?></h3>
						<?php echo $value['description'] ?>
					</div>
				</div>
			</li>
		<?php } ?>
	</ul>
<?php } ?>
