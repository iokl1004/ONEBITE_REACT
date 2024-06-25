// 함수선언 : 함수를 새롭게 만드는 행위!
// 함수 선언만으로 함수가 실행되지는 않음.

// function greeting () {
//     console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting();     // 함수 호출! 호출 시 반드시 소괄호를 붙혀야함.
// console.log("호출 후");

let area1 = getArea(10, 20);    // 동적으로 선언 10과 20은 "인수" 라고 부른다!
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

let area3 = getArea(120, 200);
console.log(area3);


// 선언문을 호출문보다 아래에 두어도 아무런 발생하지 않는다!
// 호이스팅
// -> 끌어올리다 라는 뜻

// 직사각형의 넓이를 구하는 함수생성!
function getArea(width, height) {   // width와 height는 "매개변수" 라고 부른다.

    // 중첩 함수
    function anoter() {
        console.log("anoter");
    }

    anoter();

    // let width = 10;             // 정적 으로 선언
    // let height = 20;            // 정적 으로 선언
    let area = width * height;

//    console.log(area);
    return area;    // 반환값 : 함수호출의 결과값
    console.log("hello");           // 실질적으로 수행되지 않음!
}