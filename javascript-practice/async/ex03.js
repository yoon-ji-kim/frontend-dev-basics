const fetch = require('./ex02'); 

const ex03 = async function(param) { //비동기함수 호출 함수, async
    try {
        const data = await fetch(param);
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}

ex03("data");
console.log("wait.........");