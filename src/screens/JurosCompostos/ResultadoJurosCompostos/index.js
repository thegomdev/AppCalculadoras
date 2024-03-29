import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const ResultadoJurosCompostos = ({ route }) => {
  const navigation = useNavigation();
  const { valorInicial, valorMensal, taxaJuros, totalPeriodo, montante, valorTotalInvestido, jurosTotais, opcaoJuros } = route.params;

  const voltarParaCalculo = () => {
    navigation.navigate('JurosCompostos');
  };

  return (
    <View style={styles.container}>


      <View style={styles.top}>
        <View style={styles.newCalculo}>
          <TouchableOpacity style={styles.newCalculoT} onPress={() => voltarParaCalculo()}>
            <Feather name="arrow-left" size={13} color="#FFF" />
            <Text style={styles.tituloNewCalc}>FAZER OUTRO CÁLCULO</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.main}>


        {/* Calculos dentro do main */}
        <View style={styles.calc}>
          <Text style={styles.textCalculo}>Meu cálculo</Text>


          <View style={styles.calculos}>
            

            <View style={styles.valores}>

              <View style={styles.calcInfo}>
                <Text>Valor Inicial</Text>
                <Text>{valorInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
              </View>

              <View style={styles.calcInfo}>
                <Text>Valor Mensal</Text>
                <Text>{valorMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
              </View>

            </View>


            <View style={styles.valores}>

              <View style={styles.calcInfo}>
                <Text>Taxa de Juros</Text>
                <Text>{(taxaJuros * 100).toFixed(2)}% ao {opcaoJuros === 'Mensal' ? 'mês' : 'ano'}</Text>
              </View>

              <View style={styles.calcInfo}>
                <Text>Perído em</Text>
                <Text>{totalPeriodo} {totalPeriodo === 1 ? 'Mês' : 'Meses'}</Text>
              </View>

            </View>


          </View>

        </View>

        {/* Resultado dentro do main */}

        <View style={styles.result}>

          <Text style={styles.resultadoText}>Resultado</Text>

          <View style={styles.valorTotal}>
        <Text>Valor total final:</Text>
        <Text style={{ color: '#A020F0', fontSize: 35, marginTop: 10, }}>R$ {montante.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
      </View>
      <View style={styles.valorTotal}>
        <Text>Valor total investido:</Text>
        <Text style={{ color: '#3862cb', fontSize: 35, marginTop: 10, }}>R$ {valorTotalInvestido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
      </View>
      <View style={styles.valorTotal}>
        <Text>Total em juros:</Text>
        <Text style={{ color: '#456b1b', fontSize: 35, marginTop: 10, }}> R$ {jurosTotais.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
      </View>

        </View>






      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',

  },

  top: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
  },

  newCalculo: {
    width: '100%',
    height: 35,
    alignItems: 'center',
  },

  newCalculoT: {
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#A020F0',
    borderRadius: 7,
    justifyContent: 'center'
  },

  tituloNewCalc: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
  },

  main: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },

  calc: {
    width: '90%',
    alignItems: 'center',
  },

  textCalculo: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  calculos: {
    width: '100%',
    alignItems: 'center',
  },

  valores: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 70,
  },

  calcInfo: {
    width: '40%',
    backgroundColor: '#FFFF',
    height: 45,
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
    borderWidth: 1,
    borderColor: '#808080',
  },

  result: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },

  resultadoText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  valorTotal: {
    width: '80%',
    backgroundColor: '#FFFF',
    margin: 10,
    height: '18%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#808080',
    alignItems: 'center',
    padding: 8,
  },


});

export default ResultadoJurosCompostos;
