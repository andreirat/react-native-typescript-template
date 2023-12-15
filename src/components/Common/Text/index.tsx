import React from 'react';
import { Text as RNText, useColorScheme } from 'react-native';

import { TextProps } from './Text.types';
import theme from '../../../theme';
const Text: React.FC<TextProps> = ({ variant, children, color, style, ...props }) => {
  const colorMode = useColorScheme() || 'dark';
  const textStyle = theme.textVariants[variant] || theme.textVariants.DEFAULT;

  return (
    <RNText style={[textStyle, style, { color: color || theme.colors[colorMode].contentPrimary }]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
