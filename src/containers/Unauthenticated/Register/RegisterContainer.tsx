import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { Button } from '../../../components';
import { UnauthenticatedStackParamsList } from '../../../navigation/Unauthenticated/UnauthenticatedNavigator.types';

const RegisterContainer: React.FC<StackScreenProps<UnauthenticatedStackParamsList, 'RegisterScreen'>> = ({
  route,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the register screen.</Text>
      <Button variant='primary' title={'Go to register'} onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
};

export default RegisterContainer;
