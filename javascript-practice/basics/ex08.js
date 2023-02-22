/*
    자바스크립트 객체 3 - 확장
*/

var o = {
    name : '둘리',
    age: 10
};

var f = function() {
    console.log('Hello World');
};

console.log("--- 확장(object 타입) ---");
o.another = {
    name: '마이콜',
    age: 20,
    print: function() {
        //this = print
        console.log(this.name + ":" + this.age);
    }
};

console.log(o);
o.another.print();

console.log("--- 확장(function) 타입) ---");
f.another = {
    name: '마이콜',
    age: 20,
    print: function() {
        console.log(this.name + ":" + this.age);
    }
};
console.log(f);
f.another.print();

console.log("--- 확장: 기본타입(primitive type)은 확장되지 않는다. ---");
var i1 = 10;
var i2 = new Number(10);

console.log(i1 + ":" + i2 +":" + (i1+i2));
i2.another = {
    name: '마이콜',
    age: 20
}

console.log(i2);

i1.another = {};    //유사 객체 new Number(i1).another = {}; 로 변환된다.
console.log(i1.another); //유사 객체 console.log(new Number(i1).another);로 변환