// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {};           // 객체 리터럴 (대부분 사용)

// person 이라는 오브젝트 생성!
// 2. name, age, hobby 같은것들은 객체 프로퍼티 (객체 속성)
let person = {
    // Key : value
    name : "장인기",        // name Property
    age : 27,               // age Property
    hobby : "볼링",         // hobby Property
    job : "FE Developer",   // job Property
    extra : {},
    10 : 20,                // 숫자값도 Key로 사용 할 수 있다!
    "like cat" : true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // name = "장인기"
//let name = person.name2; // 존재하지 않는 프로퍼티를 출력하면 언디파인이 발생한다!
console.log(name);      // 장인기 출력

// let age = persion[age]; // age를 변수로 인식하여서 오류발생!
// let age = person["age"]; // 존재하지 않는 프로퍼티를 출력하면 언디파인이 발생한다!
let age = person["age"];    // 동적으로 꺼내오고 싶다면 괄호 표기법, 그게 아니라면 점 표기법으로 가져온다!
 console.log(age);

let Property = "hobby";
let hobby = person[Property];       
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";        // 점 표기법
person["favoriteFood"] = "피자";    // 괄호 표기법

// console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // name에 대한 프로퍼티가 오른쪽의 객체안에 있냐 없냐 물어보는 연산자 존재하면 true 미존재일경우 false.
let result2 = "cat" in person;
console.log(result1);
console.log(result2);