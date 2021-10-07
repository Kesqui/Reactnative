import React, { createContext, useState } from 'react'
import { View } from 'react-native-web';

export const AppContext=createContext();

export const AppProvider = ({children}) => {
    const[change,setChange]=useState('')
    const[task,setTask]=useState([])
    return (
        <AppContext.Provider value={{change,setChange,task,setTask}}>
            {children}
        </AppContext.Provider>
    )
}
