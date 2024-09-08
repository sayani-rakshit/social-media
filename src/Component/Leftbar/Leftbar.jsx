import { Link } from "react-router-dom";
import "./Leftbar.css"
const Leftbar=()=>{
    return <div className="leftbar">
        <div className="container">
            <div className="menu">
                <div className="user">
                    <Link to="/" style={{textDecoration:"none",color:"var(--text-color)"}}>
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Sayani</span>
                </Link>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
              <Link to="/friendlist" style={{textDecoration:"none"}}>
                <span className="friend">Friends</span>
                </Link>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Groups</span>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Marketplace</span>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Watch</span>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Memories</span>
                </div>
                
            </div>
            <hr/>
            <div className="menu">
                <span>Your shortcuts</span>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Events</span>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Ganing</span>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Gallery</span>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Video</span>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Message</span>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <span>Others</span>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Fundraiser</span>
                </div> 
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Tutorials</span>
                </div>
                <div className="item">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Courses</span>
                </div>
            </div>
        </div>
        
    </div>
}
export default Leftbar;