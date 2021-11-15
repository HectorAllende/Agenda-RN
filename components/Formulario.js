import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableHighlight } from 'react-native'


const Formulario = ({ tareas, setTareas, setMostrarForm }) => {

    const [tarea, guardarTarea] = useState('')

    const [alerta, mostrarAlerta] = useState(false)


    const crearTarea = () => {
        if (tarea.trim() === '') {
            mostrarAlerta(true)
            return
        }
        mostrarAlerta(false)

        const nueva = { tarea }
        nueva.id = Date.now()

        const nuevaTarea = [...tareas, nueva]

        setTareas(nuevaTarea)
        setMostrarForm(false)

        guardarTarea('')
    }


    return (
        <ScrollView style={styles.formulario}>
            {alerta ? <Text>Agregue una tarea</Text> : null}
            <View>
                <Text style={styles.label}>Tarea:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarTarea(texto)}
                />
            </View>

            <View>
                <TouchableHighlight onPress={() => crearTarea()} style={styles.btnSubmit}>
                    <Text style={styles.btnTextoSubmit}>Agregar Tarea</Text>
                </TouchableHighlight>
            </View>



        </ScrollView>


    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fcf4fb',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        color: '#644c20',
        fontFamily: 'Roboto'

    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#665134',
        marginVertical: 10
    },
    btnTextoSubmit: {
        color: '#fcf4fb',
        fontWeight: 'bold',
        textAlign: 'center'

    }
})

export default Formulario;