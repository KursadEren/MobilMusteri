import { View, Text } from 'react-native'
import React,{useState} from 'react'
import CirlcleNotification from '../Component/CirlcleNotification'
import NotficationFlatList from '../Component/NotficationFlatList'
export default function LoginScreen() {
    const [notificationState, setNotificationState] = useState(0);

  const handleNotificationClick = () => {
    setNotificationState(notificationState === 0 ? 1 : 0); // 0'dan 1'e, veya 1'den 0'a geçiş yapar
  };
  return (
    <View style={{flex:1}}>
   
      <View style={{flex:0.1,justifyContent:"center",alignItems:'center'}}>
        <NotficationFlatList/>
      </View>
      
      <View style={{flex:0.8,marginTop:10}} >
        {notificationState === 1 ? (
           <CirlcleNotification OnChange={handleNotificationClick} NatificationText="User Page" Icon="account" />
        ) : (
            <CirlcleNotification OnChange={handleNotificationClick} NatificationText="Admin Page" Icon="account-cog"/>
        )}
      </View>
      <View style={{flex:0.1,justifyContent:"center",alignItems:'center'}}>
        <NotficationFlatList/>
      </View>
     
      
    </View>
  )
}