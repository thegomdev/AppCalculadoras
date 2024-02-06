// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculadora = () => {
    return (
        <View style={styles.container}>


            {/* Estrutura da calculaora inteira */}
            <View style={styles.calc}>

                {/* Estrutura do resultado */}
                <View style={styles.result}>
                    <Text style={styles.resultText}>0</Text>
                </View>

                {/* Estrutura das funções */}
                <View style={styles.functions}>

                    {/* Linha 1 */}
                    <View style={styles.linha1}>

                        <View style={styles.linha1C}>
                            <Text style={styles.text1C}>AC</Text>
                        </View>

                        <View style={styles.linha1C}>
                            <Text style={styles.text1C}>+/-</Text>
                        </View>

                        <View style={styles.linha1C}>
                            <Text style={styles.text1C}>%</Text>
                        </View>

                        <View style={styles.linha1C}>
                            <TouchableOpacity style={styles.t1c}>
                            <Text style={styles.textDiv}>÷</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    calc: {
        width: '95%',
        alignItems: 'center',
        height: '90%',
        backgroundColor: '#000000',
    },

    result: {
        height: '25%',
        backgroundColor: '#363636',
        width: '100%',
        alignItems: 'center',
    },

    resultText: {
        color: '#FFF',
        fontSize: 50,
    },


    linha1: {
        flexDirection: "row",
        height: 95,
        justifyContent: "center",
        alignItems: "center",
    },

    linha1C: {
        backgroundColor: '#A9A9A9',
        padding: 10,
        margin: 5,
        width: '22%',
        height: '90%',
        borderRadius: 200 ,
        alignItems: 'center',
        justifyContent: 'center',
    },

    t1c: {
        width: '130%',
        height: '131%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
        backgroundColor: '#FF4500'
    },

    text1C: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textDiv: {
        fontSize: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },


});

export default Calculadora;
