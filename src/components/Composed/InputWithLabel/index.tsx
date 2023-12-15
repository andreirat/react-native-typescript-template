import React from 'react';
import { TextInput, View } from 'react-native';

import { InputWithLabelProps } from './InputWithLabel.types';
import styles from './style';
import Text from '../../Common/Text';
import { TextVariants } from '../../Common/Text/Text.types';

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, textVariant, ...textInputProps }) => {
  return (
    <View style={styles.container}>
      {label && <Text variant={textVariant || TextVariants.DEFAULT}>{label}</Text>}
      <TextInput {...textInputProps} style={[styles.input, textInputProps.style]} />
    </View>
  );
};

export default InputWithLabel;
