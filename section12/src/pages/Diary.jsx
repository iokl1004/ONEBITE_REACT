// 현재 브라우저에 명시한 파라미터의 값을 가져온다!
// 1. URL Parameter 방식
import { useParams } from "react-router-dom";

const Diary = () => {
    // 1. URL Parameter 방식
    const params = useParams();
    console.log(params);

    // 1. URL Parameter 방식
    return <div>{params.id}Diary</div>
}

export default Diary;