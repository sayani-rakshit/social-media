import { useState, createContext } from "react";

const Themecontext=createContext()
const ThemeProvider=({Children})=>{
    const[isDarkMode,setIsDarkMode]=useState(false)
    const toggleTheme=()=>{
      setIsDarkMode(prevMode=>!prevMode)
    }
    return <Themecontext.Provider value={{isDarkMode,toggleTheme}}>
        {Children}
    </Themecontext.Provider>
}
export {ThemeProvider,Themecontext}
