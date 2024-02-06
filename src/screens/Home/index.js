// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>

      <Text style={styles.text1}>Bem-vindo à Tela Inicial!</Text>

      <View style={styles.botoes}>

        <View style={styles.botS}>
        <TouchableOpacity onPress={() => navigation.navigate('Calculadora')}>
          <Text style={styles.botText}>Calculadora</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.botS}>
        <TouchableOpacity onPress={() => navigation.navigate('JurosCompostos')}>
          <Text style={styles.botText}>Juros Compostos</Text>
        </TouchableOpacity>
        </View>



      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
  },

  botoes: {
    alignItems: 'center',
    width: '100%',
    marginTop: 100,
  },

  botS: {
    width: '35%',
    borderRadius: 5,
    backgroundColor: '#A020F0',
    height: 40,
    marginBottom: 15,
  },

  botText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
  },
  

});

export default Home;
