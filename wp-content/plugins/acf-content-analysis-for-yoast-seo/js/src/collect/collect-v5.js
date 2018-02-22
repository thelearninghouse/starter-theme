module.exports = function(){

    var outerFieldsName = [
        'flexible_content',
        'repeater',
        'group'
    ];

    var innerFields = [];
    var outerFields = [];

    var fields = _.map(acf.get_fields(), function(field){

        var field_data = jQuery.extend( true, {}, acf.get_data(jQuery(field)) );
        field_data.$el = jQuery(field);
        field_data.post_meta_key = field_data.name;

        // Collect nested and parent
        if( outerFieldsName.indexOf(field_data.type) === -1 ) {
            innerFields.push(field_data);
        }else{
            outerFields.push(field_data);
        }

        return field_data;

    });

    if( outerFields.length === 0){
        return fields;
    }

    // Transform field names for nested fields.
    _.each(innerFields, function(inner){

       _.each(outerFields, function(outer){

           if (jQuery.contains(outer.$el[0], inner.$el[0])) {

               // Types that hold multiple children.
               if (outer.type === 'flexible_content' || outer.type === 'repeater'){

                   outer.children = outer.children || [];
                   outer.children.push(inner);
                   inner.parent = outer;
                   inner.post_meta_key = outer.name + '_' + (outer.children.length - 1) + '_' + inner.name;

               }

               // Types that hold single children.
               if (outer.type === 'group') {

                   outer.children = [inner];
                   inner.parent = outer;
                   inner.post_meta_key = outer.name + '_' + inner.name;

               }

           }

       });

    });

    return fields;

};
