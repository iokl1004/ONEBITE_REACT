import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useEffect, useContext, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";   // 페이지 타이틀 설정하기

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);
    
    // 페이지 타이틀 설정하기
    usePageTitle(`${params.id}번 일기 수정`);

    const onClickDelete = () => {
        if (
        // 브라우저의 내장기능을 사용하는 함수 이며, 브라우저의 팝업을 보여주는 함수이다.
        // true : 확인버튼
        // false : 취소버튼
            window.confirm("일기를 정말 삭제 할까요? 다시 복구되지 않아요!")
        ) {
            // 일기 삭제 로직
            onDelete(params.id);
            // 홈페이지로 보내주면서, 뒤로가기 방지!
            nav('/', {replace : true});
        }
    };

    const onSubmit = (input) => {
        if(window.confirm("일기를 정말 수정 할까요?"))
        {
            onUpdate(
                params.id,
                input.createdDate.getTime(), // 타임 스탬프 형태로 저장
                input.emotionId,
                input.content,
            );
            nav("/", { replace : true});
        }
    }
    
    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={
                    <Button
                        onClick={() => nav(-1)}
                        text={"< 뒤로가기"}
                    />}
                rightChild={
                    <Button
                        onClick={onClickDelete}
                        text={"삭제하기"}
                        type={"NEGATIVE"}
                    />}
            />
            <Editor onSubmit={onSubmit} initData={curDiaryItem}/>
        </div>
    )
}

export default Edit;