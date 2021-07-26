import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoApp from './src/reducers';
import { Provider } from 'react-redux';
import Home from './src/containers/Home';
import { createStackNavigator } from '@react-navigation/stack';
import EditScreen from './src/containers/EditScreen';
import rootSaga from './src/sagas';

const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoApp, applyMiddleware(sagaMiddleware));
const App = () => {
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

sagaMiddleware.run(rootSaga);
export default App;
