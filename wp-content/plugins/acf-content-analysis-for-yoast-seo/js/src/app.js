/* global YoastSEO */
var config = require( "./config/config.js" );
var helper = require( "./helper.js" );
var collect = require( "./collect/collect.js" );
var replaceVars = require( "./replacevars.js" );

var analysisTimeout = 0;

var App = function(){

    YoastSEO.app.registerPlugin(config.pluginName, {status: 'ready'});

    YoastSEO.app.registerModification('content', collect.append.bind(collect), config.pluginName);

    this.bindListeners();

};

App.prototype.bindListeners = function(){

    var _self = this;

    if(helper.acf_version >= 5){

        jQuery(function(){

            replaceVars.updateReplaceVars(collect);

            acf.add_action('change remove append sortstop', _self.maybeRefresh);
            acf.add_action('change remove append sortstop', replaceVars.updateReplaceVars.bind(_self, collect));

        });

    }else{

        var fieldSelectors = config.fieldSelectors.slice(0);
        var wysiwygSelector = 'textarea[id^=wysiwyg-acf]';

        // Ignore Wysiwyg fields because they trigger a refresh in Yoast SEO itself
        fieldSelectorsWithoutWysiwyg = _.without(fieldSelectors, wysiwygSelector);

        jQuery(document).on('acf/setup_fields', function(){

            replaceVars.updateReplaceVars(collect);

            var fieldsWithoutWysiwyg = jQuery('#post-body, #edittag').find(fieldSelectorsWithoutWysiwyg.join(','));
            var fields = jQuery('#post-body, #edittag').find(fieldSelectors.join(','));

            fieldsWithoutWysiwyg.on('change', _self.maybeRefresh.bind(_self) );
            // Do not ignore Wysiwyg fields for the purpose of Replace Vars.
            fields.on('change', replaceVars.updateReplaceVars.bind(_self, collect));

            if (YoastSEO.wp._tinyMCEHelper) {

                jQuery(wysiwygSelector).each( function () {
                    YoastSEO.wp._tinyMCEHelper.addEventHandler(this.id, [ 'input', 'change', 'cut', 'paste' ],
                        replaceVars.updateReplaceVars.bind(_self, collect));
                });

            }

            //Also refresh on media close as attachment data might have changed
            wp.media.frame.on('close', _self.maybeRefresh.bind(_self) );
        });

    }
};

App.prototype.maybeRefresh = function(){

    if ( analysisTimeout ) {
        window.clearTimeout(analysisTimeout);
    }

    analysisTimeout = window.setTimeout( function() {

        if(config.debug){
            console.log('Recalculate...' + new Date() + '(Internal)');
        }

        YoastSEO.app.pluginReloaded(config.pluginName);
    }, config.refreshRate );

};

module.exports = App;
