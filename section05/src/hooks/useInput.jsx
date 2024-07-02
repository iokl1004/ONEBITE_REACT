// 55. 5.11) React Hooks 예제
import { useState } from "react";

function useInput() {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;