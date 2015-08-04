/*
 * USAGE
 * 	   function helloEvent(event){
	   	 console.log(event.data);
	   }
	   EventBus.addEventListener(Event.COMPLETE, helloEvent);
	   EventBus.dispatchEvent(new Event(Event.COMPLETE, "some data"));
	   EventBus.removeEventListener(Event.COMPLETE);
	   EventBus.dispatchEvent(new Event(Event.COMPLETE, "some data 3"));
 */
var EventBusClass = {};

EventBusClass = function(){
	
	this.listeners = [];
	
	this.addEventListener = function(eventType, listener){
		this.listeners.push({eventType: eventType, listener: listener});
	}
	
	this.removeEventListener = function(eventType){
		for(var i=0;i<this.listeners.length;i++){
			if(this.listeners[i].eventType==eventType){
				console.log(this.listeners.splice(i, 1));
			}
		}
	}
	this.dispatchEvent = function(event){
		for(var i=0;i<this.listeners.length;i++){
			if(this.listeners[i].eventType==event.eventType){
				//console.log("found listener: "+this.listeners[i].eventType);
				this.listeners[i].listener(event);
			}
		}
	}
}

var EventBus = new EventBusClass();
