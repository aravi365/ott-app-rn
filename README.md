# OTT App

[![React Native](https://img.shields.io/badge/React%20Native-v0.66.4-green.svg)](https://facebook.github.io/react-native/)

[![React Navigation V6](https://img.shields.io/badge/React%20Navigation-v6.0.6-blue.svg)](https://reactnavigation.org/)

![Webp net-gifmaker](https://user-images.githubusercontent.com/15327129/150726180-e194d3a7-6e8e-4e59-8550-180158e2a841.gif)


## Environment Setup

You can check the react-native website for detailed [guide](https://reactnative.dev/docs/environment-setup)

## Project Setup

Install all the node modules by yarn

```bash
yarn
```

Install all the pod files for iOS

```bash
npx pod-install
```

or

```bash
cd ios && pod install && cd ..
```

Now you can the run project for both android and iOS using

```bash
yarn run android
```

```bash
yarn run ios
```

If you can't get this to work, see the [Troubleshooting page](https://reactnative.dev/docs/troubleshooting#content)

## Project Structure

Here is the detailed project file tree.

- [api/](./src/api)
  - [data/](./src/api/data)
- [assets/](./src/assets)
  - [fonts/](./src/assets/fonts)
  - [images/](./src/assets/images)
- [components/](./src/components)
- [helpers/](./src/helpers)
- [navigation/](./src/navigation)
  - [Navigator.js](./src/navigation/Navigator.js)
- [redux/](./src/redux)
  - [actions/](./src/redux/actions)
  - [lib/](./src/redux/lib)
  - [reducers/](./src/redux/reducers)
  - [sagas/](./src/redux/sagas)
  - [store.js](./src/redux/store.js)
- [screens/](./src/screens)
- [theme/](./src/theme)
  - [colors.js](./src/theme/colors.js)
  - [fonts.js](./src/theme/fonts.js)
  - [metrics.js](./src/theme/metrics.js)
  - [strings.js](./src/theme/strings.js)
- [App.js](./src/App.js)

#### Explanation

`api/` : includes the api configuration file with api constants and all api methods

`assets/`: includes all the assets used in the project like images, fonts

`components/`: includes all the reusable components used

`helpers/`: includes all the helper methods for assisting or performing certain operations

`navigation`: includes navigation stacks for react navigation

`redux`: includes actions, reducers, sagas, and store.js and that is everything related to redux and redux saga.

`screens`: all the main screens of the application belongs here

`themes`: all visibile elements like colors, fonts, layout related and hardcoded strings are put together here.

`App.js`: App Component is the main component in React which acts as a container for all other components.

#### Todo / Improvements
- [ ] Unit Testing the components
- [ ] Splash Screen and App Icon
