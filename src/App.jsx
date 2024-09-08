import "./App.css"
import Leftbar from './Component/Leftbar/Leftbar'
import Navbar from './Component/Navbar/Navbar'
import Rightbar from './Component/Rightbar/Rightbar'
import Login from './Pages/login/Login'
import Profile from './Pages/profile/Profile'
import Home from './Pages/home/Home'
import Register from './Pages/register/Register'
import{createBrowserRouter,RouterProvider,Route, Outlet, Navigate} from "react-router-dom"
import Friendlist from "./Component/Friendlist/Friendlist"
import Firstfriend from "./Component/Firstfriend/Firstfriend"
import Secondfriend from "./Component/Secondfriend/Secondfriend"
import Friend from "./Component/Friends/Friend"
import { useContext, useState } from "react"
import { Themecontext } from "./Themecontext"



function App() {
  const friend={
    friend1:{
      name:"sani",
      img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      component:<Firstfriend/>,
      cover:"https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww"
    },
    friend2:{
      img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Suravi",
      component:<Secondfriend/>,
      cover:"https://media.istockphoto.com/id/1737182367/photo/mongolian-man-enjoying-breakfast-homemade-butter-with-bread-in-yurt.webp?b=1&s=170667a&w=0&k=20&c=t8Zr-_aR7SxMaiL8R-9d_tx_1bMtLoICrnb3a0t4ABU=",
    }
    
  }
  const [profiles,setProfiles]=useState([{
    id:1,
    profilePic:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Susmita"
  },
  {
id:2,
profilePic:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
name:"Sunita"
  }
])
const [frnds,setFrnds]=useState([]);
const addFriends=(Frnd)=>{
setFrnds([...frnds,Frnd])
setProfiles(profiles.filter(profile=>profile.id !== Frnd.id))
}
const deleteprofile=(profileid)=>{
  setProfiles(profiles.filter(profile=>profile.id !==profileid))
}
  // const  {isDarkMode} =useContext(Themecontext)
  const[isDarkMode,setIsDarkMode]=useState(false)
  const toggleTheme=()=>{
    setIsDarkMode(!isDarkMode)
  }
  const currentUser=true;
  const Layout=()=>{
    return(
      <div className={isDarkMode ? "dark" :"light"}>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        {/* <Navbar/> */}
        <div style={{display:"flex"}}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <Rightbar profiles={profiles} addFriends={addFriends}  deleteprofile={deleteprofile}/>
        </div>
      </div>
    )

  }
const ProtectedRoute=({children})=>{
  if(!currentUser){
    return <Navigate to="/login"/>
  }
  return children
}
   const router=createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoute><Layout/></ProtectedRoute>,
      children:[{
        path:"/",
        element:<Home/>
      },
      {
        path:"/profile/:id",
        element:<Profile/>
      },
     
    
    ]

    },
    {
      path:"/login",
      element:<Login/>

    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/friendlist",
      element:<Friendlist isDarkMode={isDarkMode} toggleTheme={toggleTheme} frnds={frnds}/>
    },
 
    {
      path:"/friend1",
      element:<Friend {...friend.friend1} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    },
    {
      path:"/friend2",
      element:<Friend {...friend.friend2} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    }
   
  ]);
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
 
}

export default App
