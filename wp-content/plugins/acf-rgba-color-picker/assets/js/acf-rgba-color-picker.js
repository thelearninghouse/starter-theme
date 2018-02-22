(function($){
	
	acf.fields.extended_color_picker = acf.field.extend({
		
		type: 'extended-color-picker',
		$input: null,
		$transparent: null,
		$fieldpalette: null,
		$color_palette: null,
		
		actions: {
			'ready':	'initialize',
			'append':	'initialize'
		},
		
		focus: function(){
			
			this.$input = this.$field.find('input[type="text"]');

			this.$transparent = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==)';
			
		},
		
		initialize: function($el){

			// reference
			var $input = this.$input,
				$transparent = this.$transparent,
				$fieldpalette = this.$field.find('.acf-color-picker').data('palette'),
				$defaultColor = this.$field.find('.acf-color-picker').data('default');
			
			if ( $fieldpalette == 'no-palette' ) {
				$color_palette = false;
			} else if ( $fieldpalette != '' ) {
				$color_palette = $fieldpalette.split(';');
			} else {
				$color_palette = true;
			}

			var eventTarget,
				colorResultTarget,
				hiddenTarget,
				valueTarget;

			// args
			var args = {				
				defaultColor: $defaultColor,
				palettes: $color_palette,
				hide: true,
				change: function(event) {
					// timeout is required to ensure the $input val is correct
					setTimeout(function(){
						eventTarget = $(event.target).parents('[data-target="target"]');
						hiddenTarget = eventTarget.find('.hiddentarget');
						valueTarget = eventTarget.find('.valuetarget');
						acf.val( hiddenTarget, valueTarget.val() );
					}, 1);
				},
				clear: function(event) {
					// timeout is required to ensure the $input val is correct
					setTimeout(function(){
						eventTarget = $(event.target).parents('[data-target="target"]');
						colorResultTarget = eventTarget.find('.wp-color-result');
						hiddenTarget = eventTarget.find('.hiddentarget');
						valueTarget = eventTarget.find('.valuetarget');
						colorResultTarget.css({
							'background-image' : $transparent,
							'background-color' : 'transparent'
						});
						acf.val( hiddenTarget, valueTarget.val() );
					}, 1);
				}
			}
	 			
	 		// iris
			this.$input.wpColorPicker(args);
						
			$('.iris-square').css({
				'height':'180px',
				'width':'180px',
				'margin-left':''
			});
			
			$('.iris-palette').css({
				'height':'20px',
				'width':'20px',
				'margin-left':'',
				'margin-right':'4px',
				'margin-top':'4px'
			});
			$('.iris-strip').css({
				'width':'18px',
				'height':'180px',
				'margin-left':'10px'
			});
			paletteCount = this.$field.find('.iris-palette').length
			paletteRowCount = Math.ceil(paletteCount / 10);
			this.$field.find('.iris-picker').css({
				'width':'256px',
				'height': 194 + (paletteRowCount * 24)+'px',
				'padding-bottom':'10px'
			});
		}
		
	});
	
})(jQuery);