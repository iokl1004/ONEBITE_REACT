import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// 여기다가 넣어도 숫자는 올라가긴 하는데, 만약 App.jsx에서 Register 컴포넌트를 두번 선언하고
// 위에있는 Register 컴포넌트에 아무거나 입력해도 1이 올라가고,
// 밑에있는 Register 컴포넌트에 아무거나 입력을 해도 위의 Register 컴포넌트에서 사용한 count+1이 됨..
// count 변수가 공유가 됨!!
// let count = 0;

const Register = () => {
    // 비슷한 여러개의 스테이트가 있을 경우, 하나의 객체값으로 묶어서 하나의 스테이트로 통합하여 관리하면 편하다.
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    // 자바스크립트로 useRef 말고 이렇게 사용하면 되지 않나요?!
    // 0으로 계속 리셋이 되기때문에 안됨!
    // let count = 0;
    
    // 여러개의 비슷한 이벤트 핸들러가 있을 경우, 이렇게 통합 이벤트 핸들러로 묶어줄수가 있다.
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);

        // count ++;
        // console.log(count);

        setInput({
            ...input,
            [e.target.name] : e.target.value,   // name속성 : 
        })
    }

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name = "name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"}
                />
                {input.name}
            </div>
            <div>
                <input 
                    name = "birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date"
                />
                {input.birth}
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {input.country}
            </div>

            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                />
                {input.bio}
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;