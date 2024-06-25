// for (초기식; 조건식; 증감식) {
for (let idx = 1; idx <= 10; idx++) {

    // 짝수인 경우, 건너뛰고 다음 구문 실행!
    if(idx % 2 === 0 ) {
        continue;
    }

    console.log(idx);

    // idx값이 5보다 크거나 같으면 종료!
    if (idx >=5) {
        break;
    }
}