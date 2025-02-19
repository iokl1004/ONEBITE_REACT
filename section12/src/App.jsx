import './App.css'
// useNavigate : 페이지를 실제로 이동 시켜주는 네비게이트함수를 반환해줌
import { useState, useReducer, useRef, createContext, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

import Button from './components/Button.jsx';
import Header from './components/Header.jsx';

import { getEmotionImage } from './util/get-emotion-image.js';

// 임시 일기 데이터 객체 모델링
// "95. 12.17) 웹스토리지 이용하기" 강의로 인하여 필요없어짐. 주석!
// const mockData = [
//   {
//     id : 1,
//     createdDate : new Date("2024-07-10").getTime(),
//     emotionId : 1,
//     content : "1번 일기 내용",
//   },
//   {
//     id : 2,
//     createdDate : new Date("2024-07-09").getTime(),
//     emotionId : 2,
//     content : "2번 일기 내용",
//   },
//   {
//     id : 3,
//     createdDate : new Date("2024-06-01").getTime(),
//     emotionId : 3,
//     content : "3번 일기 내용",
//   },
// ];

function reducer(state, action) {
  let nextState;

  switch(action.type) {
    case "INIT" :
      return action.data;
    case "CREATE" : {
      nextState = [action.data, ...state]; // 원본데이터 복사
        break;
    }
    case "UPDATE" : {
      // item들 중에 item의 id값이 현재 action 개체의 데이터의 id와 일치하는 요소가 있다면
      // 해당 요소는 actiondata로 수정을 하고
      // 그렇지 않다면 item을 수정하지 않고 리턴한다!
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
        );
        break;
    }
    case "DELETE" : {
      nextState = state.filter((item)=> String(item.id) !== String(action.id));
      break;
    }
    default :
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

// 일기 데이터를 공급할 컨테스트 추가
export const DiaryStateContext = createContext();

// 일기를 수정하는 함수들도 함께 컨텍스트를 통하여 공급하도록 해보자!
export const DiaryDispatchContext = createContext();


function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [data, dispatch] = useReducer(reducer, mockData);
  const [data, dispatch] = useReducer(reducer, []);
  // 앞으로 생성될 일기 ID
  const idRef = useRef(3);

  // 컴포넌트가 마운트 되었을때, 딱 한번만 실행 되도록
  useEffect(()=> {
    const storedData = localStorage.getItem("diary");
    if(!storedData) {
      return;
    }

    const parsedDate = JSON.parse(storedData);
    if(!Array.isArray(parsedDate)) {  // 배열인경우 True, 아니면 False
      setIsLoading(false);
      return ;
    }

    let maxId = 0;
    parsedDate.forEach((item) => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data : parsedDate,
    });

    setIsLoading(false);
  }, []);

  // 웹 스토리지 이용
  // 웹 스토리지 데이터 추가
  // 키값은 숫자나 문자같은 원시 데이터만 입력 가능!
  // localStorage.setItem('test', "hello") ;
  // localStorage.setItem("person", JSON.stringify({name : "장인기"}));

  // 웹 스토리지에서 데이터 가져오기
  // localStorage.getItem("test");
  // console.log(localStorage.getItem("test"));
  // console.log(localStorage.getItem("person"));  // 문자열 {"name":"장인기"} 이렇게 출력이 됨
  // console.log(JSON.parse(localStorage.getItem("person")));  // 문자열 {"name":"장인기"} 이것을 객체형태의 문자열을 파싱해서 객체로 다시 변환시켜줌

  // 웹 스토리지 삭제
  // localStorage.removeItem("test");
  

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      // 액션개체 추가
      type:"CREATE",
      data : {
        id : idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
    {
      type : "UPDATE",
      data : {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch ({
      type : "DELETE",
      id,
    });
  };

  if(isLoading) {
    return <div>데이터 로딩 중입니다 ...</div>
  }

  return (
    <>
      <DiaryStateContext.Provider value={data} >
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />        
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;