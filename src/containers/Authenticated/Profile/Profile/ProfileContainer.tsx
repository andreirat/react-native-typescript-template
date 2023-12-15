import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchUserProfile } from '../../../../store/slices/user/actions';

const ProfileContainer: React.FC = () => {
  const { userProfile, loading } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the profile.</Text>
      {!loading && userProfile && <Text style={styles.text}>My name is {userProfile.name}</Text>}
      {loading && <Text style={styles.text}>Loading...</Text>}
    </View>
  );
};

export default ProfileContainer;
