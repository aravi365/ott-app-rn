import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation/Navigator';
import {StatusBar} from 'react-native';
import colors from './theme/colors';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const {persistor, store} = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.primary}
          />
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
