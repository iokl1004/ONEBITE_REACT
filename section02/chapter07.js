// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

// console.log(arr1);
// console.log(newLength); // 길이인 7이 출력된다!

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);    // 제거된 값 3 출력!
// console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem, arr3); // [2, 3] 출력!

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2, arr4);  // 길이 4와 [0, 1, 2, 3] 출력!

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);    // 2번째 인덱스부터 시작하여 4+1 번째 인덱스 전까지 자른다!
let sliced2 = arr5.slice(2);      // 두번째 인수를 생략하게 된다면, 자르기 시작할 부분부터 배열의 끝부분까지 잘라낸다!
let sliced3 = arr5.slice(-1);     // 배열의 뒤에서부터 잘라내고 싶다면 인수값에 마이너스를 넣으면된다!

// console.log(sliced);    // [3, 4, 5] 출력!
// console.log(sliced2);   // [3, 4, 5] 출력!
// console.log(sliced3);   // [5] 출력!
// console.log(arr5);      // 원본배열은 잘리지 않는다!

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);   // [1, 2, 3, 4] 출력!