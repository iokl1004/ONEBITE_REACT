import './App.css'
import { useState, useRef } from 'react'
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

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime()
    }

    // todos배열 추가
    // 아래와 같이 하면 절대 안됨... state의 값은 상태변화의 값을 적용시켜줘야함.
    // todos.push(newTodo)

    setTodos([newTodo, ...todos])
  }

  return (
   <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <List />
    </div>
  )
}

export default App;