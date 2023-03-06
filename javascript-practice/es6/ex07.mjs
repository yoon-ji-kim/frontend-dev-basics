/**
 *  module
 * 
 *  exports => require
 *  
 *  es6 module 시스템이라는 것을 알려줘야함
 *  1. package.json 파일에 "modules": false 적어주기
 *  2. .mjs 파일로 만들기 
 * export => import
 */

//예제 1. unnamed export 모듈에서 하나의 대상을 import 할 때는 이름을 지정
import myfunction from './ex07.01.mjs';
import myObject from './ex07.02.mjs';
console.log(myfunction(10, 20));
console.log(myObject.add(10, 20));

//예제 2. named export는 다수가 import 대상이 될 수 있기 때문에 하나의 특정이름으로 받을 수 없다.
        //오류! import m from './ex07.03.mjs';
        //대신 * as NAME을 사용한다.

import * as m from './ex07.03.mjs';
console.log(m.add(10, 20));
console.log(m.substract(10, 20));

// 예제 3.
import { substract } from './ex07.04.mjs';
console.log(substract(10, 20));

//예제 4.
import math, {add} from './ex07.05.mjs';
console.log(math.add(10, 20));
console.log(add(10, 20));