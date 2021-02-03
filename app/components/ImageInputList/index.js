import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ImageInput from '../ImageInput';

export default ImageInputList = ({
  imageUris = [],
  onAddImage,
  onRemoveImage
}) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd()
        }
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image} key={uri}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput
            onChangeImage={(uri) => onAddImage(uri)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    marginRight: 10
  }
});
