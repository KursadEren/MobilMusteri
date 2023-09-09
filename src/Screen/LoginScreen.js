import { View, Text } from 'react-native'
import React,{useContext, useEffect, useState} from 'react'
import CirlcleNotification from '../Component/CirlcleNotification'
import NotficationFlatList from '../Component/NotficationFlatList'
import { MyContext } from '../Context/Context';
export default function LoginScreen({navigation}) {
    const [notificationState, setNotificationState] = useState(0);
    
    const context = useContext(MyContext);
    const { Flatlistxy,
      updateFlatlistxy} = context
  const handleNotificationClick = () => {
    setNotificationState(notificationState === 0 ? 1 : 0); // 0'dan 1'e, veya 1'den 0'a geçiş yapar
  };
  useEffect(()=>{
    updateFlatlistxy(true);
  },[])
  return (
    <View style={{flex:1,backgroundColor:"#454545"}}>
   
      <View style={{flex:0.1,justifyContent:"center",alignItems:'center'}}>
        <NotficationFlatList/>
      </View>
      
      <View style={{flex:0.8,marginTop:15}} >
        {notificationState === 1 ? (
           <CirlcleNotification  OnChange={handleNotificationClick} NatificationText="User Page" Icon="account" />
        ) : (
            <CirlcleNotification navigation={navigation} OnChange={handleNotificationClick} NatificationText="Admin Page" Icon="account-cog"/>
        )}
      </View>
      <View style={{flex:0.1,justifyContent:"center",alignItems:'center'}}>
        <NotficationFlatList />
      </View>
     
      
    </View>
  )
}