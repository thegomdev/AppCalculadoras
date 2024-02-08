import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Home
import Home from './src/screens/Home';
// Calculadora
import Calculadora from './src/screens/Calculadora';

// Calculadora Juros Compostos
import JurosCompostos from './src/screens/JurosCompostos';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>


        {/* Tela Home */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela inicial',
            headerShown: false,
          }}
        />


        {/* Tela Calculadora */}
        <Stack.Screen
          name="Calculadora"
          component={Calculadora}
          options={{
            title: 'Tela inicial',
            headerShown: false,
          }}
        />


        {/* Tela Calculadora Juros Compostos */}
        <Stack.Screen
          name="JurosCompostos"
          component={JurosCompostos}
          options={{
            title: 'Tela inicial',
            headerShown: false,
          }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
