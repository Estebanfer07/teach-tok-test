import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {ScrollabelQuestionList} from './src/components/organisms/scrollable-questions-list/scrollable-question-list';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <ScrollabelQuestionList />
    </View>
  );
};

export default App;
