// 구조분해 할당으로 받아올수도 있다!
const Button = ({ text, color, children }) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <button
        // 마우스 클릭 이벤트!
        onClick={onClickButton}

        // 마우스를 올렸을때 이벤트!
        // onMouseEnter = {onClickButton}
        style={{ color : color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

// Props의 기본값 설정!
Button.defaultProps = {
    color: "black",
};

export default Button;