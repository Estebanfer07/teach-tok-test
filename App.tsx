import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {ScrollabelQuestionList} from './src/components/organisms/scrollable-questions-list/scrollable-question-list';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {backgroundColor: '#000'},
          tabBarIcon: ({color, focused}) => {
            let icon!: string;
            switch (route.name) {
              case 'Home':
                icon = 'airplane-outline';
                break;
            }
            return <Text>icon</Text>;
          },
        })}>
        <Tab.Screen
          name="Home"
          options={{headerShown: false}}
          component={ScrollabelQuestionList}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
