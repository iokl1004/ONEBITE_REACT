// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let [one, two, three] = arr;
// console.log(one, two, three);

// 위의 코드는 아래의 있는 구문과 동일하다!
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 나는 one과 two 에만 할당하고 싶다 하면!
// let [one, two] = arr;
// console.log(one, two);

// = 4를 빼면 마지막에 언디파인 발생!
// let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name : "장인기",
    age : 30,
    hobby : "볼링",
};

let {
    age : myAge,
    hobby,
    name,
    extra = "hello",
} = person;

// console.log(name, myAge, hobby, extra);

// let name = person.name;
// let age = person.age;
// let nhobby = person.hobby;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}

func(person);