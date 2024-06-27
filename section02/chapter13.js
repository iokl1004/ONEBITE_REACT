function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
    
            if(typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });

    return promise;
}

add10(0)
    .then((result) => {
    console.log(result);
    return add10(result);    // 새로운 프로미스 객체를 반환!
    })
    .then((result) => {
    console.log(result);
    return add10(undefined);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// // Promise 객체 생성!
// // 생성자의 인수로는 비동기 작업을 실제로 실행할 Callback 함수를 넣어주면 된다!
// // resolve : Promise 작업을 성공상태를 바꾸는 함수가 들어가 있음.
// // reject : Promise 작업을 실패상태를 바꾸는 함수가 들어가 있음.
// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor
//     // executor함수에서 reject를 호출하게되면, Promise 작업에서 실패가 된다!
//     // executor함수에서 resolve를 호출하게되면, Promise 작업에서 성공이 된다!

//     setTimeout(() => {
//         const num = null;

//         if(typeof num === 'number') {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다.");
//         }
//         // console.log("안녕");
//         // // resolve("안녕");  // Promise 상태를 성공으로 변경!, PromiseResult 값에 "안녕" 입력!
//         // reject("왜 실패했는지 이유...");
//     }, 2000);
// });

// // then 메서드 호출
// // -> 그 후에
// // resolve가 되면! 즉, 성공이 되었을때만 then 메서드를 실행한다!
// promise.then((value) => {
//     console.log(value);
// });

// // reject가 되면! 즉, 실패가 되었을때만 catch 메서드를 실행한다!
// promise.catch((error) => {
//     console.log(error);
// });

// // 위의 방법을 좀더 간결하게 해보자면...?!
// // then과 catch를 연달아서 사용한다는것을 체이닝 한다는 것으로 Promise 체이닝! 이라고 한다!
// promise
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// });

// // setTimeout(() => {
// //     console.log(promise);
// // }, 3000);