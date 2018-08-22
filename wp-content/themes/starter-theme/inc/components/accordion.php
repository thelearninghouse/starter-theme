<?php

  // Accordion
  // $data = [['title' => 'Panel 1', 'content' => 'Panel 1 content'], ... ]
  function tlh_accordion ( $data, $allow_multiple = false, $first_open = false, $class = false ) {
    static $accord_id = 1;
    $i = 1;
    if ( $data )
    { ?>
      <dl id="accordion-<?php echo $accord_id; ?>" role="presentation" class="accordion<?php echo $class ? ' ' . $class : ''; ?>" data-allow-toggle=""<?php echo $allow_multiple ? ' data-allow-multiple=""' : ''; ?><?php echo $first_open ? ' data-first-open=""' : ''; ?>>
    	<?php foreach ( $data as $row ) { ?>
				<?php $accordion_header_id = 'accordion-'. $accord_id . '-header-' . $i;
				$accordion_panel_id = 'accordion-'. $accord_id . '-section-' . $i; ?>
        <dt role="heading" aria-level="3">
          <button aria-expanded="false" class="accordion__trigger" aria-controls="<?php echo $accordion_panel_id; ?>" id="<?php echo $accordion_header_id; ?>" type="button">
            <span class="accordion__title"><?php echo $row['title']; ?></span>
            <span class="accordion__icon"></span>
          </button>
        </dt>
        <dd id="<?php echo $accordion_panel_id; ?>"
          role="region"
          aria-labelledby="<?php echo $accordion_header_id; ?>"
          class="accordion__panel">
          <div>
            <?php if ( is_array($row['content']) ) {
              foreach ( $row['content'] as $block ) {
                echo $block;
  						}
            } else {
              echo $row['content'];
            } ?>
          </div>
        </dd>
    	<?php $i++;
        } ?>
      </dl>
      <?php $accord_id++; ?>
    <?php }
  }

?>
