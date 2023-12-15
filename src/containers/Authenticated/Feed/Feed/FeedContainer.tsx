import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { Button } from '../../../../components';
import { FeedStackParamsList } from '../../../../navigation/Authenticated/TabNavigator/TabNavigator.types';
import { MainStackParamList } from '../../../../navigation/Navigation.types';

const FeedContainer: React.FC<StackScreenProps<FeedStackParamsList, 'FeedScreen'>> = ({ route, navigation }) => {
  const parentNavigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the feed.</Text>
      <Button
        title='Go to profile'
        variant='primary'
        onPress={() =>
          parentNavigation.navigate('Profile', {
            screen: 'ProfileScreen',
          })
        }
      />
      <Button
        title='Go to post details'
        variant='primary'
        onPress={() =>
          navigation.navigate('PostDetailsScreen', {
            id: '123',
          })
        }
      />
    </View>
  );
};

export default FeedContainer;
