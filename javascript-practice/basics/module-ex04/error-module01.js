/*
    잘못된 module 생성 01
*/
var App = function() {
    console.log('App() called');
}

// error!!! module exports 와 exports 구분 못해서 생긴 문제
exports = App;