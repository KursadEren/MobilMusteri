import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';

const data = [
  {
    id: 1,
    task: "1.görev",
    personel: "ahmet",
    complete: false,
  },
  {
    id: 2,
    task: "2.görev",
    personel: "mehmet",
    complete: false,
  },
  {
    id: 3,
    task: "3.görev",
    personel: "ayşe",
    complete: false,
  },
  {
    id: 4,
    task: "2.görev",
    personel: "mehmet",
    complete: false,
  },
  {
    id: 4,
    task: "2.görev",
    personel: "mehmet",
    complete: false,
  },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(data);

  const HandleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => HandleComplete(item.id)}>
      <View
        style={[
          style.FlatContainer,
          { backgroundColor: item.complete ? '#4CAF50' : '#F44336' },
        ]}
      >
        <Text style={{ color: "#1FF" }}>Görev: {item.task}</Text>
        <Text style={style.personel}>Personel: {item.personel}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={style.Container}>
      <ScrollView contentContainerStyle={style.ScrollViewContent}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#454545",
    alignItems: 'center',
    flexDirection: "column",
    borderTopWidth: 1,
    borderTopColor: "#FF6000"
  },
  FlatContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.111,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  personel: {
    alignSelf: "flex-start",
    color: "#FF6000"
  },
  ScrollViewContent: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.5,
    alignItems: 'center', // İçeriği yatayda ortalama yapar
   marginTop:10,
  }
})
