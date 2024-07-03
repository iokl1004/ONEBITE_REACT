import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'    // 언마운트 확인용
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);  // 초기 마운트 변수

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);
  
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    // App 컴포넌트가 마운트 될때 업데이트가 이루어지므로, 진짜로 값이 업데이트 될때만 진행하도록!
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음
  

  // // 첫번째 함수 콜백함수, 두번째 인수는 배열
  //   useEffect(()=> {
  //     console.log(`count : ${count} / input : ${input}`);
  //   }, [count, input])
  // // 의존성 배열
  // // dependency array
  // // deps

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className ="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }}></input>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App