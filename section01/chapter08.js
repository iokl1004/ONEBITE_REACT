// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;    // ?? 가 바로 null 병합 연산자! 이 양쪽에 있는 값들중에 null 이나 언디파인 값을 찾아낸다!
// console.log(var4);       // 10 출력!

let var5 = var1 ?? var3;
// console.log(var5);       // 20 출력!

let var6 = var2 ?? var3;    // 이런경우 둘다 null이나 언디파인이 아닌경우 맨처음에 적힌 값이 출력이 됨!
// console.log(var6);          // 10 출력!

// let userName = "장인기";
let userName;
let userNickName = "Interlood";

let displayName = userName ?? userNickName;
// console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환 하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;   // 뒤에 나오는 변수의 타입을 문자열로 반환을 함.
console.log(t1);        // string 출력!

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";     // 왼쪽에는 참일때의 반환값 오른쪽에는 거짓일때의 반환값.
console.log(res);