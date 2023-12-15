import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import FeedNavigator from './FeedStack';
import ProfileNavigator from './ProfileStack';
import { tabStackOptions, tabBarScreenOptions } from '../../helpers';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabStackOptions} initialRouteName={'Feed'}>
      <Tab.Screen name='Feed' component={FeedNavigator} options={tabBarScreenOptions} />
      <Tab.Screen name='Profile' component={ProfileNavigator} options={tabBarScreenOptions} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
