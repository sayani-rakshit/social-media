import "./Stories.css"
const Stories=()=>{
    const storis=[
        {
            id:1,
            img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"sayani"

        },
        {
           id:2,
           img:"https://images.unsplash.com/photo-1585468491047-f02d6f7c706c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anBnfGVufDB8fDB8fHww",
           name:"suravi"
        },
        {
            id:3,
            img:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww",
            name:"Tania"
        },
        {
            id:4,
            img:"https://media.istockphoto.com/id/1737182367/photo/mongolian-man-enjoying-breakfast-homemade-butter-with-bread-in-yurt.webp?b=1&s=170667a&w=0&k=20&c=t8Zr-_aR7SxMaiL8R-9d_tx_1bMtLoICrnb3a0t4ABU="  ,
        name:"Shilpa"
        }
    ]
    return (
    <div className="stories" >
       {storis.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img}/>
                <span>{story.name}</span>
            </div>
       ))
       }
    </div>
    )
}
export default Stories;