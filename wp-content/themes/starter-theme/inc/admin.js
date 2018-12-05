(function($) {
  $.extend(wp.Uploader.prototype, {
    success: function(file_attachment) {
      console.log(file_attachment);
      var alertText = 'WARNING: This uploaded image does not meet our performance standards! \n \n';
      if (file_attachment.attributes.height > 1600) {
        alertText += 'Height should not exceed 1600px \n \n';
      }
      if (file_attachment.attributes.width > 1600) {
        alertText += 'Width should not exceed 1600px \n \n';
      }
      if (file_attachment.attributes.filesizeInBytes > 512000) {
        alertText += "File size should not exceed 512kB \n \n";
      }
      alert(alertText);
    }
  });
})(jQuery);
