import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ProfileStackParamsList } from './TabNavigator.types';
import { ProfileContainer } from '../../../containers/Authenticated';

const ProfileNavigationStack = createStackNavigator<ProfileStackParamsList>();

const ProfileNavigator = () => {
  return (
    <ProfileNavigationStack.Navigator initialRouteName={'ProfileScreen'}>
      <ProfileNavigationStack.Screen
        name='ProfileScreen'
        component={ProfileContainer}
        options={{ headerShown: false }}
      />
    </ProfileNavigationStack.Navigator>
  );
};

export default ProfileNavigator;
