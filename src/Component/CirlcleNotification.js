import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { IconButton ,Button} from 'react-native-paper';
import DotComponent from './DotComponent';
import MyTextInput from './MyTextInput';
import ButtonComponent from './ButtonComponent';
export default function CircleNotification({ Icon, OnChange, NatificationText }) {

  const [username, setUsername] = useState('');
  const [showDotComponent, setShowDotComponent] = useState(false);

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handleNextPress = () => {
    setShowDotComponent(showDotComponent == true ? false : true);
  };


  return (
    <View style={styles.container}>
      <View style={{flex:1,flexDirection:"column",alignItems:"center"}}> 
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationText}>{NatificationText}</Text>
      </View>
    <View style={{flex:0.5}}>
      <View style={styles.circleView}>
        <TouchableOpacity onPress={OnChange}>
          <IconButton iconColor='black' icon={Icon} size={50} />
        </TouchableOpacity>
      </View>
      </View>
      <View style={{flex:1}}>
      {!showDotComponent ? (
        <View style={{ flex: 1 }}>
         <View style={{ flex: 1 }}>
          <MyTextInput onChangeText={handleUsernameChange} value={username} />
          </View>
          <View style={{ flex: 1.2 }}>
          <ButtonComponent title="Next" OnChange={handleNextPress} />
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
          <DotComponent />
          </View >
          <View style={{ flex: 1,flexDirection:"row", justifyContent:"space-around" }}>
            <View >
            <ButtonComponent title="Back" OnChange={handleNextPress} />
            </View>
        
          <View >
              <ButtonComponent title="Login" OnChange={handleNextPress} />
          </View>
          </View>
        </View>
      )}
      
      </View>
      
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems: 'center',
  },
  notificationTextContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    textAlign: 'center',
    fontSize: 20,
  },
  circleView: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ed662d',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
