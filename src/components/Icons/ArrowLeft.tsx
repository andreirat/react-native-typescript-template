import React from 'react';
import { Svg, Path } from 'react-native-svg';

const ArrowLeftIcon = ({ color, size = 24 }: { color: string; size?: number }) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 22 22' fill='none'>
      <Path
        d='M8.77242 5.43555L3.20825 10.9997L8.77242 16.5639'
        stroke={color || '#fff'}
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M18.7918 11H3.36426'
        stroke={color || '#fff'}
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
