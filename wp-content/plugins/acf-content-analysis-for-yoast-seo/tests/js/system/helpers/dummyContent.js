var crypto = require('crypto');

module.exports = {

    hash: function( toHash ){

        if(!toHash){
            toHash = (new Date()).toString();
        }

        return crypto.createHash('sha256').update( toHash, 'utf8').digest('hex');
    }

}