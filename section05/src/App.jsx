import './App.css'
import Header from "./components/Header.jsx"; // .jsx 를 삭제해도 된다!
import Main from "./components/Main.jsx";
import Footer from './components/Footer.jsx';
import Button from "./components/Button.jsx";

// App Component
// Root 컴포넌트 라고 불리며, 안에 있는 컴포넌트들은 자식 컴포넌트라고 한다.
function App() {

  const buttonProps = {
    text : "메일",
    color: "red",
    a:1,
    b:2,
    c:3,
    };
  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* 스프레드 연산자로 넘겨 줄수도 있다! */}
      <Button {...buttonProps} />
      <Button text = {"메일"} color = {"red"}/>
      <Button text = {"카페"} />
      <Button text = {"블로그"}>
        <Header />
        <div>자식요소</div>
      </Button>
    </>
  )
}

export default App;