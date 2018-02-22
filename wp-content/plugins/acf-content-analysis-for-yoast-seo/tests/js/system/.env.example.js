var chromedriver = require('chromedriver');
module.exports = {
    "user"     : "wp",
    "password" : "wp",
    before : function(done) {
        chromedriver.start();
        done();
    },
    after : function(done) {
        chromedriver.stop();
        done();
    },
    beforeEach: function( browser, done ) {
        var page = browser.page.WordPressHelper();
        page.login();
    }
};