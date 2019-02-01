<?php

add_filter('wpmdb_preserved_options', function($preserved_options) {

    $preserved_options = array_merge($preserved_options, array(
        'wppusher_token', // don't overwrite wppusher_token
    ));

    return array_unique($preserved_options);
});
