import { View, Text } from 'react-native';
import React from 'react';
import LoginPage from './src/screens/LoginPage';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const App = () => {
  
  const Stack = createNativeStackNavigator();
  
  
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name='login' component={LoginPage}/>
      <Stack.Screen name='home' component={Home} />

    </Stack.Navigator>

   </NavigationContainer>


  )
}

export default App