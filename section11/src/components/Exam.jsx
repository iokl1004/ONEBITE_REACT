import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화 시키는 변환기 역할.
function reducer(state, action) {
    console.log(state, action);
    // if(action.type === 'INCREASE') {
    //     return state + action.data
    // }
    // else if (action.type === "DECREASE") {
    //     return state - action.data;
    // }

    // 위의 if문을 switch 문으로 변경하자면?!
    switch(action.type) {
        case 'INCREASE' :
            return state + action.data;
        case 'DECREASE' :
            return state - action.data;
        default :
            return state;
    }
}

const Exam = () => {
    // dispath : 발송하다, 급송하다
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수.
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수 : 상태가 어떻게 변화되길 원하는지
        // -> 인수로 전달된 요청의 내용을 담고 있는 객체를 액션 객체 라고 한다.
        dispatch({
            // 값을 증가 시켜달라!
            type : "INCREASE",

            // 얼만큼? 1만큼
            data : 1,
        });
    }

    const onClickMinus = () => {
        dispatch({
            type : "DECREASE",
            data : 1,
        })
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick = {onClickPlus}>+</button>
            <button onClick = {onClickMinus}>-</button>
        </div>
    );
};

export default Exam;