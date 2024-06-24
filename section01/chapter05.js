// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);   // 더하기
// console.log(num1 - num2);   // 빼기
// console.log(num1 * num2);   // 곱셈
// console.log(num1 / num2);   // 나누기
// console.log(num1 % num2);   // 나머지

let inf = Infinity;             // 양의 무한대
let mInf = -Infinity;           // 음의 무한대

let nan = NaN;                  // Number타입에 포함되며, Not a Number. 수치연산을 실패했을때 나옴.
// console.log(1 * "hello");       // 예시.

// 2. String Type
let myName = "장인기";          // 문자열은 무조건 작은따옴표, 쌍따옴표로 생성!
let myLocation = "등촌3동";
let introduce = myName + myLocation;

//console.log(introduce);         // 장인기등촌3동 출력!

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;          // 백틱 변수를 동적으로 사용이 가능하다!
//console.log(introduceText);

// 템플릿 리터럴 문법 실무에서도 가장 자주 사용되고 유용한 문법!

// 3. Boolean Type (상태를 의미함.)
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다.)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);

// null은 개발자 즉 프로그래머가 이 변수에 어떠한 값도 없다 라는것을 표시 할때 사용.
// Undefined는 이 변수를 미처 초기화하지 못하였구나, 존재하지 않는 값을 불러올때.