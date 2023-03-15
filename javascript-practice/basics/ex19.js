/**
 *  클로저(Closure) : "클로저는 함수와 그 함수가 정의되었을 때의 스코프(Lexical Scope)와의 조합"
 * 
 * 1. 자유변수에 닫혀(closed, 가까이 엮어)있는 함수
 * 2. 클로저는 자신이 생성될 때의 스코프(Lexical Scope)를 기억하는 함수
 * 3. 클로저는 함수가 자신이 선언되었을 때의 스코프(Lexical Scope)를 기억하여 
 *    자신이 선언되었을 때 스코프 밖에서 호출되어도 그 소코프에 접근할 수 있는 함수
 * 4. 사용하는 이유
 *      - 상태 유지 * ex) React's useState
 *      - 전역 변수 회피
 *      - 정보 은닉  ex) react's useState  
 * 
 */

//Lexical Scope
const f1 = function() {
    const s = "Hello Closure";

    const inner = function() {
        console.log(s);
    }

    inner();    //같은 스코프
}

//f1();

//Closure
const f2 = function() {
    const s = "Hello Closure";

    return function() {
        console.log(s);
    }

}

const closure = f2();
closure();