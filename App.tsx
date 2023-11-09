import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screen/Homescreen';
import Signup from './screen/Signup';
import Login from './screen/Login';

import Forgot from './screen/Forgot';
import Check from './screen/Check';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Check" component={Check} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;