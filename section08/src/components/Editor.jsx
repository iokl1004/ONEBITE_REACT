import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    // Enter키를 입력 하였을 경우, onSubmit 함수 실행!
    const onKeydown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    };

    const onSubmit = () => {
        // 입력폼이 공란인 경우 포커싱과 입력이 되지 않도록 하는기능 추가!
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); // 새로운 데이터 추가 후, 입력폼 초기화!
    };
    return (
        <div className="Editor">
            <input value={content}
            ref ={contentRef}
            onKeyDown={onKeydown}
            onChange={onChangeContent}
            placeholder="새로운 Todo..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;