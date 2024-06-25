// function returnFalse() {
//     console.log("False 함수");
//     // return false;
//     return undefined;
// }

// function returnTrue() {
//     console.log("True 함수");
//     // return true;
//     return 10;
// }

// // 첫번째 값이 FALSE이기에 두번째 피연산자는 접근조차 하지 않음.
// // FALSE && TRUE 이기에 FALSE 출력!
// // console.log(returnFalse() && returnTrue());

// // console.log(returnTrue() && returnFalse());

// // 첫번째 값이 TRUE 이기에, 두번째 피연산자는 접근조차 하지 않음.
// // console.log(returnTrue() || returnFalse());
// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
function printName(person) {
    // if(!person) {
    //     console.log("person에 값이 없음");
    //     return;
    // }
    // console.log(person.name);
    
    // 위의 구문을 아래와 같이 간결하게 변경이 가능하다!
    // console.log(person && person.name);

    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name : "장인기"});
// printName({ name : "장인기"});
