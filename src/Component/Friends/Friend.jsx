
import Profile from "../../Pages/profile/Profile";
import Leftbar from "../Leftbar/Leftbar";
import Navbar from "../Navbar/Navbar";
import Rightbar from "../Rightbar/Rightbar";
import { MdFacebook } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LuMoreVertical } from "react-icons/lu"

import "./Friend.css"



const Friend=({name,img,component,cover,isDarkMode,toggleTheme})=>{
    return (<div className={isDarkMode ? "dark" : "light"} >
    <Navbar isDarkMode={isDarkMode}
        toggleTheme={toggleTheme} />
    <div className="bar">
<Leftbar/>
<div className={isDarkMode ? 'dark' : 'light'}>
<div className="profile">
        <div className="images">
            <img src={cover} className="cover"/>
            <img src={img} className="profilepic"/>
            
        </div>
        <div className="profilecontainer">
            <div className="uInfo">
                <div className="left">
                    <a href="https://www.facebook.com/">
                        <MdFacebook fontSize="large"/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <FaInstagram fontSize="large"/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <FaSquareTwitter fontSize="large"/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <FaPinterestSquare fontSize="large"/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <IoLogoLinkedin fontSize="large"/>
                    </a>
                </div>
                <div className="center">
                    <span className="name">{name}</span>
                    <div className="info">
                        <div className="item">
                            <MdPlace/>
                            <span>India</span>
                        </div>
                        <div className="item">
                        <MdLanguage/>
                            <span>{name}.dev</span>
                        </div>
                        {/* <button>follow</button> */}
                    </div>
                    <button>follow</button>
                </div>
                <div className="right">
                    <MdOutlineEmail/>
                    <LuMoreVertical/>
                </div>
            </div>
        </div>
        
        {component}
        
        </div>
        </div>
{/* <Rightbar/> */}
</div>

    
    
    </div>
    )
}
export default Friend;