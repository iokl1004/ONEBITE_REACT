//console.log("안녕 Node.js");

// const moduleData = require("./math");

//console.log(moduleData.add(1, 2));
//console.log(moduleData.sub(1, 2));

// COMMON JS 방식
// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// ES Module 방식
// ※ 파일의 확장자까지 다 기재를 해줘야함!!
// import mul, { add, sub } from "./math.js";
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);