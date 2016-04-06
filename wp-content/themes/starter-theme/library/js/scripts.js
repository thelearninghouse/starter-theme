/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

    $('.accordion .accord').on("click", function(){
        if($(this).hasClass('active')){
           $(this).removeClass('active');
        }else{
            $('.accordion .accord').removeClass('active');
            $(this).addClass("active");
        }
});

}); /* end of as page load scripts */
