import './App.css'
import { useState, useRef, useReducer, useCallback } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
// import Exam from './components/Exam'

const mockData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "영화 감상하기",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "볼링",
    date : new Date().getTime(),
  },
];

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE' : return [action.data, ...state]
    case 'UPDATE' : return state.map((item) => item.id === action.targetId? {...item, isDone: !item.isDone} : item);
    case 'DELETE' : return state.filter((item)=>item.id !== action.targetId)
    default : return state;
  }
}

function App() {

  // const [todos, setTodos] = useState(mockData);
  
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // const onCreate = (content) => {
  //   // const newTodo = {
  //     // id : idRef.current++,
  //     // isDone : false,
  //     // content : content,
  //     // date : new Date().getTime(),

  //     dispatch({
  //       type : "CREATE",
  //       data : {
  //         id : idRef.current++,
  //         isDone : false,
  //         content : content,
  //         date : new Date().getTime(),
  //       },
  //     });
  //   };

  // 아이템 추가 (useCallback 이용)
  const onCreate = useCallback((content) =>{
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      },
    });
  }, []);

    // todos배열 추가
    // 아래와 같이 하면 절대 안됨... state의 값은 상태변화의 값을 적용시켜줘야함.
    // todos.push(newTodo)

  //   setTodos([newTodo, ...todos]);
  // };

  // // 아이템 수정
  // const onUpdate = (targetId) => {
  //   // todos State의 값들 중에
  //   // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

  //   // 인수 : todos 배열에서 targetId와 잉ㄹ치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
  //   // todo의 id가 현재 타겟 id와 같다면 그때에는 기존의 투두 객체에 isdone의 프로퍼티만 변경을 하고
  //   // 같지 않을 경우 기존 투두의 값을 리턴해주면 된다!
  //   // setTodos(todos.map((todo) =>
  //   //   todo.id === targetId
  //   //   ? { ...todo, isDone : !todo.isDone}
  //   //   : todo)
  //   // );

  //   dispatch({
  //     type: "UPDATE",
  //     targetId: targetId,
  //   });
  // };

  // 아이템 수정 (useCallback 이용)
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, [])

  // 아이템 삭제
  // const onDelete = (targetId) => {
  //   // // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
  //   // setTodos(todos.filter((todo)=>todo.id !== targetId));

  //   dispatch({
  //     type : "DELETE",
  //     targetId : targetId,
  //   })
  // };

  // 아이템 삭제 (useCallback 이용)
  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId,
    });
  }, []);

  return (
   <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete} />
    </div>
  )
}

export default App;