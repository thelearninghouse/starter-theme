<?php

// Accordion
// $data = [['title' => 'Panel 1', 'content' => 'Panel 1 content'], ... ]
function tlh_accordion ( $data, $allow_multiple = false, $first_open = false ) {
  static $accord_id = 1;
  static $i = 1;
  if ( $data )
  { ?>
    <dl id="accordion-<?php echo $accord_id; ?>" role="presentation" class="accordion" data-allow-toggle=""<?php echo $allow_multiple ? ' data-allow-multiple=""' : ''; ?><?php echo $first_open ? ' data-first-open=""' : ''; ?>>
  	<?php foreach ( $data as $row ) { ?>
      <dt role="heading" aria-level="3">
        <button aria-expanded="false" class="accordion__trigger" aria-controls="sect<?php echo $i; ?>" id="accordion-<?php echo $accord_id; ?>-<?php echo $i; ?>-id" type="button">
          <span class="accordion__title"><?php echo $row['title']; ?></span>
          <span class="accordion__icon"></span>
        </button>
      </dt>
      <dd id="sect<?php echo $i; ?>"
        role="region"
        aria-labelledby="accordion-<?php echo $accord_id; ?>-<?php echo $i; ?>-id"
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
