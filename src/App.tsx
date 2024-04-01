import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import { store } from './store/store'

import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(); //Ignore all log notifications

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
