import { StatusBar } from 'expo-status-bar';
import React,{useState}  from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] =useState([]);

const GoalSetter = (enteredText) => {
  setEnteredGoal(enteredText)
}
const addGoalHandler = ()=> {
  setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}])
 }

  return (
    <View style={styles.screen}>
      <View style={styles.textboxContainer}>
        <TextInput placeholder="enter Goal" onChangeText= {GoalSetter} value = {enteredGoal}
          style={styles.textbox} />
        <Button title="ADD GOAL" onPress={addGoalHandler} />
        </View>
      <FlatList data = {courseGoals} 
      renderItem = {itemData => <GoalItem title ={itemData.item.value} />} />
   
    </View>

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
 screen:{
   padding:50
 },
 textboxContainer:{
  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
 },
 textbox:{
  width: '80%', borderColor: 'black', borderWidth: 1, padding: 10
 },
 
});
