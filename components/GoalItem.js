import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.ListItems} >
            <Text >{props.ListItem}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    ListItems:{
        padding:10,
        backgroundColor:'light',
        borderColor:'black',
        borderWidth:1,
       marginVertical:10
      }  
})
export default GoalItem
