var logContains = require('./logContains');
var dummyContent = require('./dummyContent');

module.exports = function( browser, selector ){

    var hash = dummyContent.hash();

    browser.setValue( selector, [ hash , browser.Keys.TAB ] );

    browser.pause( 3000 );

    logContains( browser, hash, browser.assert.ok );

    browser.expect.element('#snippet_meta').text.to.contain( hash );

    return hash;
};
