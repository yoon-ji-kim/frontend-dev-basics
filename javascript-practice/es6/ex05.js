/**
 *  Arrow Function
 */
const numbers = [1, 2, 3, 4, 5];

const power = function(x) {
    return x * x;
}

numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power(n)} \t`);
})

//예제 01
console.log('\n---------\n');
numbers.forEach(function(n){
    //power 대체 하기 1: anonymous 함수 호출
    /*
    let result = (function(x) {
        return x * x
    })(n);
    */
   //power 대체 하기 2: 화살표 함수 호출
   // () => {}
   // return 생략 가능, 한줄이면 block 생략 가능
   //let result = (x => {return x*x})(n);
   let result = (x => x*x)(n);
   process.stdout.write(`${n}: ${result} \t`);
})

//예제 02
console.log('\n---------\n');
const power2 = x=> x*x;
//numbers.forEach(function(n){
 //   process.stdout.write(`${n}: ${(x => x*x)(n)} \t`);
//})
numbers.forEach(n => process.stdout.write(`${n}: ${(x => x*x)(n)} \t`));

//예제 03 여러 행 함수는 block 생략 불가능
console.log('\n---------\n');
[5,3, 15, 1045, 43, 92].forEach(e => {
    if(e%5){
        process.stdout.write(`${e}: ${(x => x*x)(e)} \t`)
    }
});

//예제 04 :this를 어휘적으로 바인딩(Lexical Bind)
console.log('\n---------\n');
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function() {
        //console.log(this); //this는 dooly
        //this.friends.forEach(function(f){
        //    //console.log(this); //this는 global
        //    console.log(`${this.name}의 친구 ${f}`);
        //})
        //화살표 함수로 하면 this는 dooly
        this.friends.forEach(f => console.log(`${this.name}의 친구 ${f}`));
    }
};

dooly.printFriends();