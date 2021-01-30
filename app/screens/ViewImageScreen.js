import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.closeIcon, styles.icons]}>
        <MaterialCommunityIcons
          name="close"
          color="white"
          size={35}
        />
      </View>
      <View style={[styles.deleteIcon, styles.icons]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
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
    position: 'absolute',
    top: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeIcon: {
    left: 30
  },
  deleteIcon: {
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
