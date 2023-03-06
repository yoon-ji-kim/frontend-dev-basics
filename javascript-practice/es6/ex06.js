/**
 *  구조 분해(Destrunting)
 */

// 예시 01
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@naver.com'
}

//let firstName = user.firstName;
//let lastName = user.lastName;
//let email = user.email;

const {firstName, lastName, email} = user;
console.log(firstName, lastName, email);

// 예시 02 - Default Value
const goods = {
    name: 'TV',
    price: 10000,
    stockCount: 10
}
const {name, price, stockCount=0, soldCount=0} = goods;
console.log(name, price, stockCount, soldCount);

// 예시 03 - 구조 분해해야 할 객체의 속성이름과 변수이름이 다를 경우
const person = {
    n: '마이콜',
    c: 'korea'
}

const {n: fullName, c:country} = person;
console.log(fullName, country);

// 예시 04 - 내부 개체(Nested Object)의 구조 분해
const student = {
    name: '둘리',
    age: 10,
    score: {
        math: 30,
        korean: 100,
        science: 90
    }
};

const {name: studentName, score:{math=0, korean=0, science=0, music=0}} = student;

console.log(`${studentName}의 성적
국어: ${korean},
수학: ${math},
과학: ${science},
음악: ${music}
`);

// 예시 05
const averageScore = function({name: studentName, score: { math=0, korean=0, science=0}}) {
    console.log(`${studentName}의 평균은 ${(math + korean + science)/3}입니다.`)
}

averageScore(student);

// 예시 06 - 배열 구조 분해
const color = [155, 200, 87];
let [red, green, blue]= color;
console.log(red, green, blue);

// 예시 07 - 배열 구조 분해 : 디폴드 값

[red=0, green=0, blue=0, alpha=0] = color;
console.log(red, green, blue, alpha);

// 예시 08 - 배열 구조 분해 :skip value
const [,, colorOfBlue=0] = color; //전역변수라서 const나 let붙여야함
console.log(colorOfBlue);

// 예시 09 - 배열 구조 분해 : swap values
let x = 20;
let y = 10;
console.log(x, y);
let temp = x;
x = y;
y = temp;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

// 예시 10 - 배열 구조 분해 : ... array spread operator
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [firstColor, secondColor, ...otherColors] = rainbow;
console.log(firstColor, secondColor, otherColors);

console.log("Colors of Rainbow", rainbow);
console.log(1, 2, 3, 4);
console.log("Colors of Rainbow", ...rainbow);

// 예시 10 - 배열 구조 분해 : ... array spread operator 함수의 파라미터로 사용하기
//"red orange yellow"
//var f =  function(...colors) {
//    return colors.join(' ');
//}

//console.log(f('red', 'orange', 'yellow'));

const s = ((...colors) => colors.join(' '))('red', 'orange', 'yellow');
console.log(s);
