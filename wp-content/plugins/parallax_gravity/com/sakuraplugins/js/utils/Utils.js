function Utils(){
}
//unique ID
Utils.guid = function(){
        var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
        do {                
            // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
            var ascicode=Math.floor((Math.random()*42)+48);
            if (ascicode<58 || ascicode>64){
                // exclude all chars between : (58) and @ (64)
                idstr+=String.fromCharCode(ascicode);    
            }                
        } while (idstr.length<32);
    
        return (idstr);     
}

//extract number
Utils.extractNumber = function(pxValue){
        var striped = pxValue.substring(0, pxValue.length-2);
        var val = parseFloat(striped);
        return val;
}