// 2.1 Includes code for tabbing through using Enter Key

(function($) {
    $(window).load(function() {

        var selectfunc;
        var inputfunc;
        var isSelectValueValid;
        var areInputsValid;
        var correctBlock1;
        var correctBlock2;

        if ( $('#form-modal') ) {

            if ( $('#form-modal').hasClass('active') ) {
                correctBlock1 = '#step-form.modal .block1';
                correctBlock2 = '#step-form.modal .block2';
            } else {
                correctBlock1 = '#step-form:not(.modal) .block1';
                correctBlock2 = '#step-form:not(.modal) .block2';

            }
        }

        // Making sure all values for default select menus are set to NULL so I can properly target them.
        $(correctBlock1 + ' select option:selected').attr("value", "");

        // For Select Dropdown
        if ($(correctBlock1 + '  select').length > 1) {

            selectfunc = getSubmenuValue;

        } else if ($(correctBlock1 + ' select').length === 0) {

            selectfunc = noMenu;

        } else {

            selectfunc = getMenuValue;


        }


        // ADD CORRECT CSS ERROR STYLING FOR SELECTS IN CASE THEY DON'T HAVE ANY CONFIGURED
            function addErrorStyles(item) {
                item.css({"border": "2px solid rgba(255, 0, 0, 0.53)", "box-shadow": "none"});
            }

            function removeErrorStyles(item) {
                // item.removeClass('error');
                item.css({"border": "1px solid rgb(166, 166, 166)", "box-shadow": "none"});
            }

        // For Inputs
        if ($(correctBlock1 + ' .validate').length === 0) {

            inputfunc = noInputs;

        } else {

            inputfunc = getInputValues;
        }

        // FUNCTIONS

        // Functions for Select Dropdown
        function getSubmenuValue() {

            if ($(correctBlock1 + ' select:eq(0)').val() !== '') {

                //NEEDED TO ADD CODE TO ACCOUNT FOR HAVING MULTIPLE SUBMENUS
                var $nonemptyselect = $(correctBlock1 + ' select:not(:first)').filter(function() {
                    return this.value !== '';

                });

                if ($nonemptyselect.length > 0) {

                    isSelectValueValid = true;
                    return true;

                } else {

                    isSelectValueValid = false;
                    $(correctBlock1 + ' select:not(:first,:hidden)').addClass('error');
                    var cssitem = $(correctBlock1 + ' select:not(:first,:hidden)');
                    addErrorStyles(cssitem);

                }

            } else {

                $(correctBlock1 + ' select:first').addClass('error');
                var cssitem = $(correctBlock1 + ' select');
                addErrorStyles(cssitem);
                return false;
            }
        }

        //TESTING FUNCTIONALITY TO REMOVE ERROR CLASS WHEN SELECT MENU GETS VALUE AFTER HAVING ERROR CLASS ADDED


        function testChange() {

            if ( $(correctBlock1 + ' select').hasClass('error') ) {

                var cssitem = $(correctBlock1 + ' select')
                removeErrorStyles(cssitem);
            }
        }


            $(correctBlock1 + ' select').change(testChange);




        function noMenu() {

            isSelectValueValid = true;
            return true;
        }

        function getMenuValue() {

            var value = $(correctBlock1 + ' select:eq(0)').val();
            console.log('Fired before IF. Value is ' + value);

            if (value != '') {

                console.log('Treated the value as Null under MenuValue');
                isSelectValueValid = true;
                return true;

            } else {

                $(correctBlock1 + ' select').addClass('error');
                var cssitem = $(correctBlock1 + ' select');
                addErrorStyles(cssitem);
                return false;
            }
        }

        // Functions for Inputs
        function noInputs() {

            areInputsValid = true;
            return true;
        }

        function getInputValues() {

            var $nonempty = $(correctBlock1 + ' .validate').filter(function() {
                return this.value === '';

            });

            if ($nonempty.length === 0) {

                areInputsValid = true;
                return true;

            } else {

                areInputsValid = false;
                addErrorClass();

            }
        }

        //Functions for handling Styling Of Errors
        function addErrorClass() {
            $(correctBlock1 + ' input').each(function() {
                if ($(this).val().trim() === "") {

                    $(this).addClass("error");
                }
            });
        }

        function goToNext() {

            var current = $(correctBlock1 + ' .next').data('currentBlock');
            var next = $(correctBlock1 + ' .next').data('nextBlock');

            $('.block' + current)
                .removeClass('show')
                .addClass('hidden');

            $('.block' + next)
                .removeClass('hidden')
                .addClass('show');

        }

        function goToPrev() {

            var current = $(correctBlock2 + ' .next').data('currentBlock');
            var next = $(correctBlock2 + ' .next').data('nextBlock');
            console.log(current);
            console.log(next);

            $('.block' + current)
                .removeClass('show')
                .addClass('hidden');

            $('.block' + next)
                .removeClass('hidden')
                .addClass('show');

        }

        // Checks whether both functions return true and if so then user can proceed to Step 2 of the form
        function checkForm() {

            selectfunc();
            inputfunc();

            if (isSelectValueValid === true && areInputsValid === true) {

                goToNext();

            }
        }


        // BINDINGS
        $(correctBlock1 + ' .btn').click(checkForm);
        $(correctBlock2 + ' .pull-left').click(goToPrev);




        //////////////////      END OF VALIDATION SECTION       //////////////////




        // CODE FOR TABBING THROUGH WITH ENTER
        $(correctBlock1 + "input:not(:last)").keypress(function(evt) {

            if (evt.keyCode == 13) {

                evt.preventDefault();

                var fields = $(this).parents('form:eq(0),body').find('button, input, textarea, select');
                var index = fields.index(this);

                if (index > -1 && (index + 1) < fields.length) {
                    fields.eq(index + 1).focus();
                }

                return false;

            }
        });

        $(correctBlock1 + "input:last").keypress(function(e) {
            if (e.keyCode == 13) {

                e.preventDefault();
                $(".next").get(0).click();
                $(correctBlock2 + " input:first").focus(); // THIS WORKS BUT IS CAUSING ERROR CLASSES TO BE ADDED FOR SOME REASON???
                // PUT IN FUNCTIONALITY SO IT GOES TO FIRST FIELD OF BLOCK2

            }

        });

        $(correctBlock2 + " input:not(:last)").keypress(function(evt) {

            if (evt.keyCode == 13) {

                evt.preventDefault();

                var fields = $(this).parents('form:eq(0),body').find('button, input, textarea, select');
                var index = fields.index(this);

                if (index > -1 && (index + 1) < fields.length) {
                    fields.eq(index + 1).focus();
                }

                return false;

            }
        });

        $(correctBlock2 + " input:last").keypress(function(e) {
            if (e.keyCode == 13) {

                e.preventDefault();
                $("input[type='submit']").get(0).click();

            }

        });


    });
})(jQuery);
