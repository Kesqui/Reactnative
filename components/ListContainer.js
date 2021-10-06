import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Button, Text, View } from 'react-native-web'

export const ListContainer = ({list,onDelete})=> {
    return(
        list.map((items,index)=>(
            <>
                <Text>{items}</Text>
                <Button title='X' onPress={onDelete(index)}/>
            </>
            ))
    )
}
