# Components

## Overview

In our React Native project, we hold all reusable components inside the `components` folder. These components are designed keeping reusability and separation of concerns in mind, aiming to create an efficient and organize codebase for our application.

Each of these components favor default exports, reinforcing their individual identities and promoting the one-per-module principle.

All the components are exported from the `index.tsx` file inside the `components` folder. This allows us to import the components from the folder directly, without having to specify the component name.

## Component Types

The components are categorized based on functionality and reusability. The categories are:

``Common``: These are generic, reusable UI elements like buttons, inputs, and text.

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
