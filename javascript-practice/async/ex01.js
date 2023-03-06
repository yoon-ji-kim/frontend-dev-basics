/**
 *  비동기 함수
 */

const myAsyncFn01 = function(param, callback) {
    //
    //비동기 코드
    //파일시스템 접근(file io), 네트워크 통신, SQL to DB, setTimeout 
    setTimeout(function() {
        if(param ==='data'){
            callback(null, 'ok');
        } else{
            callback(new Error('fail'), null);
        }
    }, 2000);
}



//test 01: success 비동기함수에서의 success 처리
                //콜백함수(에러, result)
myAsyncFn01("data", function(error, result) {
    if(error) {
        console.error(error);
        return;
    }

    console.log(result);
});

//test 02: fail 비동기함수에서의 fail 처리

myAsyncFn01("", function(error, result) {
    if(error) {
        console.error(error);
        return;
    }

    console.log(result);
});

//myAsyncFn01 처리하는 동안 코드 처리하고 처리 하고 나서 callback
console.log("wait.........");