import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

function GoalItem(props) {
    console.log(props.ListItem);
    return (
        <TouchableOpacity activeOpacity = {0.5} onPress = {()=>props.onDelete(props.id)}>
        <View style={styles.ListItems} >
           {
          <Text >{props.title}</Text>
}
        </View>
</TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    ListItems:{
        padding:10,
        backgroundColor:'light',
        borderColor:'black',
        borderWidth:1,
       marginVertical:10
      }  
})
export default GoalItem
