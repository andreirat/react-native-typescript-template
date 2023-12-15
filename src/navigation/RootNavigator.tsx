import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNotifications } from 'react-native-notificated';

import AuthenticatedNavigator from './Authenticated';
import { RootStackParamsList } from './Navigation.types';
import UnauthenticatedNavigator from './Unauthenticated';

const { NotificationsProvider } = createNotifications();
const RootNavigator = () => {
  const navigationRef = createNavigationContainerRef<RootStackParamsList>();

  // Change this with your own logic, by checking if the user is authenticated or not
  const isLoggedIn = true;

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {isLoggedIn ? <AuthenticatedNavigator /> : <UnauthenticatedNavigator />}
      </NavigationContainer>
      <NotificationsProvider />
    </>
  );
};

export default RootNavigator;
