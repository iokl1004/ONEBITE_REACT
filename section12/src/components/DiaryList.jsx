import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from './DirayItem';

const DiaryList = () => {
    return (
        <div className="DiaryList">
            {/* 메뉴바 */}
            <div className="menu_bar">
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"POSITIVE"} />
            </div>            
            {/* 다이어리 리스트 */}
            <div className="list_wrapper">
                <DiaryItem />
            </div>
        </div>
    )
}

export default DiaryList;