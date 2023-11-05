import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollabelQuestionList} from '../components/organisms/scrollable-questions-list/scrollable-question-list';

const Tab = createBottomTabNavigator();
export const Navigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: '#000'},
        tabBarActiveTintColor: 'white',
        tabBarIcon: ({color}) => {
          let icon!: string;
          switch (route.name) {
            case 'Home':
              icon = 'home';
              break;
            case 'Discover':
              icon = 'compass';
              break;
            case 'Activity':
              icon = 'stopwatch';
              break;
            case 'Bookmarks':
              icon = 'bookmark';
              break;
            case 'Profile':
              icon = 'person';
              break;
          }
          return <Icon name={icon} size={30} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={ScrollabelQuestionList}
      />
      <Tab.Screen
        name="Discover"
        options={{headerShown: false}}
        component={ScrollabelQuestionList}
      />
      <Tab.Screen
        name="Activity"
        options={{headerShown: false}}
        component={ScrollabelQuestionList}
      />
      <Tab.Screen
        name="Bookmarks"
        options={{headerShown: false}}
        component={ScrollabelQuestionList}
      />
      <Tab.Screen
        name="Profile"
        options={{headerShown: false}}
        component={ScrollabelQuestionList}
      />
    </Tab.Navigator>
  );
};
