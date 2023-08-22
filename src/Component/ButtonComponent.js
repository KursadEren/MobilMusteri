import * as React from 'react';
import { StyleSheet,View } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonComponent = () => (
    <View style={style.ButtonContainer}>
       <Button icon="send" mode="contained" onPress={() => console.log('Pressed')}>
       Press me
       </Button>
    </View>
  
);
const style = StyleSheet.create({
    ButtonContainer: {
        marginTop:40,
    }
})

export default ButtonComponent;