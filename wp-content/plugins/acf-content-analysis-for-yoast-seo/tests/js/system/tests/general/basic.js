var assert = require('assert');
var logContains = require('../../helpers/logContains');
var dummyContent = require('../../helpers/dummyContent');
var simpleField = require('../../helpers/simpleField');
var replaceVars = require('../../helpers/replaceVars');

module.exports = {
    tags: ['acf4', 'acf5', 'basic'],

    before: function (browser) {
        var page = browser.page.WordPressHelper();
        page.newPost();
    },

    beforeEach: function (browser) {
    },

    'Text Field' : function (browser) {
        var value = simpleField(browser, '.field_type-text input, .acf-field-text input');
        replaceVars( browser, 'yoast_acf_analysis_text', value );
    },

    'Text Field (as Headline)' : function (browser) {

        browser.execute(function() {
                return jQuery('.acf-field-text').data('key') || jQuery('.field_type-text').data('field_key');
            },
            [],
            function(result){

                browser.execute(
                    function( key ) {
                        YoastACFAnalysisConfig.scraper.text.headlines = {};
                        YoastACFAnalysisConfig.scraper.text.headlines[key] = 2;
                    },
                    [result.value]
                );

        } );

        var hash = dummyContent.hash();

        browser
            .clearValue( '.field_type-text input, .acf-field-text input' )
            .setValue( '.field_type-text input, .acf-field-text input', [ hash , browser.Keys.TAB ] );

        browser.pause( 3000 );

        logContains( browser, 'h2>' + hash, browser.assert.ok );

        browser.clearValue( '.field_type-text input, .acf-field-text input' );
    },

    'Textarea Field' : function (browser) {
        var value = simpleField( browser, '.field_type-textarea textarea, .acf-field-textarea textarea' );
        replaceVars( browser, 'yoast_acf_analysis_textarea', value );
    },

    'Email Field' : function (browser) {
        var value = simpleField( browser, '.field_type-email input, .acf-field-email input' );
        replaceVars( browser, 'yoast_acf_analysis_email', value );
    },

    after : function(browser) {
        browser.end();
    }
};
