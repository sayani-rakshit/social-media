import "./Post.css"
import { MdFavoriteBorder } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

// import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post=({post})=>{


  const [commentOpen,setCommentOpen]=useState(false)
  const [likes,setLikes]=useState(Number(post.likes))
  const handleLike=()=>{
    setLikes(Number(likes+1))
  }
  // const liked=false;
  
    return (<div className="post">
          <div className="container">
          <div className="user">
            <div className="userInfo">
          <img src={post.profilePic} alt=""/>
          <div className="details">
            <Link to={"/profile/${post.userId}"} style={{textDecoration:"none"}}>
<div className="name">{post.name}</div>
<div className="date">{post.update}</div>
            </Link>
            
          </div>
          </div>

          <MdMoreHoriz/>
            </div>
            <div className="content">
<p>{post.desc}</p>
<img src={post.img} alt=""/>

            </div>
            <div className="info">
              <div className="likes">

      <FaHeart onClick={handleLike}/>
  <span>{likes}Likes</span>
  </div>
  <div className="comment" onClick={()=>setCommentOpen(!commentOpen)}>
  <MdOutlineTextsms/>
  <span>Comment</span>
  </div>
  <div className="share">
  <CiShare2/>
  <span>Share</span>
  </div>
            </div>
          {commentOpen && <Comments/>}
          </div>
        </div>
        
    )
  
}
export default Post;