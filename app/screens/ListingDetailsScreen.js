import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import AppText from '../components/Text';
import ListItem from '../components/list/ListItem';
import colors from '../config/colors';

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
          {listing.title}
        </AppText>
        <AppText style={styles.price}>
          ${listing.price}
        </AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }
});
