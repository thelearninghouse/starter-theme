$(function() {

	var inputElements = getInputElementsByAttributeFromAllForms("id", "zip");
	inputElements.bind('blur', zipChangeHandler);

	inputElements = getInputElementsByAttributeFromAllForms("name", "zip");
		inputElements.unbind('blur', zipChangeHandler);
		inputElements.bind('blur', zipChangeHandler);

	inputElements = getInputElementsByAttributeFromAllForms("id", "zip",'zip');
		inputElements.unbind('blur', zipChangeHandler);
		inputElements.bind('blur', zipChangeHandler);

	inputElements = getInputElementsByAttributeFromAllForms("name", "zip",'zip');
		inputElements.unbind('blur', zipChangeHandler);
		inputElements.bind('blur', zipChangeHandler);

	function getInputElementsByAttributeFromAllForms(attributeName, attributeValue,fieldType){
		//var $ = getJQueryInstance();
		fieldType = typeof fieldType !== 'undefined' ? fieldType : 'text';

		if(attributeName == 'class')
			return $('form :input[type="'+ fieldType +'"][' + attributeName + '*="' + attributeValue + '"]');

		return $('form :input[type="'+ fieldType +'"][' + attributeName + '="' + attributeValue + '"]');
	}

	function zipChangeHandler(event) {

		var zip_box = $(event.target);
		var parentForm = $(this).closest('form');;
		var submitBtn = $(parentForm).find("input[type='submit']");

		if(submitBtn.length == 0) {
			submitBtn = $(parentForm).find("input[type='image']");
		}
		if(submitBtn.length == 0) {
			submitBtn = $(parentForm).find("button[type='submit']");
		}

		if ($(parentForm).find('#zipError').length == 0) {
			$(zip_box).after('<div class="FormError" id="zipError"></div>');
			$("#city",parentForm).val("");
			$("#state",parentForm).val("");
    		}

		if (zip_box.val().length<5) {
			$("#zipError", parentForm).html("Please enter a Valid zip");
			zip_box.removeClass('success');
			$("#city",parentForm).val("");
			$("#state",parentForm).val("");
			addZipFormError(zip_box);
			submitBtn.attr('disabled', 'true');
		}
		else if ( zip_box.val().length>5) {
			$("#zipError", parentForm).html("Please enter a Valid zip");
			zip_box.removeClass('success');
			$("#city",parentForm).val("");
			$("#state",parentForm).val("");
			addZipFormError(zip_box);
			submitBtn.attr('disabled', 'true');
		}
		else if ((zip_box.val().length == 5) ) {

		// Make HTTP Request
			$.ajax({
					url: "http://api.zippopotam.us/us/" + zip_box.val(),
					cache: false,
					dataType: "json",
					type: "GET",
				success: function(result, success) {
					// US Zip Code Records Officially Map to only 1 Primary Location
					places = result['places'][0];
					$("#city", parentForm).val(places['place name']);
					$("#state", parentForm).val(places['state abbreviation']);
					zip_box.addClass('success');
					$("#zipError", parentForm).remove();
					submitBtn.removeAttr('disabled');
                    		removeZipFormError(zip_box);
				},
				error: function(xhr, result, success) {
					if (success == ""){
						zip_box.addClass('success');
						$("#zipError", parentForm).remove();
						submitBtn.removeAttr('disabled');
                    			removeZipFormError(zip_box);
					} else {
						zip_box.removeClass('success');
						$("#city",parentForm).val("");
						$("#state",parentForm).val("");
						$("#zipError", parentForm).html("Please enter a Valid zip");
                    			addZipFormError(zip_box);
                    			submitBtn.attr('disabled', 'true');
					}

				}
			});
		}

		// Functions to trigger form errors

		function addZipFormError(tClassName){ //tlh
			var tClassName = tClassName;
			$(tClassName).addClass("error");
			$(tClassName).removeClass('success');
			$(tClassName).parent().find('.formError').remove();
			$(tClassName).parent().find('.formValid').remove();
			$(tClassName).after('<span class="formError">' + $(tClassName).attr('title') +'</span>');
		}

		function removeZipFormError(tClassName){ //tlh
			var tClassName = tClassName;
			$(tClassName).removeClass('error');
			$(tClassName).parent().find('.formError').remove();
			$(tClassName).parent().find('.formValid').remove();
			$(tClassName).after('<span class="formValid">&nbsp;</span>');
		}
	};
});
