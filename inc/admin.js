(function($) {
	$.extend(wp.Uploader.prototype, {
		success: function(file_attachment) {
			var error = false;
			var alertText =
				"WARNING: This uploaded image does not meet our performance standards! \n \n";
			if (file_attachment.attributes.height > 1600) {
				error = true;
				alertText += "Height should not exceed 1600px \n \n";
			}
			if (file_attachment.attributes.width > 1600) {
				error = true;
				alertText += "Width should not exceed 1600px \n \n";
			}
			if (file_attachment.attributes.filesizeInBytes > 512000) {
				error = true;
				alertText += "File size should not exceed 512kB \n \n";
			}
			if (error) {
				alert(alertText);
			}
		}
	});
})(jQuery);
