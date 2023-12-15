
# Hooks 

## Overview

The `hooks` folder contains custom React hooks that can be used across the React Native application. These hooks encapsulate logic that can be reused in multiple components.

## Hook Examples

### `useDeviceOrientation`

- **Purpose**: Determines and returns the current orientation of the device (`portrait` or `landscape`).
- **Usage**:
  ```javascript
  import { useDeviceOrientation } from 'path/to/hooks';

  const MyComponent = () => {
    const orientation = useDeviceOrientation();
    
    return (
      <View>
        <Text>Current Orientation: {orientation}</Text>
      </View>
    );
  };
  ```

## Adding New Hooks

- To add a new hook, create a file for the hook in the `hooks` folder.
- Implement the hook logic and export it from the file.
- Update the `index.js` file in the `hooks` folder to include this new hook.

## Best Practices

- Ensure hooks follow the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).
- Hooks should have a single responsibility and be named descriptively.
- Document each hook with comments or in a Markdown file to explain its purpose and usage.
