import { TextInputProps } from 'react-native';

import { TextVariants } from '../../Common/Text/Text.types';

export interface InputWithLabelProps extends TextInputProps {
  label?: string;
  textVariant?: TextVariants;
}
