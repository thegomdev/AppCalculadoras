import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Home
import Home from './src/screens/Home';
// Calculadora
import Calculadora from './src/screens/Calculadora';

// Calculadora Juros Compostos
import JurosCompostos from './src/screens/JurosCompostos';
import ResultadoJurosCompostos from './src/screens/JurosCompostos/ResultadoJurosCompostos';

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
            headerShown: false,
          }}
        />


        {/* Tela Calculadora */}
        <Stack.Screen
          name="Calculadora"
          component={Calculadora}
          options={{
            headerShown: false,
          }}
        />


        {/* Tela Calculadora Juros Compostos */}
        <Stack.Screen
          name="JurosCompostos"
          component={JurosCompostos}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ResultadoJurosCompostos"
          component={ResultadoJurosCompostos}
          options={{
            headerShown: false,
          }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
