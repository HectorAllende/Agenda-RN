import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native'

const ListaTareas = ({item, eliminarTarea}) => {

    const {tarea, id}= item
    return (
        <View style={styles.tarea}>
            <Text style={styles.label}>Tarea:</Text>
            <Text style={styles.texto}>{tarea}</Text>

            <View>
                <TouchableHighlight onPress={()=>eliminarTarea(id)}
                    style={styles.btnEliminar}
                >
                    <Text style={styles.textoEliminar}>Eliminar &times;</Text>

                </TouchableHighlight>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    tarea: {
        backgroundColor:'#fcf4fb',
        borderBottomColor: '#644c20',
        borderStyle:'solid',
        borderBottomWidth:1,
        paddingVertical:20,
        paddingHorizontal:10   

    },
    label:{
        fontWeight:'bold',
        fontSize:19,
        marginTop:20
    },
    texto:{
        fontSize:18
    },
    btnEliminar:{
        padding:5,
        backgroundColor:'#489490',
        marginVertical:10
    },
    textoEliminar:{
        color:'#fcf4fb',
        fontWeight:'bold',
        textAlign:'center'
        
    }
})
 
export default ListaTareas;