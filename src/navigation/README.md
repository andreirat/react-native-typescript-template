
# Navigation Structure Documentation

## Overview

This document outlines the navigation structure of a React Native application, accommodating both authenticated and unauthenticated user flows. The navigation setup is designed using [React Navigation v6](https://reactnavigation.org/docs/getting-started/), which is a flexible and widely-used library in React Native for managing screen navigation and handling different user states.

React Navigation v6 offers an extensive range of functionalities, from simple stack navigators to more complex nested navigators. This structure takes advantage of these features to provide a seamless and intuitive navigation experience for both logged-in and guest users. The configuration includes stack navigators for individual user flows and a bottom tab navigator for quick access within the authenticated user's journey.

For a deeper understanding of React Navigation and its capabilities, you can refer to the official documentation:
- [React Navigation v6 Documentation](https://reactnavigation.org/docs/getting-started/)
- [Navigators in React Navigation v6](https://reactnavigation.org/docs/navigators/)

This setup ensures a scalable and maintainable navigation system, adhering to best practices in React Native development and leveraging the robust features of React Navigation v6.

## Navigation Hierarchy

- **Root Navigator**: This is the entry point of the navigation system. It determines whether to display the `AuthenticatedNavigator` or the `UnauthenticatedNavigator` based on the user's authentication status.

- **Authenticated Stack**: Contains the navigation flow for authenticated users. Within this stack, there's a bottom tab navigator that includes multiple stacks for different sections of the app.

- **Unauthenticated Stack**: Manages the navigation flow for unauthenticated users, typically including screens like Login and Register.

## Detailed Structure

### RootNavigator

The `RootNavigator` component is the main navigation container that switches between `AuthenticatedNavigator` and `UnauthenticatedNavigator` based on the user's login status.

- **File**: `RootNavigator.tsx`
- **Conditionally Renders**:
    - `AuthenticatedNavigator` if the user is logged in.
    - `UnauthenticatedNavigator` if the user is not logged in.

### AuthenticatedNavigator

This component manages the navigation for authenticated users.

- **File**: `AuthenticatedNavigator.tsx`
- **Contains**:
    - `TabNavigator` as the initial route.

### TabNavigator

`TabNavigator` is a bottom tab navigator used within the `AuthenticatedNavigator`. It contains tabs for different sections of the app available to authenticated users.

- **File**: `TabNavigator.tsx`
- **Tabs**:
    - `Feed`: Navigates to the `FeedNavigator`.
    - `Profile`: Navigates to the `ProfileNavigator`.

### FeedNavigator

A stack navigator for the Feed section, part of the `TabNavigator`.

- **File**: `FeedNavigator.tsx`
- **Screens**:
    - `FeedScreen`: The main screen for the Feed section.
    - `PostDetailsScreen`: A detailed view of a specific post.

### ProfileNavigator

Manages navigation for the user's profile section.

- **File**: `ProfileNavigator.tsx`
- **Screens**:
    - `ProfileScreen`: The main profile screen.

### UnauthenticatedNavigator

This component handles navigation for users who are not logged in.

- **File**: `UnauthenticatedNavigator.tsx`
- **Typical Screens**:
    - `LoginScreen`: For user login.
    - `RegisterScreen`: For new user registration.

## Usage and Extensions

- To add a new screen to a stack, define the screen component and add it to the respective stack navigator.
- For adding a new tab, create a new stack navigator and add it to the `TabNavigator`.
- To adjust the authenticated vs. unauthenticated flow, modify the logic in `RootNavigator`.

This structured approach to navigation ensures a clear separation of authenticated and unauthenticated user flows, while providing flexibility to expand the navigation as the application grows.
