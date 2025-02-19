// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

// animal = { a: 1 };  // 에러발생!
animal.age = 2;         // 추가
animal.name = "까망이"  // 수정
delete animal.color;    // 삭제

// 상수 오브젝트인데 왜 수정이 가능한건가요?
// 저장되어있는 객체의 프로퍼티를 수정하는건 아무것도 문제가 되진않음.
// animal = 123;   // 오류 발생! 아예 새로운값으로 할당하는것은 문제가 됨.
// console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함.
// 메서드는 보통 객체의 동작 정의하는데에 사용이 된다!
const person = {
    name : "장인기",
    // 메서드
    // sayHi : function () {
    sayHi() {
        console.log("안녕!");
    },
}

person.sayHi();
person["sayHi"]();