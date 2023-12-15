import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { UnauthenticatedStackParamsList } from './UnauthenticatedNavigator.types';
import { LoginContainer, RegisterContainer } from '../../containers/Unauthenticated';
import { defaultScreenOptions } from '../helpers';

const UnauthenticatedNavigationStack = createStackNavigator<UnauthenticatedStackParamsList>();

const UnauthenticatedNavigator = () => {
  return (
    <UnauthenticatedNavigationStack.Navigator initialRouteName={'LoginScreen'} screenOptions={defaultScreenOptions}>
      <UnauthenticatedNavigationStack.Screen
        name='RegisterScreen'
        component={RegisterContainer}
        options={{ headerShown: false }}
      />
      <UnauthenticatedNavigationStack.Screen
        name='LoginScreen'
        component={LoginContainer}
        options={{ headerShown: false }}
      />
    </UnauthenticatedNavigationStack.Navigator>
  );
};

export default UnauthenticatedNavigator;
