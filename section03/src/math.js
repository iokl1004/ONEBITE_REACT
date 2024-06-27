// math 모듈

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// COMMON JS 방식
// module.exports = {
//     // add : add,
//     // sub : sub,
//     add,    // 키값과 동일할 경우 이렇게만 작성해도 된다!
//     sub,
// }

// ES Module 방식
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// 위에 구문에서 export만 지우고 아래 것 주석 해도 됨!
// export { add, sub };

export default function multiply(a, b) {
    return a * b;
}