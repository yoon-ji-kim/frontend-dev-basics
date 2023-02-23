/**
 *  String Primitive type과 String 객체 함수(String.prototype.*)
 */

// 배열처럼 접근
var str = "Hello World";
for(var i=0; i<str.length; i++){
    console.log(str[i]);
}

// 문자열 합치기
var str2 = "hello"
var str3 = "world"
var str4 = str2 + " " + str3;
console.log(str4);

//castring
var str5 = "5" + 5;
console.log(str5);      //55
var str6 = "boolean" +true;
console.log(str6);      //booleantrue

//객체 함수
var str7 = "string1 string2 string3";
var index = str7.indexOf('string2');        //8
console.log(index);

index = str7.indexOf('string4');            //-1
console.log(index);
        //firstindex, lastindex -1까지
var str8 = str7.substring(10, 13);          //rin
console.log(str8);

var a = str7.split(" ");                    //[ 'string1', 'string2', 'string3' ]
console.log(a);

var a2 = str7.split(":");                   //[ 'string1 string2 string3' ]
console.log(a2);

