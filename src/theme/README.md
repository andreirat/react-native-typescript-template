# Theme

## Overview
This theme file provides a structured and consistent approach to styling in a React Native application. It includes definitions for colors, fonts, text styles, shadows, and layout metrics. The modular design allows for easy extension and customization.

## Colors

#### Description

- Colors are defined for both light and dark themes, offering flexibility for different user preferences or display modes.
- For a consistent look and feel, colors are defined in a single location and referenced throughout the application.
- The name of each color should reflect its purpose, e.g., `primary` or `secondary`. This helps maintain readability and consistency.

##### Light Theme Colors:

Contain all the colors for the light theme. Each color has a name and a value. The value can be a string that represents the color in `hexadecimal` format or other formats like `rgba`.

#### Dark Theme Colors:

Contain all the colors for the dark theme. Each color has a name and a value. The value can be a string that represents the color in `hexadecimal` format or other formats like `rgba`.

#### Extending
To extend, add new color definitions in the respective theme objects. Use descriptive names for new colors to maintain readability.

## Metrics

#### Description

Metrics define standard spacing and layout dimensions to ensure consistency across the application.

Example : `screenHorizontalPadding` Horizontal padding for screen content.

#### Extending
To add new metrics, define additional properties in the metrics object. Ensure they have clear, descriptive names indicating their purpose.

## Fonts

#### Description
Fonts define the font families used in the application, including the default font and any additional fonts.

#### Extending
To introduce new fonts, add them to the fonts object. Include variations (like bold or semi-bold) as needed. Ensure the fonts are properly linked in your React Native project by running the ``npx react-native-asset`` command.

## Text Variants

#### Description
Text variants provide predefined styles for different text types, ensuring consistency in typography.

#### Extending
Create new text styles by adding entries to the `textVariants` object. Use descriptive names and maintain the structure of font size, line height, and font family.

## Shadows

#### Description
Shadows define styles for drop shadows in UI components like buttons and cards, adding depth and distinction.

#### Extending
To add new shadow styles, extend the shadows object with new entries. Follow the existing structure for consistency.

## Usage
To use the theme in your application:

- Import the theme: `import theme from 'path/to/theme'`;
- Apply styles using the theme's properties, e.g., `style={{ color: theme.colors.light.contentPrimary }}`

To extend the theme, directly add or modify properties in the respective category objects (colors, fonts, text variants, etc.). Ensure new additions are named descriptively and maintain the structure for clarity and ease of use.
