// 1. 콜백함수
function main(value) {
    // console.log(sub);    // sub 함수의 내용 출력!
    // console.log(1);
    // console.log(2);
    value();             // sub 함수 호출!
    // console.log("end");
};

// function sub() {
//     console.log("i am sub");
// }

// main(sub);  // 이 sub와 같은 함수를 Callback 함수라고 한다!

// 이렇게 익명함수로 쓰일수도 있다!
main(() => {
    // console.log("i am sub");
});  // 이 sub와 같은 함수를 Callback 함수라고 한다!

// CallBack 함수 언제 써먹을까?!
// 2. 콜백함수의 활용
function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        // console.log(idx);
        callback(idx);
    }
}

// 중복코드 발생!!
// function repeatDouble(count) {
//     for(let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

repeat(5, (idx) => {
    console.log(idx);
});
// repeatDouble(5);

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});