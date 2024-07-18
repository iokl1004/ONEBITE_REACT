import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
    // App 컴포넌트로 부터 공급받음
    const { onCreate } = useContext(DiaryDispatchContext)
    const nav = useNavigate();

    // 페이지 타이틀 설정하기
    usePageTitle("새 일기 쓰기");

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(),    // 타임 스탬프 형태로 저장
            input.emotionId,
            input.content,
        );

        // 뒤로가기 방지 차원에서 두번째 임자를 추가해 준다!
        // 홈페이지로 이동하면서 뒤로가기 방지!
        nav('/', {replace : true});
    };

    return (
        <div>
            <Header title = {"새 일기 쓰기"}
            leftChild={
                <Button onClick={() => nav(-1)} text={"<뒤로 가기"} />}
        />
        <Editor onSubmit={onSubmit} />
        </div>
    )
}

export default New;