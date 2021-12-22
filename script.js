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
  };

  DOM.prototype.off = function off(evt, callback){ 
    this.element.forEach(function(element){ 
      element.removeEventListener(evt, callback, false); 
    }); 
  };

  DOM.prototype.get = function get(){ 
    return this.element; 
  };

  DOM.prototype.forEach = function forEach(){ 
    Array.prototype.forEach.apply(this.element, arguments); 
  };

  DOM.prototype.map = function map(){ 
    Array.prototype.map.apply(this.element, arguments); 
  };

  DOM.prototype.filter = function filter(){ 
    Array.prototype.filter.apply(this.element, arguments); 
  };

  DOM.prototype.reduce = function reduce(){ 
    Array.prototype.reduce.apply(this.element, arguments); 
  };

  DOM.prototype.reduceRight = function reduceRight(){ 
    Array.prototype.reduceRight.apply(this.element, arguments); 
  };

  DOM.prototype.every = function every(){ 
    Array.prototype.every.apply(this.element, arguments); 
  };

  DOM.prototype.some = function some(){ 
    Array.prototype.some.apply(this.element, arguments); 
  };

  DOM.typeOfObject = function typeOfObject(obj){ 
    return Object.prototype.toString.call(obj); 
  };

  DOM.isArray = function isArray(obj){ 
    return this.typeOfObject(obj) === '[object Array]'; 
  };

  DOM.isObject = function isObject(obj){ 
    return this.typeOfObject(obj) === '[object Object]'; 
  };

  DOM.isFunction = function isFunction(obj){ 
    return this.typeOfObject(obj) === '[object Function]'; 
  };

  DOM.isNull = function isNull(obj){ 
    return this.typeOfObject(obj) === '[object Null]'
  };

  DOM.isUndefined = function isUndefined(obj){ 
    return this.typeOfObject(obj) === '[object Undefined]'; 
  };

})(document); 