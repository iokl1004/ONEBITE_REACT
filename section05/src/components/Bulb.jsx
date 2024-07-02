import { useState } from "react";

const Bulb = () => {
  
    // 리 렌더링을 위해 useState를 사용한다!
    const [light, setLight] = useState("OFF");
    console.log(light);
    
    return (
      <div>
        {light === 'ON' ? (
          <h1 style={{ backgroundColor : "orange" }}>ON</h1>
        ) : (
          <h1 style = {{ backgroundColor : "gray" }}>OFF</h1>
        )}
        <button onClick={() => {
          setLight(light === 'ON' ? "OFF" : "ON");
        }}
        >
          {light === "ON" ? "끄기" : "켜기" }
        </button>
      </div>
    );
  };

  export default Bulb;