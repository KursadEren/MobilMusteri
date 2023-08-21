import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';

export default function CircleNotification({ Icon, OnChange, NatificationText }) {
  return (
    <View style={styles.container}>
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationText}>{NatificationText}</Text>
      </View>

      <View style={styles.circleView}>
        <TouchableOpacity onPress={OnChange}>
          <IconButton icon={Icon} size={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  notificationTextContainer: {
    marginBottom: 10,
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
    backgroundColor: '#e2e2e2',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
