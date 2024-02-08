import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const JurosCompostos = () => {
  const navigation = useNavigation();
  const [valorInicial, setValorInicial] = useState("");
  const [valorMensal, setValorMensal] = useState("");


  // função para limpar.
  const limpar = () => {
    setValorInicial('');
    setValorMensal('');
  };






  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <TouchableOpacity style={styles.voltarTop}
          onPress={() => navigation.navigate('Home')}>
          <Feather name="corner-down-left" size={35} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.textTop}>Calculadora</Text>
      </View>


      <View style={styles.main}>
        <Text style={styles.text}>Simulador de Juros Compostos</Text>


        {/* Valor Inicial */}
        <View style={styles.inicial}>
          <Text style={styles.titulo}>Valor inicial</Text>

          <View style={styles.input}>
            <View style={styles.crifrao}>
              <Feather name="dollar-sign" size={25} color="#A020F0" style={styles.crifrao2} />
            </View>

            <TextInput style={styles.textImput}
              placeholder="00,00"
              value={valorInicial}
              onChangeText={(Number) => setValorInicial(Number)}
              maxLength={15}
              placeholderTextColor="#A020F0"
            />
          </View>

        </View>


        {/* Valor Mensal */}
        <View style={styles.inicial}>
          <Text style={styles.titulo}>Valor mensal</Text>

          <View style={styles.input}>
            <View style={styles.crifrao}>
              <Feather name="dollar-sign" size={25} color="#A020F0" style={styles.crifrao2} />
            </View>

            <TextInput style={styles.textImput}
              placeholder="00,00"
              value={valorMensal}
              onChangeText={(Number) => setValorInicial(Number)}
              maxLength={15}
              placeholderTextColor="#A020F0"
            />
          </View>

        </View>

        {/* Taxa de juros */}
        <View style={styles.inicial}>
          <Text style={styles.titulo}>Taxa de juros</Text>
        </View>

        {/* Período */}
        <View style={styles.inicial}>
          <Text style={styles.titulo}>Período</Text>
        </View>

        <View style={styles.botoes}>

          <TouchableOpacity style={styles.calcular}>
            <Text style={styles.calcularText}>Calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.limpar} onPress={() => limpar()}>
            <Text>Limpar</Text>
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
    backgroundColor: '#A020F0'
  },

  top: {
    marginTop: 40,
    width: '100%',
    height: '5%',
    flexDirection: "row",
    alignItems: 'center',
  },

  voltarTop: {
    marginLeft: 10,
    marginRight: 95,
  },

  textTop: {
    fontSize: 30,
    color: '#FFF',
  },

  main: {
    width: '90%',
    backgroundColor: '#F8F8FF',
    marginTop: 50,
    padding: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#A020F0',
  },

  titulo: {
    fontWeight: 'bold',
    marginLeft: 20,
  },

  input: {
    flexDirection: "row",
    justifyContent: "center",
  },

  crifrao: {
    borderWidth: 1,
    padding: 3,
  },

  crifrao2: {
    marginTop: 3,
  },

  textImput: {
    borderWidth: 1,
    width: '80%',
    fontSize: 18,
    padding: 10,
    height: 40
  },

  botoes: {
    flexDirection: 'row',
    width: '100%',

  },

  calcular: {
    backgroundColor: '#A020F0',
    width: '35%',
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    padding: 4,
  },

  calcularText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  limpar: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },

});

export default JurosCompostos;
