import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { FeedStackParamsList } from './TabNavigator.types';
import { FeedContainer, PostDetailsContainer } from '../../../containers/Authenticated';

const FeedNavigationStack = createStackNavigator<FeedStackParamsList>();

const FeedNavigator = () => {
  return (
    <FeedNavigationStack.Navigator initialRouteName={'FeedScreen'}>
      <FeedNavigationStack.Screen name='FeedScreen' component={FeedContainer} options={{ headerShown: false }} />
      <FeedNavigationStack.Screen
        name='PostDetailsScreen'
        component={PostDetailsContainer}
        options={{ headerShown: false }}
      />
    </FeedNavigationStack.Navigator>
  );
};

export default FeedNavigator;
