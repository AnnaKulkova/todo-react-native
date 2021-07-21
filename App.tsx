/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import todoApp from './src/reducers';
import { Provider } from 'react-redux';
import Home from './src/containers/Home';
import { createStackNavigator } from '@react-navigation/stack';
import EditScreen from './src/containers/EditScreen';

const Stack = createStackNavigator();

const App = () => {
  const store = createStore(todoApp);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'To do list' }}
          />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
