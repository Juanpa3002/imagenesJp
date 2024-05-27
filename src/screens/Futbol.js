
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Futbol = () => {


  const colors = [
    { name: 'Messi', image: require('../img/1.png') },
    { name: 'Barca', image: require('../img/2.jpg') },
    { name: 'Iniesta', image: require('../img/3.png') },
    { name: 'Xavi', image: require('../img/4.jpg') },
    { name: 'Busquets', image: require('../img/5.png') },
    { name: 'Puyol', image: require('../img/6.png') },
    { name: 'Neymar', image: require('../img/7.png') },
    { name: 'Suarez', image: require('../img/8.png') },

  ];


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Futbol</Text>
      <View style={styles.section}>
        {colors.slice(0, 8).map((color, index) => (
          <View key={index} style={styles.colorBox}>
            <Image style={styles.image} source={color.image} />
            <Text style={styles.colorName}>{color.name}</Text>
            <Text style={styles.colorCode}>{color.hex}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  colorBox: {
    width: '45%',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  colorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  colorCode: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default Futbol;