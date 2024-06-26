// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// 만약 배열 arr2의 4와 5 사이에 배열 arr1의 값을 흩뿌려주고싶다면?!
let arr3 = [4, ...arr1, 5, 6];
// console.log(arr3);

let obj1 = {
    a:1,
    b:2,
};

let obj2 = {
    ...obj1,
    c:3,
    d:4,
};

// console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

// 한방에 모든 매개변수를 배열로 받아올수가 있다!
//function funcB(...rest) {
//     console.log(rest);
// }

// 이때 만약에 추가로 첫번째 매개변수에는 꼭 다른이름으로 받고싶을경우?!
// rest매개변수 뒤에 추가적인 매개변수를 받을수는 없음!
// 왜냐하면 rest 매개변수는 지금부터 나오는 뒤의 모든 인수들을 배열에 저장하기 때문...!
function funcB(one, two, ...args) {
    console.log(one, two, args);
}

funcB(...arr1)