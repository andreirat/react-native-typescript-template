import { createSlice } from '@reduxjs/toolkit';

import { fetchUserProfile } from './actions';
import { RootState } from '../../';
import { User } from '../../../types';

interface initialStateInterface {
  userProfile?: User;
  loading?: boolean;
  error?: string;
}

const initialState: initialStateInterface = {
  userProfile: undefined,
  loading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.userProfile = action.payload;
    });
  },
});

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
