// 1. Date 객체를 생성하는 방법
let date1 = new Date() // 생성자
// console.log(date1);     // Wed Jun 26 2024 22:24:11 GMT+0900 (한국 표준시) 출력!

// 특정 날짜 설정!
let date2 = new Date("1997-01-07");
// let date2 = new Date("1997.01.07");
// let date2 = new Date("1997/01/07");
// console.log(date2);     // Tue Jan 07 1997 10:10:10 GMT+0900 (한국 표준시)

// 특정 시간 설정!
// let date2_1 = new Date("1997-01-07/10:10:10");
// let date2_1 = new Date("1997.01.07");
// let date2_1 = new Date("1997/01/07");
let date2_1 = new Date(1997, 1, 7, 23, 59, 59); // // let date2_1 = new Date("1997/01/07"); 출력!
// console.log(date2_1);     // Tue Jan 07 1997 10:10:10 GMT+0900 (한국 표준시) 출력!

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지 의미하는 숫자값
// 1970.01.01 00시 00분 00초 은 UTC 라고 불리움.
let ts1 = date1.getTime();  // 타임스탬프를 계산해서 반환해준다!
// console.log(ts1);           // UTC타임으로부터 1719408543975 ms가 지난시간들이 저장되어 있다!

let date4 = new Date(ts1);
// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();     // 년도
// let month = date1.getMonth();       // 월 
let month = date1.getMonth()+1;       // 월 자바스크립트에서의 월은 0부터 시작하기 때문에 +1
let date = date1.getDate();         // 일

let hour = date1.getHours();        // 시간
let minute = date1.getMinutes();    // 분
let seconds = date1.getSeconds();   // 초

// console.log( 
//     year,   // 2024
//     month,  // 6
//     date,   // 26
//     hour,   // 22
//     minute, // 33
//     seconds // 39
// )

// 4. 시간 수정하기
date1.setFullYear(2023);    // 년도
date1.setMonth(2);          // 월 3출력
date1.setDate(30);          // 일
date1.setHours(23);         // 시간
date1.setMinutes(59);       // 분
date1.setSeconds(59);       // 초

console.log(date1);         // Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시) 출력!

// 5. 시간을 여러 포맷으로 출력하기!
// 시, 분, 초 제외하고싶다면?
console.log(date1.toDateString());      // Thu Mar 30 2023 출력!

// 영어 포맷이 아닌 우리나라에서 사용되는 현지화 포맷으로 사용하고싶다면?!
console.log(date1.toLocaleString());    // 2023. 3. 30. 오후 11:59:59 출력!