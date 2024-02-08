import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const JurosCompostos = () => {
  const navigation = useNavigation();
  const [valorInicial, setValorInicial] = useState("");
  const [valorMensal, setValorMensal] = useState("");


    //  const para pegar a taxa de juros.
    const [juros, setJuros] = useState('');

    // const para pegar a taxa de juros, se é mensal ou anual.
    const [opcaoJuros, setOpcaoJuros] = useState('Mensal');

  //  const para pegar o valor do periodo.
  const [periodo, setPeriodo] = useState('');

  // const para pegar o periodo, se é mensal ou anual.
  const [opcaoPeriodo, setOpcaoPeriodo] = useState('Mes(es)');


  


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
        <Text style={styles.textTop}>Simulador de Juros Compostos</Text>
      </View>


      <View style={styles.main}>

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

          <View style={styles.inputPeriodo}>
            <TextInput style={styles.textImputPeriodo}
              placeholder="0"
              value={juros}
              onChangeText={(Number) => setValorInicial(Number)}
              maxLength={15}
              placeholderTextColor="#A020F0"/>
              <View style={styles.pickerPeriodo}>
              <Picker style={{ color: '#FFF'}}
              selectedValue={opcaoJuros}
              onValueChange={(itemValue) => setOpcaoJuros(itemValue)}>
              <Picker.Item label="Mensal" value="Mensal" />
              <Picker.Item label="Anual" value="Anual" />
            </Picker>
              </View>

          </View>

          
        </View>

        {/* Período */}
        <View style={styles.inicial}>

          <Text style={styles.titulo}>Período</Text>

          <View style={styles.inputPeriodo}>
            <TextInput style={styles.textImputPeriodo}
              placeholder="0"
              value={periodo}
              onChangeText={(Number) => setValorInicial(Number)}
              maxLength={15}
              placeholderTextColor="#A020F0"/>
              <View style={styles.pickerPeriodo}>
              <Picker style={{ color: '#FFF'}}
              selectedValue={opcaoPeriodo}
              onValueChange={(itemValue) => setOpcaoPeriodo(itemValue)}>
              <Picker.Item label="Meses" value="Mensal" />
              <Picker.Item label="Anos" value="Anual" />
            </Picker>
              </View>

          </View>

        </View>


        {/* Botões */}
        <View style={styles.botoes}>

          <TouchableOpacity
          style={styles.calcular}
          onPress={() => navigation.navigate('ResultadoJurosCompostos')}>
            <Text style={styles.calcularText}>Calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.limpar} onPress={() => limpar()}>
            <Text style={styles.voltarText} >Limpar</Text>
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
    marginRight: '3%',
  },

  textTop: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },

  main: {
    width: '90%',
    backgroundColor: '#F8F8FF',
    marginTop: 50,
    padding: 10,
  },

  inicial: {
    marginBottom: 15,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#A020F0',
    marginLeft: '8.5%',
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

  textImputPeriodo: {
    borderWidth: 1,
    width: '50%',
    fontSize: 18,
    padding: 10,
    height: 40,
  },

  inputPeriodo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },

  pickerPeriodo: {
    backgroundColor: '#A020F0',
    width: '40%',
    height: '76%',
    color: '#FFF',
  },

  botoes: {
    width: '100%',
    marginTop: 20,
  },

  calcular: {
    backgroundColor: '#A020F0',
    width: '40%',
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    padding: 12,
  },

  calcularText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  limpar: {
    position: 'absolute',
    right: 25,
    bottom: 10,
  },

  voltarText: {
    color: '#000',
    fontWeight: 'bold',
  },

});

export default JurosCompostos;
