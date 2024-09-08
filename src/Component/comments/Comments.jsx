
import "./Comments.css"
const Comments=()=>{
    const Comments=[
        {
id:1,
name:"suravi",
userId:1,
profilePic:"https://images.unsplash.com/photo-1585468491047-f02d6f7c706c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anBnfGVufDB8fDB8fHww",
desc:"I am suravi ",
img:"https://media.istockphoto.com/id/1737182367/photo/mongolian-man-enjoying-breakfast-homemade-butter-with-bread-in-yurt.webp?b=1&s=170667a&w=0&k=20&c=t8Zr-_aR7SxMaiL8R-9d_tx_1bMtLoICrnb3a0t4ABU="
    },

    {id:2,
    name:"Tania",
    userId:2,
    profilePic:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
    desc:"I am going to Mumbai with my bestu.Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laboriosam et laborum ipsa iure ad atque alias reiciendis! Ab corporis, architecto commodi atque quisquam voluptas quis doloribus sunt sapiente molestias?"
}
    ]
    return (
        <div className="comments">
            <div className="write">
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <input type="text" placeholder="write a comment"/>
                <button>Send</button>
            </div>
            {Comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePic} alt=""/>
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}
export default Comments;