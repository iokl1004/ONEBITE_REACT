import "./List.css"
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ( {todos, onUpdate, onDelete} ) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredDate = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLocaleLowerCase())   // includes 인수로 전달한 값이 todo.content에 보관 되어있는지 확인을 하며, 있을경우 true, 없을경우 false를 반환한다.
        );
    };

    const filteredTodos = getFilteredDate();

    const {totalCount, doneCount, notDonecount} =
     useMemo(() => {
        console.log("getAnalyzedData 호출!");

        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo)=>todo.isDone
        ).length;
        const notDonecount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDonecount,
        }
    }, [todos])
    // 의존성 배열 : deps

    // const {totalCount, doneCount, notDonecount} = getAnalyzedData()

    return (
        <div className="List">
            <h4>Todo List 👌</h4>
            <div>
                total: {totalCount}
            </div>
            <div>
                done: {doneCount}
            </div>
            <div>
                notDone: {notDonecount}
            </div>
            <input
                value = {search}
                onChange = {onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo)=>{
                    return (
                        <TodoItem
                            key = {todo.id}
                            {...todo}
                            onUpdate = {onUpdate}
                            onDelete = {onDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default List;