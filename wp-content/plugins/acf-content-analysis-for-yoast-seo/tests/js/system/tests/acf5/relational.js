var assert = require('assert');
var logContains = require('../../helpers/logContains');

module.exports = {
    tags: ['acf5', 'relational'],

    before: function (browser) {
        var page = browser.page.WordPressHelper();
        page.newPost();
    },

    beforeEach: function (browser) {
    },

    'Taxonomy Checkbox Field' : function (browser) {

        var selector = '.acf-taxonomy-field[data-type="checkbox"][data-taxonomy="category"] li[data-id="1"] ';

        browser.waitForElementVisible( selector, 10000 );

        browser.click( selector + 'input[type=checkbox]' );

        browser.getText( selector + 'span', function(result) {

            this.pause( 3000 );

            logContains( browser, 'li>' + result.value, this.assert.ok );

        });

    },

    'Taxonomy Multi Select Field' : function (browser) {

        browser.execute(
            function() {
                return parseFloat(YoastACFAnalysisConfig.acfVersion, 10);
            },
            [],
            function( result ){
                var acfVersion = result.value;
                var inputSelector, optionSelector, choiceSelector;

                if( acfVersion >= 5.6 ){
                    inputSelector = '.acf-taxonomy-field[data-type="multi_select"][data-taxonomy="category"] .select2-search__field ';
                    optionSelector = '.select2-results__option--highlighted';
                    choiceSelector = '.acf-taxonomy-field .select2-selection__choice';
                }else{
                    inputSelector = '.acf-taxonomy-field[data-type="multi_select"][data-taxonomy="category"] .select2-input ';
                    optionSelector = '.select2-result:first-child';
                    choiceSelector = '.acf-taxonomy-field .select2-search-choice';
                }

                browser.waitForElementVisible( inputSelector, 10000 );

                browser.setValue( inputSelector, [ browser.Keys.SPACE ] );

                browser.waitForElementVisible( optionSelector, 10000 );

                browser.setValue( inputSelector, [ browser.Keys.ENTER ] );

                browser.waitForElementVisible( choiceSelector, 10000 );

                browser.execute(
                    function() {

                        var select2Target = (parseFloat(YoastACFAnalysisConfig.acfVersion, 10) >= 5.6)?'select':'input';

                        return jQuery('.acf-taxonomy-field[data-type="multi_select"] ' + select2Target).select2('data')[0].text
                    },
                    [],
                    function( result ){
                        this.pause( 3000 );
                        logContains( browser, 'li>' + result.value , browser.assert.ok );
                    }
                );
            }
        );

    },

    after : function(browser) {
        browser.end();
    }
};
