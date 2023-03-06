/**
 * let: Block Scope의 변수
 */

// let은 블록 범위
try {
    if(true) {
        var i = 20; //var는 함수범위
        let j = 10;
    }

    console.log(i);
    console.log(j);     //error: ReferenceError: j is not defined
} catch(e) {
    console.error('error: '+ e);
}

//cf: var는 함수 범위

try {
    //f는 try block에 정의
    let f = function() {
        var m = 20;
    }

    f();
    console.log(m);     //error: ReferenceError: m is not defined
} catch (e) {
    console.error('error: '+ e);
}
