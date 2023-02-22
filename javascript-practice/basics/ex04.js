/*
    변수의 스코프 (Scope)

    1. 자바스크립트는 코드에서 변수의 범위를 알 수 있다. (정적 스코프)
    2. 자바스크립트는 전역 범위가 있다.
    3. ES6 이전
        - 자바와 같은 블록 {} 범위를 지원하지 않고, 함수 범위만 지원함
        - var 키워드를 사용해야 함수 범위를 가짐
    4. ES6 이후(ES6 ~ ES2023)
        - 자바와 같은 블록 {} 스코프를 지원
        - left 키워드를 사용해서 블록 범위를 가짐
        - const 키워드는 블록 범위에 있는 상수를 정의할 때 사용
    5. 정리
        const/let 키워드 둘 중 하나를 반드시 붙여 사용하기
        안붙이면 전역범위가 된다: hoisting이 일어남
*/

//  호이스팅 
// - var 변수 선언과 함수선언문에서만 호이스팅이 일어난다.
// - var 변수/함수의 선언만 위로 끌어 올려지며, 해당 함수 유효 범위의 최상단에 선언하는 것
var i =20;          //전역 범위
var f = function() {
    var i = 20;     //함수 범위
    j = 100;        //전역 범위

    console.log(i); //함수 범위
    i = j-i;
}

f();

console.log(i);     //전역 범위의 i
console.log(j);

console.log("--- var 키워드는 함수 블록에서만 함수 범위로 만든다.");
if(90 + 10 == 100) {
    var k = 10;     //전역 범위
}
console.log(k);   

{
    let x = 1000;
    const PI = 3.14;
    x = 100;
    // PI = 0;            //error: Assignment to constant variable.
}

// console.log(x);     //error: x is not defined