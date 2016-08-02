(function ($) {
    'use strict';

    /**
     * All of the code for your admin-facing JavaScript source
     * should reside in this file.
     *
     * Note: It has been assumed you will write jQuery code here, so the
     * $ function reference has been prepared for usage within the scope
     * of this function.
     *
     * This enables you to define handlers, for when the DOM is ready:
     *
     * $(function() {
	 *
	 * });
     *
     * When the window is loaded:
     *
     * $( window ).load(function() {
	 *
	 * });
     *
     * ...and/or other possibilities.
     *
     * Ideally, it is not considered best practise to attach more than a
     * single DOM-ready or window-load handler for a particular page.
     * Although scripts in the WordPress core, Plugins and Themes may be
     * practising this, we should strive to set a better example in our own work.
     */

    $(document).ready(function () {
        $('body').on('click', 'span.remove-this-image a', function (e) {
            e.preventDefault();
            $("#post_summary_uploaded_file_url_name").html('');
            $("#post_summary_uploaded_file_url").val('');
            $(this).unbind();
            $(this).remove();
        });

        $('#cta-summary-upload-button').click(function (e) {
            e.preventDefault();
            var image = wp.media({
                title: 'Upload Image',
                multiple: false
            }).open()
                .on('select', function (e) {
                    var uploaded_image = image.state().get('selection').first();
                    $("#post_summary_uploaded_file_url_name").html(uploaded_image.toJSON().filename);
                    $("#post_summary_uploaded_file_url").val(uploaded_image.toJSON().url);
                    $("#post_summary_uploaded_file_url_name").append('<span class="remove-this-image"><a href="#">Remove Image</a></span>')
                });
        });

        if ($("#article_summary_button_font_style").val() == 'other') {
            $("#tldr-post-summary-other-fonts").show();
        }


        $("#article_summary_button_font_style").change(function () {
            if ($(this).val() == 'other') {
                $("#tldr-post-summary-other-fonts").show();
            } else {
                //$("#article_summary_button_other_font_style").val('');
                $("#tldr-post-summary-other-fonts").hide();
            }
        });


        if ($("#article_summary_cta_title_font").val() == 'other') {
            $("#tldr-post-summary-cta-title-other-fonts").show();
        }

        $("#article_summary_cta_title_font").change(function () {
            if ($(this).val() == 'other') {
                $("#tldr-post-summary-cta-title-other-fonts").show();
            } else {
                //$("#article_summary_button_other_font_style").val('');
                $("#tldr-post-summary-cta-title-other-fonts").hide();
            }
        });


        if ($("#article_summary_cta_desc_font").val() == 'other') {
            $("#tldr-post-summary-cta-desc-other-fonts").show();
        }

        $("#article_summary_cta_desc_font").change(function () {
            if ($(this).val() == 'other') {
                $("#tldr-post-summary-cta-desc-other-fonts").show();
            } else {
                //$("#article_summary_button_other_font_style").val('');
                $("#tldr-post-summary-cta-desc-other-fonts").hide();
            }
        });


        if ($("#article_summary_cta_button_font").val() == 'other') {
            $("#tldr-post-summary-cta-button-other-fonts").show();
        }

        $("#article_summary_cta_button_font").change(function () {
            if ($(this).val() == 'other') {
                $("#tldr-post-summary-cta-button-other-fonts").show();
            } else {
                //$("#article_summary_button_other_font_style").val('');
                $("#tldr-post-summary-cta-button-other-fonts").hide();
            }
        });


        if ($('input#cta_box_border').is(':checked')) {
            $(".cta-box-border-options").show();
        }

        $("#cta_box_border").click(function () {
            if ($('input#cta_box_border').is(':checked')) {
                $(".cta-box-border-options").show();
            } else {
                $(".cta-box-border-options").hide();
            }
        })

        $(".tldr-post-summary-wp-color").wpColorPicker();


    })

})(jQuery);
