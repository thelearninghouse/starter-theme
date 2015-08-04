//UI BUTTON
//=======================================
function UIButton(imgOn, imgOFF, callB, isfloat){
    var btnClass = '';
    if(isfloat){
        btnClass = 'butonUiFloat';
    }
    var callBack = callB;
    var isOn=false;
    var container = jQuery('<div class="btnUI '+btnClass+'"></div>');
    this.getButtonUI = function(){
        return container;
    }
    
    var onUI = jQuery('<div class="btnImg"><img src="'+imgOn+'" /></div>');
    var offUI = jQuery('<div class="btnImg"><img src="'+imgOFF+'" /></div>');
    onUI.appendTo(container);
    offUI.appendTo(container);
    
    
    offUI.click(function(e){
        toggleButton();
    });
    
    function toggleButton(isSet){
        if(isOn){
            isOn = false;
            offUI.css('opacity', 1);
        }else{
            isOn = true;
            offUI.css('opacity', 0);
        }
        if(!isSet){
            callBack(isOn);
        }
    }
    
    this.setState = function(val){
        isOn = val;
        if(isOn){
            offUI.css('opacity', 0);
        }else{
            offUI.css('opacity', 1);
        }
    }
}

