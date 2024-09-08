import { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import "./Myfriend.css"
import { Link } from "react-router-dom";


const Myfriend=({searchTerm,isDarkMode,frnds})=>{
  const[friends,setFriends]= useState([
    {
    
       id:1,
       img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Sani",
    mutual:"12 mutual friends",
    link:"/friend1",
    
  },
  {
    id:2,
    img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Suravi",
    mutual:"10 mutual friends",
    link:"/friend2"
  },
  
        
    ])
    const [filterFriends,setFilterFriends]=useState(friends);
    useEffect(()=>{
        if(searchTerm ===""){
            setFilterFriends(friends)
        }else{
            setFilterFriends(friends.filter((friend)=>friend.name.toLowerCase().includes(searchTerm.toLowerCase())))
        }
    },[searchTerm,friends])
    return <div className={isDarkMode ? "dark" : "light"}>
    <div className="myfriend">
        <h1>My Friends</h1>
        {
            filterFriends.map((friend)=>( <div key={friend.id} className="friend">
                   <Link to={friend.link} style={{textDecoration:"none"}}>
                    <img src={friend.img} alt=""/>
                    </Link>
                    

                    <div className="frienddiv">
                <div className="friendname"> {friend.name}</div>
                <div className="mutual">{friend.mutual}</div>
                  
                    </div>
  <MdMoreHoriz className="emoji"/>
                    </div>
            ))
        }

{frnds.map((fr,index)=>(
            <div key={index} className="addfriend">
                <img src={fr.profilePic}/>
                <span>{fr.name}</span>
                <MdMoreHoriz className="emoji"/>
            </div>
        ))}
        
    </div>

    
    </div>
}
export default Myfriend;