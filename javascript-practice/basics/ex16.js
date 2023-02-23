/**
 *  자바스크립트 함수: function 타입의 객체
 */

console.log("----함수 생성 방법1: 함수 리터럴 ----");
function f1(a, b) {
    return a + b;
}
console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

console.log("----함수 생성 방법2: 함수 리터럴 ----");
var f2 = function(a, b) {
    return a + b;
}
console.log(typeof(f2), f2 instanceof Function, f2(10, 20));

console.log("----함수 생성 방법3: new 연산자, Function() 생성자 함수 사용 ----");
var f3 = new Function("a", "b", "return a+b;");
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));

console.log("----함수 생성 방법4: 익명(anonymous) 함수 사용 ----");
// var f4 =function() {
//     console.log("time out!");
// };
// setTimeout(f4, 1000);
// 아래에서 변수 사용하지 않기 때문에 익명 함수로 바꿀 수 있음
setTimeout(function() {         //함수 이름 없음
    console.log("time out!");
}, 10);                         //비동기

console.log("----익명 함수의 다른 예시: 즉시 한번만 실행하는 함수----")
var s = (function(a, b) {
    var m = 10;
    return a/10 + b/10;
})(10,20)               //익명함수 생성 후 호출, s에 값저장
console.log(s);

// 가변 파라미터
// 1. 자바스크립트는 기본적으로 가변 파라미터를  지원한다.
// 파라미터는 고정되어 있지 않다

//  에러가 나지 않는다.
console.log("----가변 파라미터 함수 sum() ----")
var f4 = function(a, b, c) {
    console.log(a, b, c,);
}

f4(0, 1, 2, 3, 4, 5, 6, 7, 8);

// 2. 예
console.log("----가변 파라미터 예시 ----");
var sum = function() {
    // arguments 객체의 __proto__가 가리키고 있는것
    // false ,true, 파라미터 길이
    //console.log(arguments instanceof Array, arguments instanceof Object, arguments.length);

    var sum =0;
    // for(var i=0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }

    //ERROR 발생 : arguments의 __proto__ 는 Object Prototype에 chain이 되어 있기 때문
    //forEach는 array instance가 아니라 사용할 수 없음
    //arguments는 object의 instance이다.
    // arguments.forEach(function(e) {
    //     sum += e;
    // })
    //forEach에서 this를 argumnents로 만들기
    //call메소드를 통해 caller 지정(this가 될 것, )
    Array.prototype.forEach.call(arguments, function(e){
        sum += e;
    })
    return sum;
}

console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));