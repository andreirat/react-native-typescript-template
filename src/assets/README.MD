# Assets

## Fonts
#### How to make a font file work in your project

1. Copy the font file into the `src/assets/fonts` folder.
2. Run the command `npx react-native-asset` to link the font file.
3. Use the font in your project like this:

```javascript
import { Text } from 'react-native';

<Text style={{ fontFamily: 'FontName' }}>Hello world!</Text>
```


#### Note
The path of the fonts is used in the `react-native.config.js` file. If you change the path of the fonts, you must also change the path in the `react-native.config.js` file.

## Backgrounds

Usually there we place big images which are used as backgrounds.

## Icons

There we place icons which are used in the project. The icons are usually small images.
There are 2 ways of using icons in the project:

1. Importing png, jpg, jpeg, gif, svg files and using them as images.
2. Importing svg files and using them as components. This way we can change the color and size of the icon. This is the preferred way of using icons and should be placed in the ``components`` folder
