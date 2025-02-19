// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 삼항 연산자나 값, 변수의 이름처럼 한줄의 코드가 특수한 값으로 평가 될수 있는 값을 말함.
// if문이나 for문은 한줄로 써 값으로써 표현 될 수 없기에 사용이 불가함.

// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// boolean 값이나 undefined, null 값은 렌더링이 되지 않는다.

// 3. 모든 태그는 닫혀있어야 한다.

// 4. 최상위 태그는 반드시 하나여야만 한다.

import "./Main.css";    // CSS 파일 Impoort!

const Main = () => {
    // const number = 10;
    // const obj = { a: 1};

    const user = {
        name : "장인기",
        // isLogin : false,
        isLogin : true,
    };

    // 2번 방식
    if (user.isLogin) {
        return (
            <div
                // class는 자바스크립트 예약어 이기때문에 사용 불가하여 카멜케이스를 이용하여 작성!
                className = "logout"
                // style = {{
                //     backgroundColor: "red",
                //     borderBottom : "5px solid blue",
                // }}
                >
            로그아웃</div>);
    } else {
        return <div>로그인</div>;
    }

    // return (
    //     <main>
    //         {/* <h1>main</h1> */}
    //         {/* <h2>{number}</h2> */}
    //         {/* <h2>{number + 10}</h2> */}
    //         {/* <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2> */}
            
    //         {/* 렌더링이 안되는 요소들 */}
    //         {/* {null} */}
    //         {/* {true} */}
    //         {/* {undefined} */}

    //         {/* {obj}   에러발생!! */}
    //         {/* {obj.a} */}

    //         {/* 1번 방식 */}
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : (
    //             <div>로그인</div>
    //         )}
    //     </main>
    // );
};

export default Main;