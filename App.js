import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import card from './src/components/card';
import loginPage from './src/components/loginPage';
import registerPage from './src/components/registerPage';
import esqueciPage from './src/components/esqueci';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="login" component={loginPage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="registrar" component={registerPage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="esqueci" component={esqueciPage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="dashboard" component={card} options={{headerShown: false}}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#423e3c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
