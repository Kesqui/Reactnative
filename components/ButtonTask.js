import React, { useContext } from 'react'
import { Button, View } from 'react-native-web'
import { AppContext, AppProvider } from './AllContext'

export const ButtonTask = () => {

    const {change,setTask}=useContext(AppContext)

    const handleSubmit=()=>{
        setTask((prev)=>[
            ...prev,
            change
        ])
    }

    return (
        <>
            <Button onPress={handleSubmit} title='Add task'/>
        </>
    )
}
