import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { AuthenticatedStackParamsList } from './AuthenticatedNavigator.types';
import TabNavigator from './TabNavigator';
import { defaultScreenOptions } from '../helpers';

const AuthenticatedNavigationStack = createStackNavigator<AuthenticatedStackParamsList>();

const AuthenticatedNavigator = () => {
  return (
    <AuthenticatedNavigationStack.Navigator initialRouteName={'Tabs'} screenOptions={defaultScreenOptions}>
      <AuthenticatedNavigationStack.Screen name='Tabs' component={TabNavigator} options={{ headerShown: false }} />
    </AuthenticatedNavigationStack.Navigator>
  );
};

export default AuthenticatedNavigator;
