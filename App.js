import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ListContainer } from './components/ListContainer';

export default function App() {

  const[change,setChange]=useState('')
  const[task,setTask]=useState([])
  const handleChange=(enteredText)=>{
      setChange(enteredText)
  }
  const handleSubmit=()=>{
    setTask((prev)=>([
      ...prev,
      change
    ]))
    console.log(task)
  }
  const handleDelete=(index)=>()=>{
    const deletedArray=task.filter((_item,i)=> i !==index)
    setTask(deletedArray)
    
  }

  return (
    <View>
      <View style={styles.container}>
        <Text>To do List</Text>
        <TextInput
          placeholder='Add the task...'
          onChangeText={handleChange}
          value={change}
        />
        <Button onPress={handleSubmit} title='Add task'/>
      </View>
      <View>
        <ListContainer list={task} onDelete={handleDelete}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
