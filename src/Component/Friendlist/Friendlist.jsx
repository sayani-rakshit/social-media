
import { useState } from "react";
import Myfriend from "../Myfriends/Myfriend";
import Navbar from "../Navbar/Navbar";
import "./Friendlist.css"

const Friendlist=({isDarkMode,toggleTheme,frnds})=>{
    const [searchTerm, setSearchTerm]=useState("")
    const handleSearchChange=(event)=>{
        setSearchTerm(event.target.value);
    }
    return <div className= {isDarkMode ? "dark":"light"}>
        <Navbar 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}/>
        <Myfriend searchTerm={searchTerm} isDarkMode={isDarkMode} frnds={frnds} />
    </div>
}
export default Friendlist;