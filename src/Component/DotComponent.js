import React, { useState } from 'react';
import { View,  StyleSheet, } from 'react-native';

import { HelperText, TextInput   } from 'react-native-paper';

const DotComponent = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
            placeholder='Şifre'
            textColor='#FFE6C7'
            placeholderTextColor="#FFE6C7"       
            underlineColor="#FF6000"
            activeUnderlineColor="#454545"
            onChangeText={handlePasswordChange}
            value={password}
            keyboardType="numeric"
            maxLength={6}
            style={styles.textInput}
            secureTextEntry={!showPassword} 
            
          />
          <HelperText style={{color:"#FFE6C7"}} type="info">
            Şifreniz 6 karakter uzunluğunda olmalıdır.
          </HelperText>
      
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: "#FF6000",
    width: 300,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  passwordDotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  passwordDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ed662d',
    backgroundColor: '#454545',
    marginHorizontal: 5,
  },
  passwordDotFilled: {
    backgroundColor: '#FF6000',
  },
});

export default DotComponent;
