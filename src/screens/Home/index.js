import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>


      <View style={styles.top}>
      <Text style={styles.text1}>Calculos</Text>
      <Text style={styles.text1}>GomDEV</Text>
      <Image
          source={require('../../img/logo.png')}
          style={{ width: 200, height: 200, marginTop: 1 }}
        />
      </View>
      

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

  top: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 30,
  },

  text1: {
    fontSize: 30,
    fontWeight: 'bold',

  },

  botoes: {
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
  },

  botS: {
    width: '50%',
    borderRadius: 5,
    backgroundColor: '#A020F0',
    height: 50,
    marginBottom: 15,
  },

  botText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 25
  },
  

});

export default Home;
