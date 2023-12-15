import { createAsyncThunk } from '@reduxjs/toolkit';

import createClient from '../../../client';
import { ENDPOINTS } from '../../../constants';

const client = createClient({ includeAuth: true });

const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async () => {
  // Example of api call to fetch user profile
  // const response = await client.get(ENDPOINTS.USER.GET);
  // return response.data;

  return { name: 'John Doe', username: 'johndoe' };
});

export { fetchUserProfile };
