import { View, Text } from 'react-native'
import React,{useState} from 'react'
import CirlcleNotification from '../Component/CirlcleNotification'

export default function LoginScreen() {
    const [notificationState, setNotificationState] = useState(0);

  const handleNotificationClick = () => {
    setNotificationState(notificationState === 0 ? 1 : 0); // 0'dan 1'e, veya 1'den 0'a geçiş yapar
  };
  return (
    <View style={{flex:1}}>
      <Text>LoginScreen</Text>
      <View style={{flex:0.1,justifyContent:"center",alignItems:'center'}}>

      </View>
      
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}} >
        {notificationState === 1 ? (
           <CirlcleNotification OnChange={handleNotificationClick} NatificationText="User Page" Icon="account" />
        ) : (
            <CirlcleNotification OnChange={handleNotificationClick} NatificationText="Admin Page" Icon="account-cog"/>
        )}
      </View>
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>

      </View>
      
    </View>
  )
}