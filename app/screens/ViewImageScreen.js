import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

export default ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.closeIcon, styles.icons]} />
      <View style={[styles.deleteIcon, styles.icons]} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: 50,
    height: 50,
    position: 'absolute'
  },
  closeIcon: {
    backgroundColor: colors.secondary,
    top: 40,
    left: 30,
  },
  deleteIcon: {
        
    backgroundColor: colors.primary,
    top: 40,
    right: 30
  },

  image: {
    width: '100%',
    height: '100%'
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  }
});
