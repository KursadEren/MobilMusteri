import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { MyContext } from '../Context/Context';
import NotficationFlatList from '../Component/NotficationFlatList';

export default function HomeScreen() {
    
  

    
  return (
    <View style={style.Container}>
        <View style={style.appbarr}></View>
        
    </View>
  )
}

const style= StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#454545"
    },
    appbarr:{
        width:"100%",
        height:1,
        backgroundColor:"#FF6000"
    }
})