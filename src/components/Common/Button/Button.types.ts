import { StyleProp, ViewStyle } from 'react-native';

export interface ButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  variant: 'primary' | 'secondary';
}
