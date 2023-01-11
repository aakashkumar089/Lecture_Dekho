import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screen/CreateTest';
import SelectChaptersTopics from '../Screen/SelectChaptersTopics';

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
    </Stack.Navigator>
  );
}

export default StackScreen;
