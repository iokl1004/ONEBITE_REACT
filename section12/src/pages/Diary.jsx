// 현재 브라우저에 명시한 파라미터의 값을 가져온다!
// 1. URL Parameter 방식
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";   // 페이지 타이틀 설정하기

const Diary = () => {
    // 1. URL Parameter 방식
    const params = useParams();
    const nav = useNavigate();

    // 페이지 타이틀 설정하기
    usePageTitle(`${params.id}번 일기`);

    const curDiaryItem = useDiary(params.id);

    if(!curDiaryItem) {
        return <div>데이터 로딩중...!</div>
    }

    const { createdDate, emotionId, content } = curDiaryItem;
    const tilte = getStringedDate(new Date(createdDate));

    // 1. URL Parameter 방식
    return (
        <div>
            <Header
                title={`${tilte} 기록`}
                leftChild={
                    <Button
                        onClick={() => nav(-1)}
                        text={"< 뒤로가기"}
                    />}
                rightChild={
                    <Button
                        onClick={()=> nav(`/edit/${params.id}`)}
                        text={"수정하기"}
                    />}
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    ) 
}

export default Diary;