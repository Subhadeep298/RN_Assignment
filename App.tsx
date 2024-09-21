import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View,KeyboardAvoidingView, Platform  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchHeader from './components/Header';
import Main from './screens/Main';
import Footer from './components/Footer';
import Login from './screens/Login';
import Register from './screens/Register'
import colors from './utils/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>     
    <NavigationContainer>
        <SafeAreaView>
        
        <StatusBar backgroundColor="#b27cf2" />
        <SearchHeader />
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false, 
          }}
        >
          <Stack.Screen name="Welcome" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
        <Footer />

      </SafeAreaView>

    </NavigationContainer>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardAvoidingView: {
  },
});
