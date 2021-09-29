import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);
  console.log(isAddMode);
  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }])
   setisAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    })
  }

  const cancelHandler = ()=>{
    setisAddMode(false)
  }
  return (

    // <Modal visible = {false}>
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setisAddMode(true)} />
      <GoalInput modalVisible={isAddMode} onAddGoal={addGoalHandler} onCancel = {cancelHandler}/>
      <FlatList data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />} />
    </View>
    // </ Modal>
    // <View style={{ padding: 50, flexDirection: 'row', height: 300, width: '80%', justifyContent: 'space-around', alignItems: '' }}>
    //   <View style={{
    //     flex: 1,
    //     backgroundColor: 'blue',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    //   }}>
    //     <Text>1</Text>
    //   </View>
    //   <View style={{
    //     flex: 1,
    //     backgroundColor: 'red',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    //   }}>
    //     <Text>2</Text>
    //   </View>
    //   <View style={{
    //     flex: 3,
    //     backgroundColor: 'yellow',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    //   }}>
    //     <Text>3</Text>
    //   </View>
    // </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    
  },
  //  textboxContainer:{
  //   flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  //  },
  //  textbox:{
  //   width: '80%', borderColor: 'black', borderWidth: 1, padding: 10
  //  },

});
