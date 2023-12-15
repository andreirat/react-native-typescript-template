import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import RootNavigation from './navigation/RootNavigator';
import store from './store';

const App = () => {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Provider store={store}>
            <RootNavigation />
          </Provider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
