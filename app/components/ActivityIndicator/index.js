import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';

export default ActivityIndicator = ({
  visible = false
}) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require('../../assets/animations/loader.json')}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 9999
  }
});
