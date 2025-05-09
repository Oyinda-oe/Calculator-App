import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Home from '../components/Home'

const tasks = [1,2,3,4,5,6,7,8,9,10]
const index = () => {
  return (
    // <View>
    //   <Text>Todo App</Text>
    //   <TextInput placeholder='Add Todo' value={()=>{}}
    //   onChangeText={()=>{}}
    //   style={styles.input}
    //   />
    //   <TouchableOpacity
    //     onPress={()=>{}}
        
    //   >
    //     <Text style={styles.addButtonText}>Add Task</Text>
    //   </TouchableOpacity>
    //   <FlatList
    //     data={tasks}
    //     renderItem={(item)=>(
    //       <View>
    //         <Text>tasks</Text>
    //       </View>
    //     )}
    //   />
    // </View>
    <View style={styles.Container}>
        <Home />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      marginTop: 40,
    },
    heading:{
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'blue'
    },
    input:{
      borderWidth: 3,
      borderColor: 'blue',
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
      fontSize: 18,
    },
    addButton:{
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    addButtonText:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    Container : {
      flex : 1,
      alignItems : 'center', 
      backgroundColor : '#fff',
      justifyContent : 'center'
    }
})