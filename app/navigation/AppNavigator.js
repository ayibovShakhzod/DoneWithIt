import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
import navigationTheme from './navigationTheme';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderTopWidth: 0,
        paddingBottom: 5
      }
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home"
            color={color}
            size={size}
          />
        )
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() =>
              navigation.navigate('ListingEdit')
            }
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        )
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account"
            color={color}
            size={size}
          />
        )
      }}
    />
  </Tab.Navigator>
);
