import { preventBatch } from "@syncfusion/ej2-react-grids";
import React, {createContext, useContext, useState} from "react";

const AppContext=createContext()

const initialState={
    chat:false,
    cart:false,
    userProfille:false,
    notification:false
}

export const AppProvider=({children})=>{
    const [activeMenu,setActiveMenu]=useState(true)
    const [isClicked,setIsClicked]=useState(initialState)
    const [screenSize,setScreenSize]=useState()
    const[currentColor,setCurrentColor]=useState('#03C9D7')
    const[currentMode,setCurrentMode]=useState("Light")
    const[themeSettings,setThemeSettings]=useState(false)
    const setMode=(e)=>{
        setCurrentMode(e.target.value)
        localStorage.setItem("themeMode",e.target.value)
        setThemeSettings(false)
    }
    const setColor=(e)=>{
        setCurrentColor(e)
        localStorage.setItem("colorMode",e)
        setThemeSettings(false)
    }
    const handleClick=(clicked)=>{
        setIsClicked({...initialState,[clicked]:true})
    }
    return  ( 
        <AppContext.Provider 
    value={{
        activeMenu, setActiveMenu,
        isClicked,setIsClicked,
        handleClick,
        screenSize,setScreenSize,
        currentColor,setCurrentColor,
        currentMode,setCurrentMode,
        themeSettings,setThemeSettings,
        setMode,setColor
    }}>
        {children}
    </AppContext.Provider> ) 
}

export const useGlobalContext=()=>useContext(AppContext)