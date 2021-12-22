(function (doc){ 
  
  'use strict'; 

  class DOM{ 
    constructor(elements){ 
      this.element = doc.querySelectorAll(elements);  
    }
  }

  DOM.prototype.on = function on(evt, callback){ 
    this.element.forEach(function(element){ 
      element.addEventListener(evt, callback, false); 
    }); 
  }

  DOM.prototype.off = function off(evt, callback){ 
    this.element.forEach(function(element){ 
      element.removeEventListener(evt, callback, false); 
    }); 
  }

  DOM.prototype.get = function get(){ 
    return this.element; 
  }

})(document); 