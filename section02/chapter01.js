// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;    // Big Integer 라고하며 특수한 자료형이며, 아주아주 큰 숫자를 저장하는데에 사용되는 값인데 웹개발중에는 잘 사용하지는 않음.

// if(!f7){
//     console.log("falsy");
// }

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if (t1) {
//     console.log("Truthy");
// }

// 3. 활용 사례

function printName(person) {
    // if(person === undefined || person === null) {   // 복잡해짐...
    if(!person) {   // 간결해졌다!
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

// let person;
let person = { name : "장인기" };
printName(person);