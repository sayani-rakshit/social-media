import "./Navbar.css"
import { IoMdHome } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { IoMdApps } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { Themecontext } from "../../Themecontext";
const Navbar=({searchTerm,onSearchChange,isDarkMode,toggleTheme})=>{
    // const {isDarkMode,toggleTheme}=useContext(Themecontext)
    return <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span>Sayanisocial</span>
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
            <IoMdHome className={isDarkMode ? "dark" : "light"}/>
            </Link>
            <div className="icon" onClick={toggleTheme}>
       { isDarkMode ? <IoSunnyOutline/> :  <CiDark/> }
            </div>
            <IoMdApps/>
            <Link to="/friendlist">
            <div className="search">
                <FaSearch/>
                <input type="text" placeholder="Search..."
                value={searchTerm}
                onChange={onSearchChange}
                
                />
            </div>
            </Link>
        </div>
        <div className="right">
            <Link to="/friendlist">
            <IoMdPerson/>
            </Link>
            <MdOutlineMailOutline/>
            <IoIosNotifications/>
            <Link to={"/profile/${post.userId}"} style={{textDecoration:"none"}}>
            <div className="user">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <span>Sayani</span>
            </div>
            </Link>
            
        </div>
    </div>
}
export default Navbar;