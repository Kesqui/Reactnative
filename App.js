import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AppProvider } from './components/AllContext';
import { ButtonTask } from './components/ButtonTask';
import { InputTask } from './components/InputTask';
import { ListContainer } from './components/ListContainer';

export default function App() {



  return (
    <AppProvider>
      <View style={styles.allBox}>
          <Text>To do List</Text>
        <View style={styles.container}>
          <InputTask/>
          <ButtonTask/>
        </View>
        <View style={styles.taskContainer}>
          <ListContainer/>
        </View>
      </View>
    </AppProvider>
  );
}



const styles = StyleSheet.create({
  allBox:{
    top:'5vw',
    width: '50%',
    display:'flex',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:'10px',
    flexDirection:'column',
    height:'85%',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
  },
  container: {
    position:'relative',
    display:'flex',
    marginLeft:'auto',
    borderRadius:'10px',
    marginRight:'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:'7vw',
    border:'1px solid',
    width:'80%',
    padding:'20px'
  },
  taskContainer:{
    position:'relative',
    display:'flex',
    marginLeft:'auto',
    borderRadius:'10px',
    marginRight:'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border:'1px solid',
    width:'80%',
    top:'9vw',
    height:'60%'
  },

});
