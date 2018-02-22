var assert = require('assert');
var logContains = require('../../helpers/logContains');

module.exports = {
    tags: ['acf4', 'relational'],

    before: function (browser) {
        var page = browser.page.WordPressHelper();
        page.newPost();
    },

    beforeEach: function (browser) {
    },

    'Taxonomy Checkbox Field' : function (browser) {

        var selector = '.acf-taxonomy-field .acf-checkbox-list li:first-child ';

        browser.waitForElementVisible( selector, 1000 );

        browser.pause( 3000 );

        browser.click( selector + 'input' );

        browser.getText( selector + 'label', function(result) {

            browser.pause( 3000 );

            logContains( browser, 'li>' + result.value, this.assert.ok );

        });

    },

    'Taxonomy Multi Select Field' : function (browser) {

        var selector = '.acf-taxonomy-field select ';

        browser.waitForElementVisible( selector, 1000 );

        browser.pause( 3000 );

        browser.click( selector + 'option:first-child' );

        browser.getText( selector + 'option:checked', function(result) {

            this.pause( 3000 );

            logContains( browser, 'li>' + result.value, this.assert.ok );

        });

    },

    after : function(browser) {
        browser.end();
    }
};
