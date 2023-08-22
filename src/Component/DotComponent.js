import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';
const DotComponent = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const renderPasswordDots = () => {
    const passwordLength = password.length;
    const dots = Array(6).fill('').map((_, index) => (
      <View
        key={index}
        style={[
          styles.passwordDot,
          passwordLength > index && styles.passwordDotFilled,
        ]}
      />
      
    ));
    return dots;
  };

  return (
    <View style={styles.container}>
        <View style={{flex:0.3}}>
         <View style={styles.passwordDotsContainer}>
           {renderPasswordDots()}
      </View>
      </View>
      <View style={{flex:0.8}}>
      <TextInput
        onChangeText={handlePasswordChange}
        value={password}
        keyboardType="numeric"
        maxLength={6}
        style={styles.textInput}
      />
      </View>
      <View style={{flex:0.5}}>
     <ButtonComponent/>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems: 'center',
  },
  textInput: {
    fontSize: 24,
    borderWidth: 1,
    padding: 10,
    width: 200,
    textAlign: 'center',
  },
  passwordDotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  passwordDot: {
    width: 20,
    height: 20,
    borderRadius: 10, // Kareyi yuvarlak yapmak için
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  passwordDotFilled: {
    backgroundColor: 'black',
  },
});

export default DotComponent;
