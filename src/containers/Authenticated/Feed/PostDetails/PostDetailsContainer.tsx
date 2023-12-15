import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { FeedStackParamsList } from '../../../../navigation/Authenticated/TabNavigator/TabNavigator.types';

const PostDetailsContainer: React.FC<StackScreenProps<FeedStackParamsList, 'PostDetailsScreen'>> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the post details screen with id {route.params.id}</Text>
    </View>
  );
};

export default PostDetailsContainer;
