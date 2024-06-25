// 1. 함수 표현식

function funcA() {
    // console.log("funcA");
}

let varA = funcA;
varA();

// 익명함수는 호이스팅이 되지 않는다!
// varB();

let varB = function () {    // 익명함수.
    // console.log("funcB");
};

varB();
// funcB(); // 오류 발생!
//console.log(varA);

// 2. 화살표 함수 : 함수를 이전보다 더 빠르고 간결하게 생성해줄수 있는 자바스크립트 문법.
// let varC = function () {
let varC = (value) => {
    console.log(value);
    return value + 1;
}

console.log(varC(10));