var assert = require('assert');
var logContains = require('../../helpers/logContains');
var dummyContent = require('../../helpers/dummyContent');
var simpleField = require('../../helpers/simpleField');

module.exports = {
    tags: ['acf4', 'acf5', 'filters'],

    before: function (browser) {
        var page = browser.page.WordPressHelper();
        page.newPost();
    },

    beforeEach: function (browser) {
    },

    'Text Field (blacklisted by name)' : function (browser) {

        browser.execute(function() {
                return jQuery('.acf-field-text').data('key') || jQuery('.field_type-text').data('field_key');
            },
            [],
            function(result){

                browser.execute(
                    function( key ) {
                        //As defined in /tests/js/system/data/acf5.php
                        YoastACFAnalysisConfig.blacklistName = [ 'yoast_acf_analysis_text' ];
                    },
                    [result.value]
                );

        } );

        var hash = dummyContent.hash();

        browser
            .clearValue( '.field_type-text input, .acf-field-text input' )
            .setValue( '.field_type-text input, .acf-field-text input', [ hash , browser.Keys.TAB ] );

        browser.pause( 3000 );

        logContains( browser, 'h2>' + hash, function( hasText ){
            return browser.assert.ok( !hasText );
        } );

        browser.clearValue( '.field_type-text input, .acf-field-text input' );
    },

    after : function(browser) {
        browser.end();
    }
};
