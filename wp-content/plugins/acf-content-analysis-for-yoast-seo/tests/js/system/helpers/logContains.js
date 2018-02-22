module.exports = function( browser, string, callback ){

    browser.getLog('browser', function(logEntriesArray) {

        var hasText = false;

        logEntriesArray.forEach(function(log) {

            //console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);

            if( hasText || log.message.indexOf(string) !== -1 ){
                hasText = true;
            }

        });

        //console.log(string);

        callback( hasText );

    });

}