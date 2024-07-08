import './App.css'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

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

// Context 객체는 컴포넌트 외부에 선언 한다! 왜냐하면 내부에 선언하면 App.js가 리렌더링 될때마다 다시 생성될 필요는 없으니!
// export const TodoContext = createContext();

// 최적화가 풀리는 현상이 존재하여서 아래 코드로 수정!
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

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

  // 아이템 수정 (useCallback 이용)
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, [])


  // 아이템 삭제 (useCallback 이용)
  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId,
    });
  }, []);

  // onCrea, upDate, Delete 함수를 묶어주는 개체를 다시는 생성하지 않도록 만들어 주기 위해
  const memoizedDispatch = useMemo(()=> {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
   <div className="App">
      {/* <Exam /> */}
      <Header />
      {/* <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete,}}> */}
      <TodoStateContext.Provider value = {todos} >
        <TodoDispatchContext.Provider value = {memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
        {/* </TodoContext.Provider> */}
    </div>
  )
}

export default App;