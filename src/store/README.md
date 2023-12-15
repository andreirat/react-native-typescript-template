
# Store Folder Documentation

## Overview

The `store` folder is a crucial component in a React Native application, especially when using Redux and Redux Toolkit for state management. Redux provides a predictable state container for JavaScript apps, while Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. This documentation outlines the organization of the `store` folder, which includes configurations for the Redux store, custom hooks, middleware, and domain-specific slices.

Redux Toolkit simplifies the process of writing Redux logic and is recommended by the Redux team. For more information, you can refer to the official documentation:
- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

The `store` folder's structure facilitates a modular and maintainable approach to state management in the application, leveraging the powerful features of Redux and Redux Toolkit.


## Folder Structure

- **index.ts**: The main file where the Redux store is configured and exported.
- **hooks.ts**: Contains custom hooks for using Redux in the application.
- **middleware.ts**: Defines custom middleware used in the Redux store.
- **/slices**: A subfolder containing domain-specific slices.

## Detailed Breakdown

### `index.ts`

This file sets up the Redux store using `configureStore` from Redux Toolkit. It combines reducers from different slices and applies middleware.

- **Exports**:
    - `RootState`: The type for the root state of the Redux store.
    - `AppDispatch`: The type for the Redux dispatch function.
    - `store`: The configured Redux store.

### `hooks.ts`

Defines custom hooks for easier access to Redux state and dispatch within components.

- **Exports**:
    - `useAppDispatch`: Hook for using the Redux dispatch function.
    - `useAppSelector`: Typed hook for selecting state from the store.

### `middleware.ts`

Custom middleware can be defined here and added to the store configuration.

- **Exports**:
    - `middlewares`: An array of custom middleware.

### `slices` Subfolder

Contains domain-specific slices created using Redux Toolkit's `createSlice`.

#### Within Each Domain (e.g., `user`):

- **actions.ts**: Defines asynchronous actions using `createAsyncThunk`.
- **index.ts**: The slice file where the state and reducers are defined.

## Usage Examples

### Store Configuration

In `index.ts`:

```typescript
const store = configureStore({
  reducer: {
    user: userReducers,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});
```

### Accessing State and Dispatch

In a component:

```typescript
import React from 'react';
import { useAppSelector, useAppDispatch } from 'path/to/store/hooks';
import { fetchUserProfile } from 'path/to/store/slices/user/actions';

const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(state => state.user.userProfile);

  React.useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    // Component layout
  );
};
```

### Defining a Slice

In `slices/user/index.ts`:

```typescript
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
    // Handle other cases
  },
});
```

## Best Practices

- **Modular Structure**: Keep each domain's state management logic in separate slices.
- **Descriptive Naming**: Use clear names for actions and selectors.
- **Centralized Store Configuration**: Configure the store, middleware, and hooks in a central location for easy maintenance.

This structured approach to Redux in a React Native application ensures scalability, maintainability, and clarity in state management.
