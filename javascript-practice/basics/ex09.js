/*
    자바스크립트 객체 4 - prototype 기반의 상속과 오버라이딩
    : 자바스크립트 객체지향프로그래밍
            prototype: new 연산자로 생성자를 호출하면 instance가 만들어지는데
            이 instance의 생략 가능한 프로퍼티인 proto는 생성자의 prototype을 참조한다.
            prototype에는 constructor라는 속성이 있고 원래 생성자 함수를 참조한다.
*/
var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}
MyObject.prototype.school = 'bitacademy';
MyObject.prototype.course = 'Spring & React';
MyObject.prototype.info = function() {
    console.log(this.name + ":" + this.age + ":" + this.school + ":" + this.course);
}
console.log(MyObject.prototype);    //{}

//MyObject 인스턴스 생성 1
var o1 = new MyObject("마이콜", 20);
o1.info();
o1.school = 'douzone';
o1.info();

//MyObject 인스턴스 생성 2
var o2 = new MyObject("둘리", 10);
o2.info = function() {
    console.log('쉿! 비밀');
}
o2.info();
