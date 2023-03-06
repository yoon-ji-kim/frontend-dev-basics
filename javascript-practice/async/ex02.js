/**
 *  비동기 함수
 */
const myAsyncFn02 = function(param) {
    return new Promise(function(resolve, reject){
        //비동기 코드
        setTimeout(function() {
            if(param ==='data'){
                resolve('ok');
            } else{
                reject(new Error('fail'));
            }
        }, 2000);
    });
}

//test 01: success 비동기함수에서의 success 처리
                //콜백함수(에러, result)
myAsyncFn02("data").then(function(result) {
    console.log(result);
})

//test 02: fail 비동기함수에서의 fail 처리
myAsyncFn02("").catch(function(error) {
    console.log(error);
});
//myAsyncFn01 처리하는 동안 코드 처리하고 처리 하고 나서 callback
console.log("wait.........");