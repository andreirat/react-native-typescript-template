# Components

## Overview

In our React Native project, we hold all reusable components inside the `components` folder. These components are designed keeping reusability and separation of concerns in mind, aiming to create an efficient and organize codebase for our application.

Each of these components favor default exports, reinforcing their individual identities and promoting the one-per-module principle.

All the components are exported from the `index.tsx` file inside the `components` folder. This allows us to import the components from the folder directly, without having to specify the component name.

## Component Types

The components are categorized based on functionality and reusability. The categories are:

``Common``: These are generic, reusable UI elements like buttons, inputs, and text.

``Icons``: These are SVG icons that are used throughout the application.

``Navigation``: These are components that help with navigation, such as tabs, drawers, and menus.

``Composed``: These are components that are composed by multiple common components, such as: InputWithLabel, ButtonWithIcon, etc.

``Layouts``: These are components with a specific functionality and usually are contain multiple composed components. Could be Forms, Lists, etc.

Each folder has an `index.tsx` file that exports all the components inside the folder. This allows us to import the components from the folder directly, without having to specify the component name.

## Naming Convention

When it comes to naming our components, we  adhere to a few guiding principles.

1. **Capitalization:** Component file names are written in Pascal Case. This means the first letter of the name and the first letter of each subsequent concatenated word are capitalized. For example, a button component should be named `Button.tsx`.

2. **Descriptiveness:** Names should clearly convey what the component does or represents. If the component displays a list of tasks, a name like `TaskList.tsx` would be appropriate.

3. **Consistency:** For consistency, components related to a specific feature or domain should be grouped in the same directory, and their names should reflect this relationship. For example, components related to authentication might be named `AuthForm.tsx`, `InputWithLabel.tsx`, etc.

Remember, good naming conventions help make your code self-describing, improving readability and maintainability.

## Component Folder Structure
Each component has its own folder containing:

- An index file (`index.tsx`) which contains all the component logic and exports the component.
- A TypeScript type definition file (`ComponentName.types.ts`)
- A style file (`style.ts`)
- An optional test file (`ComponentName.test.tsx`)
- Any other assets or utilities specific to the component (`e.g. utils.ts`)

## Icons

### Using SVG Icons

To use SVG icons in a React Native application, follow these steps:

1. **Download the SVG Icon**: Obtain the SVG file for the icon you wish to use.
2. **Create an Icon Component**: In the `components/Icons` folder, create a new component for the icon. Place the SVG code inside this component.
3. **Import SVG from `react-native-svg`**: Use the `Svg` and related elements (`Path`, `Rect`, etc.) from `react-native-svg` to render the SVG icon.
4. **Use the Icon Component**: Import and use the icon component wherever needed in the application.

### Example: Creating an SVG Icon Component

```javascript
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MyIcon: React.FC = ({height, width, color}: { height: number, width: number, color: string}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path d="M..." fill={color}/>
  </Svg>
);

export default MyIcon;
```

In this example, replace `"M..."` with the actual path data from your SVG file. The `Svg` component and its children (`Path`, `Rect`, etc.) are used to replicate the SVG structure.

### Example: Using an SVG Icon Component

```javascript
import React from 'react';

import MyIcon from 'path_to_component/MyIcon';

const MyComponent: React.FC = () => (
  <View>
    <MyIcon height={20} width={20} color={20} />
  </View>
);

export default MyComponent;
```
