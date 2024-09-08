import "./Rightbar.css"
const Rightbar=({profiles,addFriends,deleteprofile})=>{
    const handleAdd=(profile)=>{
        addFriends(profile)
    }
    const handledelete=(profileid)=>{
        deleteprofile(profileid)
    }
    return  <> <div className="rightbar" >
        <div className="container">
        <span>Suggestions For You</span>
        {profiles.map((profile)=>(
            <div className="container">
 <div className="item">

     <div className="user">
         <div className="userinfo">
             <img src={profile.profilePic} alt=""/>
             <span>{profile.name}</span>
         </div>
         <div className="buttons">
             <button className="add" onClick={()=>handleAdd(profile)}>add</button>
             <button className="delete" onClick={()=>handledelete(profile.id)}>Delete</button>
         </div>
     </div>
 

</div>
</div>

        )

        )}
        </div>
        




        <div className="container">
            <span>Latest Activities</span>
            <div className="item">

                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                     <p>  
                         <span>Sayani</span>
                         Changed cover
                     </p>
                    </div>
                    <div className="status">
                    5 min ago
                    </div>
                </div>
            </div>
            <div className="item">

<div className="user">
    <div className="userinfo">
        <img src="https://images.unsplash.com/photo-1585468491047-f02d6f7c706c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anBnfGVufDB8fDB8fHww" alt=""/>
     <p>  
         <span>suravi</span>
         Changed picture
     </p>
    </div>
    <div className="status">
    2 min ago
    </div>
</div>
</div>
<div className="item">

<div className="user">
    <div className="userinfo">
        <img src="https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww" alt=""/>
     <p>  
         <span>Tania</span>
         Changed Status
     </p>
    </div>
    <div className="status">
    1 min ago
    </div>
</div>
</div>
<div className="item">

<div className="user">
    <div className="userinfo">
        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
     <p>  
         <span>Sayani</span>
         Update Status
     </p>
    </div>
    <div className="status">
    3 min ago
    </div>
</div>
</div>
<div className="item">

<div className="user">
    <div className="userinfo">
        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
     <p>  
         <span>Sayani</span>
         Update picture
     </p>
    </div>
    <div className="status">
    1 min ago
    </div>
</div>
</div>
<div className="container">
            <span>Online friends</span>
            <div className="item">

                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                     <div className="online">
                        <span>Sayani</span>
                        </div>
                        
                    </div>

                </div>

                <div className="item1">

<div className="user">
    <div className="userinfo">
        <img src="https://images.unsplash.com/photo-1585468491047-f02d6f7c706c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anBnfGVufDB8fDB8fHww" alt=""/>
     <div className="online">
        <span>Suravi</span>
        </div>
        
    </div>

</div>
</div>
<div className="item2">

<div className="user">
    <div className="userinfo">
        <img src="https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww" alt=""/>
     <div className="online">
        <span>Tania</span>
        </div>
        
    </div>

</div>
</div>

            </div>
            </div>


        </div>

    </div>
    </>
    
}
export default Rightbar;