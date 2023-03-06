/**
 * Named Export
 * 
 * 1. exports(require.js)와 유사함
 * 2. distructing이 가능함
 */

const add =  function(a, b) {
    return a + b;
}

const substract = function(a, b){
    return a - b;
}

export {add, substract};