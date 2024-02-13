import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';


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
  const [opcaoPeriodo, setOpcaoPeriodo] = useState('Meses');




// função para calcular o montante final, valor total investido e juros totais com base nos valores fornecidos.
const calcularMontante = (valorInicial, valorMensal, taxaJuros, totalPeriodo) => {

  let montante = valorInicial;
  let valorTotalInvestido = valorInicial;

  // loop para simular o crescimento do montante ao longo dos peroodos.
  for (let i = 0; i < totalPeriodo; i++) {
      // atualiza o montante multiplicando pelo fator de crescimento (1 + taxaJuros).
      montante *= 1 + taxaJuros;
      // adiciona o valor mensal ao montante.
      montante += valorMensal;
      // adiciona o valor mensal ao valorTotalInvestido.
      valorTotalInvestido += valorMensal;
  }

  // calcula os juros totais acumulados diminuindo o valor total investido do montante final.
  const jurosTotais = montante - valorTotalInvestido;

  // retorna um objeto contendo montante final, valor total investido e juros totais.
  return { montante, valorTotalInvestido, jurosTotais };
};

// função que utiliza os resultados da função calcularMontante para cálculos adicionais.
const calcularJurosCompostos = () => {
  // verifica se todos os campos estao preenchidos.
  if (!valorInicial || !juros || !periodo) {
      // solta um alerta caso algum campo esteja vazio.
      Alert.alert('Atenção', 'Preencha todos os campos antes de calcular.');
      return; // para a função caso tenha algum campo vazio.
  }

  // converte os valores para parseFloat.
  const valorInicialNum = parseFloat(valorInicial);
  const valorMensalNum = parseFloat(valorMensal);
  const jurosNum = parseFloat(juros);
  const periodoNum = parseFloat(periodo);

  // calcula a taxa de juros com base na opção escolhida ('Mensal' ou 'Anual').
  const taxaJuros = opcaoJuros === 'Mensal' ? jurosNum / 100 : jurosNum / 12 / 100;
  // converte o periodo para meses ou anos com base na opção escolhida ('Meses' ou 'Anos').
  const totalPeriodo = opcaoPeriodo === 'Meses' ? periodoNum : periodoNum * 12;

  // chama a função calcularMontante com os parâmetros calculados e armazena os resultados.
  const { montante, valorTotalInvestido, jurosTotais } = calcularMontante(
      valorInicialNum,
      valorMensalNum,
      taxaJuros,
      totalPeriodo
  );

    // leva os valores e resultado do juros composto para a tela ResultadoJurosCompostos.
    navigation.navigate('ResultadoJurosCompostos', {
      valorInicial: valorInicialNum,
      valorMensal: valorMensalNum,
      taxaJuros,
      totalPeriodo,
      montante,
      valorTotalInvestido,
      jurosTotais,
      opcaoJuros,
    });
  };


  // função para limpar os campos.
  const limpar = () => {
    setValorInicial('');
    setValorMensal('');
    setJuros('');
    setOpcaoJuros('Mensal');
    setPeriodo('');
    setOpcaoPeriodo('Meses');
  };







  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <TouchableOpacity style={styles.voltarTop}
          onPress={() => navigation.navigate('Home')}>
          <Feather name="arrow-left" size={35} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.textTop}>Simulador de Juros Compostos</Text>
      </View>


      <View style={styles.main}>

        {/* Valor Inicial */}
        <View style={styles.inicial}>
          <Text style={styles.titulo}>Valor inicial</Text>

          <View style={styles.input}>
            <View style={styles.cifrao}>
              <Text style={styles.cifrao2}>R$</Text>
            </View>

            <TextInput
              style={styles.textImput}
              placeholder="00,00"
              value={valorInicial}
              onChangeText={(text) => setValorInicial(text)}
              maxLength={15}
              placeholderTextColor="#A020F0"
            />
          </View>

        </View>


        {/* Valor Mensal */}
        <View style={styles.inicial}>
          <Text style={styles.titulo}>Valor mensal</Text>

          <View style={styles.input}>
            <View style={styles.cifrao}>
              <Text style={styles.cifrao2}>R$</Text>
            </View>

            <TextInput style={styles.textImput}
              placeholder="00,00"
              value={valorMensal}
              onChangeText={(text) => setValorMensal(text)}
              maxLength={15}
              placeholderTextColor="#A020F0"
            />
          </View>

        </View>

        {/* Taxa de juros */}
        <View style={styles.inicial}>
          <Text style={styles.titulo}>Taxa de juros</Text>

          <View style={styles.inputPeriodoJuros}>
            <View style={styles.cifrao}>
              <Text style={styles.cifrao2}>%</Text>
            </View>
            <TextInput style={styles.textImputPeriodoJuros}
              placeholder="0"
              value={juros}
              onChangeText={(text) => setJuros(text)}
              maxLength={15}
              placeholderTextColor="#A020F0" />
            <View style={styles.pickerPeriodo}>
              <RNPickerSelect
                style={{
                  inputIOS: styles.rnPicker,
                  inputAndroid: styles.rnPicker,
                }}
                value={opcaoJuros}
                onValueChange={(value) => setOpcaoJuros(value)}
                items={[
                  { label: 'Mensal', value: 'Mensal' },
                  { label: 'Anual', value: 'Anual' },
                ]}
              />
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
              onChangeText={(Number) => setPeriodo(Number)}
              maxLength={15}
              placeholderTextColor="#A020F0" />
            <View style={styles.pickerPeriodo}>
              <RNPickerSelect
                style={{
                  inputIOS: styles.rnPicker,
                  inputAndroid: styles.rnPicker,
                }}
                value={opcaoPeriodo}
                onValueChange={(value) => setOpcaoPeriodo(value)}
                items={[
                  { label: 'Meses', value: 'Meses' },
                  { label: 'Anos', value: 'Anos' },
                ]}
              />
            </View>

          </View>

        </View>


        {/* Botões */}
        <View style={styles.botoes}>

          <TouchableOpacity
            style={styles.calcular}
            onPress={() => calcularJurosCompostos()}>
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
    backgroundColor: '#F8F8FF'
  },

  top: {
    width: '100%',
    height: '10%',
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: '#A020F0'
  },

  voltarTop: {
    marginLeft: 10,
    marginRight: '3%',
    marginTop: 30,
  },

  textTop: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: '8%',
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
    marginLeft: 14,
  },

  input: {
    flexDirection: "row",
    justifyContent: "center",
  },

  cifrao: {
    padding: 3,
    width: '13%',
    alignItems: 'center',
    backgroundColor: '#A020F0',
    height: '100%',
  },

  cifrao2: {
    alignItems: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 5,
  },

  textImput: {
    borderWidth: 1,
    width: '80%',
    fontSize: 18,
    padding: 10,
    height: 40
  },

  textImputPeriodoJuros: {
    borderWidth: 1,
    width: '60%',
    fontSize: 18,
    padding: 10,
    height: 40,
    color: '#A020F0'
  },

  inputPeriodoJuros: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },

  textImputPeriodo: {
    borderWidth: 1,
    width: '73%',
    fontSize: 18,
    padding: 10,
    height: 40,
    color: '#A020F0'
  },

  inputPeriodo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },

  pickerPeriodo: {
    backgroundColor: '#A020F0',
    width: '20%',
    height: '100%',
  },

  rnPicker: {
    color: '#FFF',
    backgroundColor: '#A020F0',
    fontSize: 20,
    textAlign: 'center',
    height: 40,
    borderBlockColor: '#000'
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
    marginLeft: 10,
  },

  calcularText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 3,
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
