(function ($) {
    'use strict';

    /**
     * All of the code for your public-facing JavaScript source
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


        $(".cta-description p.calltoaction a").click(function () {
            if (typeof __gaTracker != 'undefined') {
                __gaTracker('send', 'event', 'TLDR', 'CTA Click', ga_event_track.cta_title);
            }

            if (typeof ga != 'undefined') {
                ga('send', 'event', 'TLDR', 'CTA Click', ga_event_track.cta_title);
            }
        })

        // show summary
        $("#tldr-post-summary-buttons .summary-tldr-btn.summary").click(function (e) {
            e.preventDefault();
            $("#tldr-post-content").slideUp("slow", function () {
                $("#tldr-post-summary").slideDown("slow", function () {
                    if ($(".summarytldrbtn.position-2") || $(".summarytldrbtn.position-3")) {
                        $('body').scrollTo($("#tldr-post-summary").offset().top - 100, 200);
                    }
                });
                $("#tldr-post-summary-buttons .summary-tldr-btn.summary").hide();
                $("#tldr-post-summary-buttons .full-article").show();
                $("div.powerby").show();
            });
            if (typeof __gaTracker != 'undefined') {
                __gaTracker('send', 'event', 'TLDR', 'Summary Click', ga_event_track.slug);
            }

            if (typeof ga != 'undefined') {
                ga('send', 'event', 'TLDR', 'Summary Click', ga_event_track.slug);
            }
        });

        // show full article
        $("#tldr-post-summary-buttons .summary-tldr-btn.full-article").click(function (e) {
            e.preventDefault();
            $("#tldr-post-summary").slideUp("slow", function () {
                $("#tldr-post-content").slideDown("slow", function () {
                    if ($(".summarytldrbtn.position-2") || $(".summarytldrbtn.position-3")) {
                        $('body').scrollTo($("#tldr-post-content").offset().top - 100, 200);
                    }
                });
                $("#tldr-post-summary-buttons .summary-tldr-btn.full-article").hide();
                $("#tldr-post-summary-buttons .summary-tldr-btn.summary").show();
                $("div.powerby").hide();
            });

            if (typeof __gaTracker != 'undefined') {
                __gaTracker('send', 'event', 'TLDR', 'Full Article Click', ga_event_track.slug);
            }

            if (typeof ga != 'undefined') {
                ga('send', 'event', 'TLDR', 'Full Article Click', ga_event_track.slug);
            }

        });


        if ($(".summarytldrbtn.position-2") || $(".summarytldrbtn.position-3")) {
            var hidden = true;
            $(window).scroll(function () {
                if ($(document).scrollTop() > 0 && hidden == true) {
                    $("#tldr-post-summary-buttons.position-2").slideDown("slow");
                    $("#tldr-post-summary-buttons.position-3").slideDown("slow");
                    hidden = false;
                }

                if ($(document).scrollTop() == 0 && hidden == false) {
                    $("#tldr-post-summary-buttons.position-2").slideUp("slow");
                    $("#tldr-post-summary-buttons.position-3").slideUp("slow");
                    hidden = true;
                }
            })
        }

    })

})(jQuery);
