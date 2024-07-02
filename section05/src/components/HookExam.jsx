import { useState } from "react";
import useInput from "../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능.
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

// 오류 발생! 반드시 함수 컴포넌트 내부에서만 사용이 가능함!
// const state = useState();

// Custom 훅 앞에 use을 붙히면 됨!
// function useInput() {
//     const [input, setInput] = useState("");

//     const onChange = (e) => {
//         setInput(e.target.value);
//     };

//     return [input, onChange];
// }

const HookExam = () => {
    // // 조건문이나 반복문으로 쓰일수 없다!
    // // 왜? 서로다른 훅들의 호출순서가 엉망이 되어버린 현상이 발생되어서 내부적인 오류가 발생할 수 있음.
    // if(true) {
    //     const state = useState();
    // }

    // // 조건문이나 반복문으로 쓰일수 없다!
    // // 왜? 서로다른 훅들의 호출순서가 엉망이 되어버린 현상이 발생되어서 내부적인 오류가 발생할 수 있음.
    // for(;;) {
    //     //
    // }

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
    );
};

export default HookExam;