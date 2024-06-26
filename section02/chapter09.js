// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환.
// find나 findindex와 비슷한 문법을 가짐.

let arr1 = [
    {name : "장인기", hobby : "볼링"},
    {name : "김효빈", hobby : "테니스"},
    {name : "홍길동", hobby : "독서"},
];

const teenisPeople = arr1.filter(
    (item) => item.hobby === "테니스"
);

// console.log(teenisPeople);  // name : 김효빈, hobby : 테니스 출력!

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환.
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr)=> {   // 매개변수로 현재요소, 반복 카운트, 원본배열을 전달 받음.
    // console.log(idx, item);
    return item * 2;
});

// console.log(mapResult1);

// arr1의 name값들만 추출해서 새로운 배열을 만들어보자!
let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
// console.log(arr3);

// 배열을 "사전순" 으로 정렬 해주기때문에 정렬이 되지 않음.
let arr3_1 = [10, 3, 5];
arr3_1.sort();
// console.log(arr3_1);

// 숫자의 대소 관계를 기준으로 오름차순 정렬을 하고 싶다면!
let arr3_2 = [10, 3, 5];
arr3_2.sort((a, b) => {
    if( a > b ) {
        // b가 a 앞에 와라
        return 1;   // 양수를 반환하게 되면 둘중의 더 작은값이 앞으로 오게 됨.
    } else if ( b > a ) {
        // a가 b 앞에 와라
        return -1;  // -> a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0;   // a, b 자리를 그대로 유지
    }
});

// console.log(arr3_2);

// 숫자의 대소 관계를 기준으로 오름차순 정렬을 하고 싶다면!
let arr3_3 = [10, 3, 5];
arr3_3.sort((a, b) => {
    if( a > b ) {
        // a가 b 앞에 와라
        return -1;
    } else if ( a < b ) {
        // b가 a 앞에 와라
        return 1;
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0;   // a, b 자리를 그대로 유지
    }
});

// console.log(arr3_3);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// sort와 동일한 메서드이지만 차이점은
// 원본배열은 냅두고 정렬된 새로운 배열을 반환하는 메서드!
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "popular_jang"];
//const joined = arr6.join();
const joined = arr6.join(" ");  // 괄호안에 값을 넣으면 구분자를 변경 할 수 있다!
console.log(joined);