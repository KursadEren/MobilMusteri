import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyTextInput = ({ onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default MyTextInput;
