import 'react-native-gesture-handler';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './components/LoginScreen_1.jsx';
import CreateNewAccountScreen from './components/CreateNewAccountScreen.jsx';
import ForgotPasswordScreen from './components/ForgotPasswordScreen.jsx';
import MainApp from './components/MainApp.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <PaperProvider>
        <NavigationContainer>

          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateNewAccountScreen}
              options={{title: 'Create New Account'}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{title: 'Reset Password'}}
            />
        
            <Stack.Screen
              name="MainApp"
              component={MainApp}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
};

export default App;
