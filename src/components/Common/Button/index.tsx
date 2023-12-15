import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { ButtonProps } from './Button.types';
import styles from './style';
import Text from '../Text';

const Button: React.FC<ButtonProps & TouchableOpacityProps> = ({
  title,
  variant = 'primary',
  onPress,
  style,
  ...props
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, styles[variant], style]} {...props}>
    <Text variant='CAPTION' color={'white'}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default Button;
