
# Client Configuration

## Overview

This document provides details on the refactored configuration of an Axios client instance for API requests in a React Native application. The refactoring focuses on readability, clear naming conventions, and separation of concerns.

Using `axios` is just a personal preference. The same concepts can be applied to any other HTTP client.

## Configuration Options

### Interface `ClientOptions`
Options for customizing the client behavior:
- `includeAuth`: Includes authorization headers if set to `true`.
- `includeNotification`: Enables error notifications on response errors if `true`.
- `includeInterceptors`: Adds request and response interceptors if `true`.
- `isImageRequest`: Configures the client for image requests if `true`.

### Default Configuration
- `baseURL`: Defined by `API_URL` from environment variables.

### Image Request Configuration
- Based on the default configuration with `Content-Type` header set to `image/jpeg`.

## Notification System
Uses `createNotification` from `react-native-notificated` to display error messages. Any notifications library can be used.

## Request Configuration (`configureRequest`)

### Description
Configures request headers, optionally adding authorization.

### Behavior
- Conditionally adds `Authorization` header with the access token.
- Utilizes `AccessToken` utility for retrieving the access token.

## Response Handling (`handleResponse`)
- Processes and returns the data from Axios responses.

## Error Handling

### `handleError`
- Manages API response errors.
- Optionally displays a notification with the error message.
- Logs the error for debugging.

## Client Initialization (`createClient`)

### Description
Initializes an Axios instance with custom options.

### Interceptors
- **Request Interceptor**: Configures requests based on options.
- **Response Interceptor**: Manages responses and errors.

## Usage

```javascript
import createClient from 'path/to/refactoredClientConfig';

// Initialize client with default settings
const client = createClient();

// Make API requests using the client
// ...
```

## Extending
- Modify or add new options in the `ClientOptions` interface for further customization.
- Implement or adjust interceptors for different request/response behaviors.

