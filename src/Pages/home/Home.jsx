import Firstfriend from "../../Component/Firstfriend/Firstfriend";
import Secondfriend from "../../Component/Secondfriend/Secondfriend";
import Stories from "../../Component/Stories/Stories";
import Posts from "../../Component/posts/Posts";
import "./Home.css"
const Home=()=>{
    return (
        <div className="home">
            <Stories/>
            <Posts/>
            <Firstfriend/>
            <Secondfriend/>
        </div>
    )
}
export default Home;