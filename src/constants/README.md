
# Constants

## Overview

This document describes the structure and usage of the `constants` folder in a React Native application. The folder contains various constants files, each defining a specific set of constants, such as API endpoints, configuration values, or static data used throughout the application.

## Folder Structure

### `default` Index File
- The default index file in the `constants` folder exports all constants from the individual files within the folder.
- This centralizes the constants, allowing them to be imported from a single source.

### Constants Files
- Each constants file is a JavaScript module that exports a specific set of constants.
- Example: A file named `endpoints.js` might export an `ENDPOINTS` object containing API endpoint definitions.

## Example: `ENDPOINTS` Constants File

### Structure
- The `ENDPOINTS` constant is an object that categorizes API endpoints.
- Each category contains related endpoint definitions.
- Example:
  ```javascript
  const ENDPOINTS = {
    AUTHENTICATION: {
      LOGIN: '/login',
    },
    USER: {
      GET: '/user',
      UPDATE: '/user',
    },
  };

  export default ENDPOINTS;
  ```

## Extension

### Adding New Constants
- To add new constants, create a new file in the `constants` folder.
- Define and export the constants in this file.
- Update the index file to include exports from this new file.

### Modifying Existing Constants
- Open the relevant constants file.
- Make the necessary additions or changes.
- The changes will be reflected wherever these constants are used, provided they are imported via the index file.

## Usage

### Importing Constants
- Constants can be imported directly from the `constants` index file.
- This simplifies imports and ensures consistent use of constants throughout the application.
- Example:
  ```javascript
  import { ENDPOINTS } from 'path/to/constants';

  // Usage
  console.log(ENDPOINTS.USER.GET); // Outputs: '/user'
  ```

## Best Practices

- **Descriptive Naming**: Use clear and descriptive names for constant files and the constants themselves.
- **Categorization**: Group related constants together within files for better organization.
- **Centralized Exports**: Utilize the index file to export all constants, enabling easier and more organized imports.

This structure for managing constants enhances the maintainability and scalability of the application, ensuring a single source of truth for all constant values.
