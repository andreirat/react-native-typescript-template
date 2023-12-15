import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { Button } from '../../../components';
import { UnauthenticatedStackParamsList } from '../../../navigation/Unauthenticated/UnauthenticatedNavigator.types';

const LoginContainer: React.FC<StackScreenProps<UnauthenticatedStackParamsList, 'LoginScreen'>> = ({
  route,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Button variant='primary' title={'Register'} onPress={() => navigation.navigate('RegisterScreen')} />
      <Text style={styles.text}>This is the login screen.</Text>
    </View>
  );
};

export default LoginContainer;
