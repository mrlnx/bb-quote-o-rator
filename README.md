# Breaking Bad Quote-O-Rator

The [Breaking Bad Quote-O-Rator is Quote generator](https://bb-quote-o-rator.vercel.app/) for fans of the serie Breaking Bad. With the generator you generate over 100 quotes of the series from your favourite characters: i.e Walter, Jessie, Gus, Saul and Skyler. [https://www.breakingbadapi.com](https://www.breakingbadapi.com) has a collection of information about all the quotes, characters and even about the spin-off Better Call Saul. The Breaking Bad Quote-O-Rator makes it even possible to save your favourite quotes on your device and to share them on twitter.

If you like to use the Breaking Bad Quote-O-Rator is Quote generator you can click [here](https://bb-quote-o-rator.vercel.app/).

## Requirements for running locally
- Node 14 or higher

### Install

```
yarn

npm install
```

### Running locally

```
yarn start 

or

npm start
```

### Testing

```
yarn test 

or

npm test
```


### Technology used


- React 18.2
- Typescript
- Emotion

## Documentation

- The application is build with React 18, because of the simplicity no need for serverside rendering etc.
- The application theming and design are close to ambiance of the series, the colors and background are used.
- The styling of the application makes use of Styled components or CSS-in-JS.

- The application is fully typed with Typescript, generics are used where possible

- The folder structure is focused to make reusable components, all ui components have their own direcotry with all the files which belong to this component. [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) is also build this way, this is how design systems can be structured. Api services have their on directory, also the base theme. Hooks and context are separated when they can used by other components. This way the structure stays flatter.

- The components are unit-tested.

## Todo

- End to end test
- Styling fixes
