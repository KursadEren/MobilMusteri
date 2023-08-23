import * as React from 'react';
import { StyleSheet,View } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonComponent = ({title,OnChange}) => (
    <View style={style.ButtonContainer}>
       <Button buttonColor='#ed662d' icon="send" mode="contained" onPress={OnChange}>
        {title}
       </Button>
    </View>
  
);
const style = StyleSheet.create({
    ButtonContainer: {
        marginTop:40,
    }
})

export default ButtonComponent;