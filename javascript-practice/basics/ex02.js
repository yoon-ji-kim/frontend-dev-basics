/*
    변수와 자료형 (Data Type) 
    변수 : 객체를 참조할 수 있는 이름, 실행 결과를 담고 있는 자료 구조
        [기본타입(Primitive Type)]
        - undefined
        - number
        - string
        - boolean
        [객체]
        - object
            1. new 생성자함수(); 사용해서 생성
                Number(), String(), Boolean(), Object(), Array(), RegExp(), **Function()
                => obejct 타입의 객체                                        =>function 타입의 객체
            2. {} : 객체 리터럴, block
            3. [] : 배열 리터럴
            4. null
        - function
*/

console.log("=== 기본타입(undefined, number, string, boolean) ========");
var u = undefined; //var u;와 동일, 선언과 정의를 구분하지 않는다.
var i = 10;
var s = "Hello World!";
var b = true;

console.log(u + ":" + typeof (u));
console.log(u + ":" + typeof (i));
console.log(u + ":" + typeof (s));
console.log(u + ":" + typeof (b));

console.log("=== 객체타입(object, function) ========");
console.log("=== 객체타입(object) ========");
var i2 = new Number(10); //Number는 함수 생성자 함수는 대문자로 시작, 일반함수는 소문자로 시작
var s2 = new String('Hello World');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();
var o2 = {};
var a2 = [];
var n = null;

console.log(i2 + ":" + typeof(i2) + ":" + (i2 instanceof(Number)));
console.log(s2 + ":" + typeof(s2) + ":" + (s2 instanceof(String)));
console.log(b2 + ":" + typeof(b2) + ":" + (b2 instanceof(Boolean)));
console.log(o + ":" + typeof(o) + ":" + (o instanceof(Object)));
console.log(a + ":" + typeof(a) + ":" + (a instanceof(Array)));
console.log(d + ":" + typeof(d) + ":" + (d instanceof(Date)));
console.log(o2 + ":" + typeof(o2) + ":" + (o2 instanceof(Object)));
console.log(a2 + ":" + typeof(a2) + ":" + (a2 instanceof(Array)));
console.log(n + ":" + typeof(n)); // n instanceof(Object)) : false

//일반 함수 : 호출해서 사용
// function student(name) {
    //     console.log(name);
    // }
    
    // student('둘리');
    
    //생성자 함수
    // function Student(name) {
        //     this.name = name;       
        // }
        // var o = new Student('둘리');
        // console.log(o.name + ":" + typeof(o));

console.log("=== 객체타입(function) ========");
function f1(a, b) {
    return a + b;
}

var f2 = function(a, b) {
    return a + b;
}
                //파라미터1, 파라미터2, 본문
var f3 = new Function("a", "b", "return a + b");
console.log(f1(10,20), f2(10,20), f3(10, 20));
console.log("fi:", typeof(f1)); 
console.log("f2: " + typeof(f2)); 
console.log("f3: " + typeof(f3)); 

console.log("=== 원시 타입도 메소드를 호출 할 수 있음(유사 객체) ========");
console.log(b2.valueOf());
console.log(b.valueOf()); // new Boolean(b).valueOf() 와 같이 유사객체가 만들어짐
