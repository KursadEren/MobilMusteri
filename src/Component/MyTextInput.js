import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const MyTextInput = ({ onChangeText, value }) => {
  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }} // Gerektiğinde ayarlayın
      scrollEnabled={false} // Gerektiğinde ayarlayın
    >
      <TextInput
        style={styles.input}
        underlineColor="#ed662d"
        placeholderTextColor="black"   
      activeUnderlineColor="#ed662d"
        placeholder="Kullanıcı Adı"
        onChangeText={onChangeText}
        value={value}
      />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default MyTextInput;
