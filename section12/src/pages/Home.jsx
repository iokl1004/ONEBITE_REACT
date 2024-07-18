import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";   // 페이지 타이틀 설정하기

const getMonthlyData = (pivotDate, data) => {
    // 이번달의 가장 첫번째 시간
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime();

    // 이번달의 가장 마지막 시간
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59,
    ).getTime();

    // 이번달에 해당하는 데이터만 추출
    return data.filter(
        (item) =>
            beginTime <= item.createdDate && item.createdDate <= endTime
    );
}

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPrivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);

    // 페이지 타이틀 설정하기
    usePageTitle("감정 일기장");

    const onIncreaseMonth = () => {
        setPrivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };

    const onDecreaseMonth = () => {
        setPrivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={monthlyData} />
        </div>
    );
};

export default Home;