import "./List.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

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

    return (
        <div className="List">
            <h4>Todo List 👌</h4>
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