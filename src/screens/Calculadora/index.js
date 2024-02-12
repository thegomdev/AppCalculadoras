import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Calculadora = () => {
    const navigation = useNavigation();
    const [exibir, setExibir] = useState('');

    // const para ver o resultado, caso clicar em algum numero, ele vai fazer um novo calculo.
    const [resultadoExibido, setResultadoExibido] = useState(false);


    // Ao clicar no número ele adiciona o numero adicionado conforme a função.
    const pressionar = (numero) => {
        if (resultadoExibido) {
            setExibir(numero);
            setResultadoExibido(false);
        } else {
            // Verifica se o botão ponto (.) foi pressionado e se não tem ponto na expressão atual.
            if (numero === '.' && !exibir.includes('.')) {
                // Se não haver ponto e a expressão não estiver vazia, adiciona o ponto.
                setExibir((exibirAnterior) => exibirAnterior !== '' ? exibirAnterior + numero : '0.');
            } else {
                // Adiciona o numero ou ponto normalmente.
                setExibir((exibirAnterior) => exibirAnterior + numero);
            }
        }
    };



    // Limpar calc.
    const limpar = () => {
        setExibir('');
        setResultadoExibido(false);
    };


    // Usando o operador.
    const usarOperador = (operador) => {
        // Verifica se o ultimo caractere é um operador.
        const ultimoOperador = exibir.slice(-1);
        if (['+', '-', '*', '/'].includes(ultimoOperador)) {
            // Substitui o operador anterior.
            setExibir((exibirAnterior) => exibirAnterior.slice(0, -1) + operador);
        } else {
            // Adiciona o operador normalmente.
            setExibir((exibirAnterior) => exibirAnterior + operador);
        }
        setResultadoExibido(false);
    };

    // Exibir o resultado.
    const resultadoFinal = () => {
        try {
            const resultado = eval(exibir);
            const resultadoFormatado = Number(resultado.toFixed(11)).toLocaleString();
            setExibir(resultadoFormatado);
            setResultadoExibido(true);
        } catch (erro) {
            setExibir('Erro');
            setResultadoExibido(true);
        }
    };



    return (
        <View style={styles.container}>

            <View style={styles.top}>
            <TouchableOpacity style={styles.voltarTop}
            onPress={() => navigation.navigate('Home')}>
            <Feather name="arrow-left" size={35} color="#A020F0" />
            </TouchableOpacity>
            <Text style={styles.textTop}>Calculadora</Text>
            </View>


            {/* Estrutura da calculaora inteira */}
            <View style={styles.calc}>

                {/* Estrutura do resultado */}
                <View style={styles.result}>
                    <Text style={styles.resultText}>{exibir || '0'}</Text>
                </View>

                {/* Estrutura das funções */}
                <View style={styles.functions}>

                    {/* Linha 1 */}
                    <View style={styles.linha1}>

                        <View style={styles.linha1CDuplo}>
                            <TouchableOpacity style={styles.t1cDuplo} onPress={() => limpar()}>
                                <Text style={styles.text1C}>Clear</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.linha1C}>
                            <TouchableOpacity style={styles.t1c} onPress={() => usarOperador('%')}>
                                <Text style={styles.text1C}>%</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha1Div}>
                            <TouchableOpacity style={styles.t1c} onPress={() => usarOperador('/')}>
                                <Text style={styles.textDiv}>÷</Text>
                            </TouchableOpacity>
                        </View>
                    </View>




                    {/* Linha 2 */}
                    <View style={styles.linha2}>

                        <View style={styles.linha2C}>
                            <TouchableOpacity style={styles.t2c} onPress={() => pressionar('7')}>
                                <Text style={styles.text2C}>7</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha2C}>
                            <TouchableOpacity style={styles.t2c} onPress={() => pressionar('8')}>
                                <Text style={styles.text2C}>8</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.linha2C}>
                            <TouchableOpacity style={styles.t2c} onPress={() => pressionar('9')}>
                                <Text style={styles.text2C}>9</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha2Div}>
                            <TouchableOpacity style={styles.t2c} onPress={() => usarOperador('*')}>
                                <Text style={styles.textDiv}>x</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Linha 3 */}
                    <View style={styles.linha3}>

                        <View style={styles.linha3C}>
                            <TouchableOpacity style={styles.t3c} onPress={() => pressionar('4')}>
                                <Text style={styles.text3C}>4</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha3C}>
                            <TouchableOpacity style={styles.t3c} onPress={() => pressionar('5')}>
                                <Text style={styles.text3C}>5</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.linha3C}>
                            <TouchableOpacity style={styles.t3c} onPress={() => pressionar('6')}>
                                <Text style={styles.text3C}>6</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha3Div}>
                            <TouchableOpacity style={styles.t3c} onPress={() => usarOperador('-')}>
                                <Text style={styles.textDiv}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                    {/* Linha 4 */}
                    <View style={styles.linha4}>

                        <View style={styles.linha4C}>
                            <TouchableOpacity style={styles.t4c} onPress={() => pressionar('1')}>
                                <Text style={styles.text4C}>1</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha4C}>
                            <TouchableOpacity style={styles.t4c} onPress={() => pressionar('2')}>
                                <Text style={styles.text4C}>2</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.linha4C}>
                            <TouchableOpacity style={styles.t4c} onPress={() => pressionar('3')}>
                                <Text style={styles.text4C}>3</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha4Div}>
                            <TouchableOpacity style={styles.t4c} onPress={() => usarOperador('+')}>
                                <Text style={styles.textDiv}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Linha 5 */}
                    <View style={styles.linha5}>

                        <View style={styles.linha5CDuplo}>
                            <TouchableOpacity style={styles.t5cDuplo} onPress={() => pressionar('0')}>
                                <Text style={styles.text5C}>0</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={styles.linha5C}>
                            <TouchableOpacity style={styles.t5c} onPress={() => pressionar('.')}>
                                <Text style={styles.text5C}>,</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha5Div}>
                            <TouchableOpacity style={styles.t5c} onPress={() => resultadoFinal()}>
                                <Text style={styles.textDiv}>=</Text>
                            </TouchableOpacity>
                        </View>
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
        backgroundColor: '#FFF'
    },

    top: {
        marginTop: 40,
        width: '100%',
        backgroundColor: '#FFF',
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
        color: '#A020F0',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    calc: {
        width: '100%',
        alignItems: 'center',
        height: '95%',
        backgroundColor: '#000000',
    },

    result: {
        height: '25%',
        backgroundColor: '#0000',
        width: '95%',
        alignItems: 'center',
        justifyContent: "center",
    },

    resultText: {
        color: '#FFF',
        fontSize: 70,
    },


    // Linha 1


    linha1: {
        flexDirection: "row",
        height: 95,
        justifyContent: "center",
        alignItems: "center",
    },

    linha1C: {
        backgroundColor: '#A020F0',
        padding: 10,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linha1CDuplo: {
        backgroundColor: '#A020F0',
        padding: 15,
        margin: 8,
        width: '44%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linha1Div: {
        backgroundColor: '#A020F0',
        padding: 10,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    t1cDuplo: {
        width: '122%',
        height: '157%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },

    t1c: {
        width: '145%',
        height: '157%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },

    text1C: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },

    textDiv: {
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },



    // Linha 2

    linha2: {
        flexDirection: "row",
        height: 95,
        justifyContent: "center",
        alignItems: "center",
    },

    linha2C: {
        backgroundColor: '#363636',
        padding: 10,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linha2Div: {
        backgroundColor: '#A020F0',
        padding: 10,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    t2c: {
        width: '131%',
        height: '131%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },

    text2C: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },


    // Linha 3

    linha3: {
        flexDirection: "row",
        height: 95,
        justifyContent: "center",
        alignItems: "center",
    },

    linha3C: {
        backgroundColor: '#363636',
        padding: 10,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linha3Div: {
        backgroundColor: '#A020F0',
        padding: 10,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    t3c: {
        width: '131%',
        height: '131%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },

    text3C: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },



    // Linha 4

    linha4: {
        flexDirection: "row",
        height: 95,
        justifyContent: "center",
        alignItems: "center",
    },

    linha4C: {
        backgroundColor: '#363636',
        padding: 10,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linha4Div: {
        backgroundColor: '#A020F0',
        padding: 10,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    t4c: {
        width: '131%',
        height: '131%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },

    text4C: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },


    // Linha 5

    linha5: {
        flexDirection: "row",
        height: 95,
        justifyContent: "center",
        alignItems: "center",
    },

    linha5CDuplo: {
        backgroundColor: '#363636',
        padding: 15,
        margin: 8,
        width: '44%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linha5C: {
        backgroundColor: '#363636',
        padding: 15,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linha5Div: {
        backgroundColor: '#A020F0',
        padding: 15,
        margin: 8,
        width: '20%',
        height: '85%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    t5cDuplo: {
        width: '122%',
        height: '157%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },

    t5c: {
        width: '164%',
        height: '157%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    },

    text5C: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },




});

export default Calculadora;
