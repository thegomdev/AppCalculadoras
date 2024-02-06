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

                        <View style={styles.linha1CDuplo}>
                            <TouchableOpacity style={styles.t1cDuplo}>
                                <Text style={styles.text1C}>AC</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.linha1C}>
                            <TouchableOpacity style={styles.t1c}>
                                <Text style={styles.text1C}>%</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha1Div}>
                            <TouchableOpacity style={styles.t1c}>
                                <Text style={styles.textDiv}>÷</Text>
                            </TouchableOpacity>
                        </View>
                    </View>




                    {/* Linha 2 */}
                    <View style={styles.linha2}>

                        <View style={styles.linha2C}>
                            <TouchableOpacity style={styles.t2c}>
                                <Text style={styles.text2C}>7</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha2C}>
                            <TouchableOpacity style={styles.t2c}>
                                <Text style={styles.text2C}>8</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.linha2C}>
                            <TouchableOpacity style={styles.t2c}>
                                <Text style={styles.text2C}>9</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha2Div}>
                            <TouchableOpacity style={styles.t2c}>
                                <Text style={styles.textDiv}>x</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Linha 3 */}
                    <View style={styles.linha3}>

                        <View style={styles.linha3C}>
                            <TouchableOpacity style={styles.t3c}>
                                <Text style={styles.text3C}>4</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha3C}>
                            <TouchableOpacity style={styles.t3c}>
                                <Text style={styles.text3C}>5</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.linha3C}>
                            <TouchableOpacity style={styles.t3c}>
                                <Text style={styles.text3C}>6</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha3Div}>
                            <TouchableOpacity style={styles.t3c}>
                                <Text style={styles.textDiv}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                    {/* Linha 4 */}
                    <View style={styles.linha4}>

                        <View style={styles.linha4C}>
                            <TouchableOpacity style={styles.t4c}>
                                <Text style={styles.text4C}>1</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha4C}>
                            <TouchableOpacity style={styles.t4c}>
                                <Text style={styles.text4C}>2</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.linha4C}>
                            <TouchableOpacity style={styles.t4c}>
                                <Text style={styles.text4C}>3</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha4Div}>
                            <TouchableOpacity style={styles.t4c}>
                                <Text style={styles.textDiv}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Linha 5 */}
                    <View style={styles.linha5}>

                        <View style={styles.linha5CDuplo}>
                            <TouchableOpacity style={styles.t5cDuplo}>
                                <Text style={styles.text5C}>0</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={styles.linha5C}>
                            <TouchableOpacity style={styles.t5c}>
                                <Text style={styles.text5C}>,</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.linha5Div}>
                            <TouchableOpacity style={styles.t5c}>
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
        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: 35,
    },

    result: {
        height: '25%',
        backgroundColor: '#0000',
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
    },

    resultText: {
        color: '#FFF',
        fontSize: 60,
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
