// 페이지 타이틀 설정하는 Hook
import { useEffect } from "react";

const usePageTitle = (title) => {
    // 새 일기 쓰기 화면에서의 페이지 타이틀 설정하기
    useEffect(() => {
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [title]);    // 타이틀 값이 변경 되면 페이지의 타이틀을 변경해주도록 수정.

};

export default usePageTitle;