import React, { useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native-web'
import { AppContext } from './AllContext'

export const InputTask = () => {
    const {change,setChange}=useContext(AppContext)
    const handleChange=(imputItem)=>{
        setChange(imputItem)
    }
    return (
        <>
            <TextInput
                style={styles.textBox}
                placeholder='Add the task...'
                onChangeText={handleChange}
                value={change}
            /> 
        </>
       
    )
}
const styles=StyleSheet.create({
    textBox:{
        width: '40%',
        height: '40px',
        border: '1px solid gray',
        borderRadius:'10px',
        paddingTop:'10px',
      },
})
