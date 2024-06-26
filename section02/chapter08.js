// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// 3회호출!
arr1.forEach( function (item, idx, arr) {
    // console.log(idx, item * 2);
});

// forEach 메서드를 이용해서 arr1의 모든 값에 곱하기2를 해서 배열에 넣어보돍 하자!
let doubledArr = [];

arr1.forEach((item)=> {
    doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);     // true 반환

let isInclude2 = arr2.includes(10);
// console.log(isInclude2);    // false 반환

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index);     // 1 출력!

let index2 = arr3.indexOf(20);  // 존재하지 않는 값을 출력해달라고 하면
// console.log(index2);            // -1 출력!

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=> item % 2 !== 0);

// console.log(findedIndex);
// indexOf가 있는데 굳이 왜 씀....? 이라는 생각이 들수도 있는데
// indexOf라는 배열의인덱스 객체타입이 저장되어있는 배열의 값에서는 정확하게 찾아낼수 없다!

let objectArr = [
    { name : "장인기" },
    { name : "홍길동" },
]

// console.log(
//     objectArr.indexOf({ name : "장인기" })  // -1 출력! 못찾는다!!
// );

// console.log(
//     objectArr.findIndex (
//         (item) => item.name === "장인기"
//     )
// );

// 정리를 하자면, 단순한 원시타입의 값을 찾을때는 indexOf!
// 복잡한 객체타입의 값을 찾을때는 findIndex!

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    { name : "장인기" },
    { name : "홍길동" },
];

const finded = arr5.find(
    (item) => item.name === "장인기"
);

console.log(finded);    // name : "장인기"