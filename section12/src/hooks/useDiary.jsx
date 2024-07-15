// 커스텀 훅 생성!
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(id) === String(id)
        );

        // 존재하지 않는 다이어리 접속 시!
        if(!currentDiaryItem) {
            window.alert("존재 하지 않는 일기 입니다.")
            nav("/", {replace : true});
        }

        // 존재 하는 다이어리 인경우 
        setCurDiaryItem(currentDiaryItem);
    }, [id, data] ); // 컴포넌트가 마운트 된 이후 이거나, params의 id 혹은 데이터가 변경될 경우에만!

    return curDiaryItem;
};

export default useDiary;