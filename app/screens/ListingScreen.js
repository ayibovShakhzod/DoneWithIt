import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import AppText from '../components/Text';
import AppButton from '../components/Button';
import useApi from '../hooks/useApi';

export default function ListingScreen({ navigation }) {
  const getListingsApi= useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() =>
              navigation.navigate(
                routes.LISTING_DETAILS,
                item
              )
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.light
  }
});
