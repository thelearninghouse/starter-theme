var assert = require('assert');
var simpleField = require('../../helpers/simpleField');
var replaceVars = require('../../helpers/replaceVars');

module.exports = {
    tags: ['acf5', 'basic'],

    before: function (browser) {
        var page = browser.page.WordPressHelper();
        page.newPost();
    },

    beforeEach: function (browser) {
    },

    'URL Field' : function (browser) {
        var value = simpleField( browser, '.field_type-url input, .acf-field-url input' );
        replaceVars( browser, 'yoast_acf_analysis_url', value );
    },

    after : function(browser) {
        browser.end();
    }
};
