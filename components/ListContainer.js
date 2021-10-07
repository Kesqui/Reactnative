import React, { useContext } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Button, StyleSheet, Text, View } from 'react-native-web'
import { AppContext } from './AllContext'

export const ListContainer = ()=> {
    const{task,setTask}=useContext(AppContext)
    const handleDelete=(index)=>()=>{
        const deletedArray=task.filter((_item,i)=> i !==index)
        setTask(deletedArray)
        
      }

    return(
            <FlatList 
                data={task}
                renderItem={itemData=>(
                    <View>
                        <Text>{itemData.item}</Text>
                        <Button onPress={handleDelete(itemData.index)}>X</Button>
                    </View>
                )}
            />
    )
}
