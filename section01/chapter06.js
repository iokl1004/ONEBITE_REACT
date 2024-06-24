// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것.

let num = 10;
let str = "20";

const result = num + str;
// console.log(result);        // 1020 출력! num 변수가 묵시적으로 String으로 형 변환이 됨!

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시.
// -> 문자열 -> 숫자
let str1 = "10";
let strToNul1 = Number(str1);   // Number라는 내장함수 호출!
//console.log(10 + strToNul1);    // 20 출력!

let str2 = "10개";
// let strToNum2 = Number(str2);
// console.log(strToNum2);           // NaN 출력!

let str3 = "10개";
// let strToNum3 = parseInt(str3);
// console.log(strToNum3);              // 10 출력!

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);           // String 내장함수 호출을 하여, 20이 "20" 으로 변경!
console.log(numToStr1 + "입니다.");     // 20입니다. 출력!
