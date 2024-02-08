import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResultadoJurosCompostos = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>

      <View style={styles.main}>
      <Text style={styles.text1}>Resultado</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  main: {
    marginTop: 50,
  },


});

export default ResultadoJurosCompostos;
