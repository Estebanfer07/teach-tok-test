import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/Routes/navigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
