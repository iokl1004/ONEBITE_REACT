// async는 프로미스를 반환하지 않는 함수에 붙혀서 자동으로 해당함수를 비동기로 변환하는 기능을 한다!
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 변환하도록 변환해주는 그런 키워드

// async function getDate() {  // async로 인하여 비동기 함수로 변경됨!
//     return {
//         name : "장인기",
//         id : "popular_jang",
//     };
// }

// console.log(getDate()); // PromiseResult값으로 return값이 출력된다!
async function getData() {  // async로 인하여 비동기 함수로 변경됨!
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "장인기",
                id : "popular_jang",
            });
            reject({
                name : "홍길동",
                id : "Hong_GilDong",
            }); 
        }, 1500);
    });
}

// console.log(getDate()); // PromiseResult값으로 return값이 출력된다!

// async는 어디에 써먹음..?
// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();