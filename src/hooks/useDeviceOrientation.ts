import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(height > width ? 'portrait' : 'landscape');
    };

    const dimensionsListener = Dimensions.addEventListener('change', updateOrientation);
    updateOrientation();

    return () => dimensionsListener.remove();
  }, []);

  return orientation;
};

export default useDeviceOrientation;
