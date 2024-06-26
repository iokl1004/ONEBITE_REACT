// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
// arr.length 라는 프로퍼티는 모든 배열이 가지고있는 길이 프로퍼티이다!
for(let i=0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for(let i = 0; i<arr2.length; i++) {
    // console.log(arr2[i]);
}

// 1.2 for of 반복문
// 밑의 arr은 순회하고자 하는 배열
for(let item of arr) {
    // console.log(item);
}

// 2. 객체 순회
let person = {
    name : "장인기",
    age : 30,
    hobby : "볼링",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys);

for(let i=0; i<keys.length; i++) {
    // console.log(keys[i]);   // name, age, hobby 출력!
}

// 위의 구문과 동일한결과를 얻는다!
for (let key of keys) {
    // console.log(key);             // name, age, hobby 출력!
    // console.log(key, person[key]);   // KEy와 Value를 동시에 보여주고 싶다면?!

    // key & Value를 깔끔하게 보여주고 싶다면?!
    const value = person[key];
    // console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
//console.log(values);

for(let value of values) {
    // console.log(value);
}

// 2.3 for in
for(let key in person) {
    const value = person[key];
    console.log(key, value);
}

// for of와 for in을 헷갈리지 말것!!
// for of는 배열에만 사용이 가능하고
// for in은 객체에만 사용이 가능하다!