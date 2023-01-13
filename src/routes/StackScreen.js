import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screen/CreateTest';
import SelectChaptersTopics from '../Screen/SelectChaptersTopics';
import ChaptersAndTopics from '../Screen/ChaptersAndTopics';
import ScrollHorizontalScreen from '../Screen/ScrollHorizontalScreen';

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SelectChaptersTopics"
        component={SelectChaptersTopics}
        options={{headerShown: false, title: 'Select Chapters and Topics'}}
      />

      <Stack.Screen
        name="ChaptersAndTopics"
        component={ChaptersAndTopics}
        options={{headerShown: false, title: 'Chapters and Topics only'}}
      />

      <Stack.Screen
        name="ScrollHorizontalScreen"
        component={ScrollHorizontalScreen}
        options={{headerShown: false, title: 'ScrollHorizontalScreen'}}
      />
    </Stack.Navigator>
  );
}

export default StackScreen;
