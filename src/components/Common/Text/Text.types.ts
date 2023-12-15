import React from 'react';
import { TextProps as RNTextProps } from 'react-native/Libraries/Text/Text';

export enum TextVariants {
  TITLE1 = 'TITLE1',
  TITLE2 = 'TITLE2',
  CAPTION = 'CAPTION',
  DEFAULT = 'DEFAULT',
}
export interface TextProps extends RNTextProps {
  color?: string;
  variant: 'TITLE1' | 'TITLE2' | 'CAPTION' | 'DEFAULT';
  children: React.ReactNode;
}
