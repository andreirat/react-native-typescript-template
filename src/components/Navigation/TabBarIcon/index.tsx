import * as React from 'react';
import { useColorScheme } from 'react-native';

import theme from '../../../theme';
import { FeedIcon, ProfileIcon } from '../../Icons';

interface TabBarIconInterface {
  focused: boolean;
  label: string;
}

const TabBarIcon: React.FC<TabBarIconInterface> = ({ focused, label }) => {
  const colorMode = useColorScheme() || 'light';
  const color = focused ? theme.colors[colorMode].contentPrimary : theme.colors[colorMode].contentTertiary;

  const getIcon = () => {
    switch (label) {
      case 'Feed':
        return <FeedIcon size={24} color={color} />;
      case 'Profile':
        return <ProfileIcon size={26} color={color} />;
      default:
        return null;
    }
  };

  return <>{getIcon()}</>;
};

export default TabBarIcon;
