var logContains = require('./logContains');

module.exports = function ( browser, fieldName, fieldValue ) {


    browser.execute(
        function() {
            return YoastReplaceVarPlugin.ReplaceVar !== undefined;
        },
        [],
        function( result ){
            var replaceVarPresent = result.value;

            if( replaceVarPresent ){
                browser.execute(function () { YoastSEO.app.snippetPreview.openEditor(); } );

                browser.clearValue( '.js-snippet-editor-title' );
                browser.setValue( '.js-snippet-editor-title', [ '%%cf_'+fieldName+'%%' , browser.Keys.TAB ] );

                browser.pause( 3000 );

                browser.expect.element('#snippet_title').text.to.contain( fieldValue );
            }
        }
    );

};
