// 1. 대입 연산자
let var1 = 1;   // = 대입연산자

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// let num6 = 1 + 2 * 10;  // 곱셈 연산자가 먼저 우선순위가 강하다!
// console.log(num6);      // 21 출력!

let num6 = (1 + 2) * 10;  // 곱셈 연산자가 먼저 우선순위가 강하다!
// console.log(num6);      // 30 출력!

// 3. 복합 대입 연산자 ( 산술+대입 연산자 )
let num7 = 10;
// num7 = num7 + 20;    // 이렇게도 사용이 가능하지만!
num7 += 20;             // 이렇게 사용하는것이 더욱더 간결하다!
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
// console.log(num7);

// 4. 증감 연산자 ( 값을 1씩 늘리거나 1씩 줄일때 사용!)
let num8 = 10;
++num8;
num8++;
//num8++; // 뒤에 쓰게 되면 이 라인이 끝나고 나서야 증가가 됨!  ( 후위 연산 )
//++num8; // 앞에 쓰게 되면 이 라인에서 즉시 증가가 됨.          ( 전위 연산 )
//console.log(num8);

// console.log(--num8);
// console.log(num8--);
// console.log(num8);

// 5. 논리 연산자
let or = true || false;    // 둘중 하나만 true 여도 true!

let and = true && false;   // 둘다 true일 경우에는 true, 하나라도 아닐경우 false

let not = !true;            // 반대로 연산함

console.log(or, and, not);  // true false flase

// 6. 비교 연산자 ( 두개의 값을 비교하는 연산자 )
let comp1 = 1 === "1";      // 1과 2가 같은 값인지 비교하는 동등 비교연산자도 있음.
let comp2 = 1 !== 2;        // 1과 2가 다른 값인지 비교하는 비 동등 비교연산자도 있음.
// console.log(comp1, comp2);  // false true 발생!

let comp22 = 1 == "1";      // 이렇게 사용해도 되나, 값의 자료형 까지는 비교가 되지 않음.
let comp11 = 1 === "1";
// console.log(comp22, comp11);  // true false 발생!

let comp3 = 2 > 1;  // 2가 1보다 크냐?
let comp4 = 2 < 1;
// console.log(comp3, comp4);

let comp5 = 2 >= 2;    // 왼쪽에 있는 값이 오른쪽에 있는 값보다 크거나 같냐?
let comp6 = 2 <= 2;    // 왼쪽에 있는 값이 오른쪽에 있는 값보다 작거나 같냐?
console.log(comp5, comp6);