import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';

const DATA = Array(5).fill(null); // 5 adet öğe

const SquareItem = () => (
  <View style={styles.square} />
);

const NotficationFlatList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={() => <SquareItem />}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        contentContainerStyle={styles.flatListContent}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: windowWidth / 5, // Ekran genişliğine bölerek öğeleri yatayda tam ekran kaplayacak şekilde ayarlıyoruz
    aspectRatio: 1, // Kare şeklinde öğe yapısı
    backgroundColor: '#ed662d',
    margin: 2,
    borderRadius:5,
  },
});

export default NotficationFlatList;
