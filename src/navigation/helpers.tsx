import { ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';

import { TabBarIcon } from '../components';
import theme from '../theme';

/**
 * Determines if a route name should have a native header.
 *
 * @param {string} routeName - The name of the route.
 * @returns {boolean} - True if the route should have a native header, otherwise false.
 */
export const screensWithNativeHeader = (routeName: string): boolean => {
  const routesWithHeader: string[] = [''];
  return routesWithHeader.includes(routeName);
};

/**
 * Determines if a given route name should be displayed without a tab bar.
 *
 * @param {string} routeName - The name of the route to check.
 * @returns {boolean} - True if the route should be displayed without a tab bar, false otherwise.
 */
export const screensWithoutTabBar = (routeName: string): boolean => {
  const routesWithoutTabBar = [''];
  return routesWithoutTabBar.includes(routeName);
};

/**
 * Represents the options for a tab stack.
 *
 * @param {object} options - The options for the tab stack.
 * @param {object} options.route - The route prop for the tab stack.
 * @param {string} options.route.name - The name of the route.
 *
 * @returns {object} - The tab stack options.
 */
export const tabStackOptions = ({ route }: { route: RouteProp<ParamListBase, string> }): object => {
  return {
    headerShown: screensWithNativeHeader(route.name),
    tabBarStyle: (() => {
      return {
        height: 90,
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderTopColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0,
        indicatorStyle: {
          elevation: 0,
        },
      };
    })(),
  };
};

/**
 * Function to define options for a tab bar screen.
 *
 * @param {Object} params - The parameters object.
 * @param {Object} params.route - The route object containing information about the current route.
 * @param {string} params.route.name - The name of the current route.
 *
 * @returns {Object} - The options object for the tab bar screen.
 */
export const tabBarScreenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }): object => {
  return {
    tabBarActiveTintColor: theme.colors.light.contentPrimary,
    tabBarInactiveTintColor: theme.colors.light.contentTertiary,
    tabBarIconStyle: { height: 24, width: 24 },
    tabBarLabel: route.name,
    tabBarAccessibilityLabel: route.name,
    tabBarLabelStyle: theme.textVariants.CAPTION,
    tabBarIcon: ({ focused }: { focused: boolean; color: string }) => (
      <TabBarIcon focused={focused} label={route.name} />
    ),
  };
};

/**
 * Represents the options for configuring a stack screen header.
 * @typedef {Object} StackOptions
 * @property {boolean} headerShown - Indicates whether the header should be shown or hidden.
 * @property {number} headerStatusBarHeight - The height of the status bar in the header.
 * @property {Object} headerTitleStyle - The style of the header title.
 * @property {boolean} headerShadowVisible - Indicates whether the header shadow is visible or hidden.
 */
export const stackOptions = ({ route }: { route: RouteProp<ParamListBase, string>; navigation: any }) => ({
  headerShown: screensWithNativeHeader(route.name),
  headerStatusBarHeight: 0,
  headerTitleStyle: {
    fontFamily: theme.fonts.primary.regular.normal,
  },
  headerShadowVisible: false,
});

/**
 * Default screen options for app screens.
 *
 * @typedef {Object} defaultScreenOptions
 * @property {Object} headerStyle - The style for the screen header.
 * @property {string} headerStyle.backgroundColor - The background color of the screen header.
 * @property {Object} headerBackTitleStyle - The style for the back button title in the screen header.
 * @property {boolean} headerBackTitleVisible - Specifies whether the back button title should be visible in the screen header.
 * @property {boolean} gestureEnabled - Specifies whether gestures for navigating the screen should be enabled.
 * @property {boolean} headerShown - Specifies whether the screen header should be shown.
 */
export const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerBackTitleStyle: {},
  headerBackTitleVisible: false,
  gestureEnabled: false,
  headerShown: false,
};
