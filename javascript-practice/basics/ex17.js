/*
    Function.prototype.call
    Function.prototype.apply
    Function.prototype.bind

 */

    var myObject = {
        v: 'me',
        f1: function() {
            console.log(this.v);
        },
        f2: function(param1, param2) {
            console.log(param1 + " " + this.v + " " + (param2 ? param2 : ""));
        }
    }

    var yourObject = {
        v: 'you'
    }

    //일반적인 객체의 함수 호출
    myObject.f1();

    //apply : 호출되는 함수의 this를 파라미터로 전달된 객체로 변경
    myObject.f1.apply(yourObject);     //this를 yourObject로 변경

    //call: 호출되는 함수의 this를 파라미터로 전달된 객체로 변경하고,
    //         다른 파라미터도 전달할 수 있다.
    //파라미터 전달 시에는 call 사용! 호출하면서 바꿈
    myObject.f2.call(yourObject, "hello");
    myObject.f2.call(yourObject, "hello", "again");

    //bind: 호출되기 전 함수의 this를 파라미터로 전달된 객체로 세팅한다.
    var f3 = function() {
        console.log(this.v);
    }.bind(myObject);

    // f3();       //binding 전 undefined : 전역 객체 안에 v는 없음
    f3();           //me