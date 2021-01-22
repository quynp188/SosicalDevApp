import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home/Home';
import SignInScreen from './screens/auth/SignIn';
import SignUpScreen from './screens/auth/SignUp';
import AuthLoading from './screens/auth/AuthLoading';
import store from './redux-learn/sagas/store';
import { Provider } from 'react-redux';
import EditUserInfo from './screens/devInfo/DevInfoEdit';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode={false}>
          <Stack.Screen name="editUserInfo" component={EditUserInfo} />      
          <Stack.Screen name="authLoading" component={AuthLoading} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
