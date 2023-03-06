/* 
    exports 뒤에 반드시 이름을 사용하여 export 하여야 한다. 
    named export
*/

exports.PI = 3.14;
exports.min = function(){
        var min = Number.MAX_SAFE_INTEGER;
        //순회
        //Array.prototype.forEach.call(arguments, function(e){});
        Array.from(arguments).forEach(function(e) {
            if(e < min){
                min = e;
            }
        });

        return min;
};
exports.max = function() {
    var max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(function(e) {
        if(e > max){
            max = e;
        }
    });

    return max;
    
};