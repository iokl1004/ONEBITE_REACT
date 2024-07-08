// 2. Query String 방식
import { useSearchParams } from "react-router-dom";

const Home = () => {
    // 2. Query String 방식
    const [pamras, setParams] = useSearchParams();
    console.log(pamras.get("value"));

    return <div>Home</div>
}

export default Home;