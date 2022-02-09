/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from './navigation';
import { persistor, store } from './store';
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../tailwind.json';

const Entrypoint = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <TailwindProvider utilities={utilities}>
          <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </TailwindProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default Entrypoint;
