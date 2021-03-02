import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../config/colors';
import AppText from '../Text';

export default OfflineNotice = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9,
    top: Constants.statusBarHeight
  },

  text: {
    color: colors.white
  }
});
