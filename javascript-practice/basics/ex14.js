/**
 *  URL 다루기
 */

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

// location.href= url;

//1. escape: URL 전부를 encoding, 사용X, deprecated
var url2 = escape(url);
console.log(url2);

//2. encodingURI: URL 전체 중 파라미터 부분만 encoding
// 단,  URL 전체를 전체를 encoding 해야하는 경우 사용O

var url3 = encodeURI(url);
console.log(url3);

//3. encodeURIComponent: 개별적으로 값만 encoding 해야하는 경우, 사용O
var url4= encodeURIComponent(url);
console.log(url4);

//4. 
// 만들어야 할 URL이 "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com"
var url = "http://www.mysite.com/user";
var formData = {
    name: "둘리",
    email: "dooly@gmail.com"
};

var toQueryString = function(o) {
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));