import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useFonts } from 'expo-font';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';


export default function App() {


  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Light.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  })

  const init = JSON.parse(localStorage.getItem('tareas')) || []

  const [tareas, setTareas] = useState(init)
  const [mostrarForm, setMostrarForm] = useState(false)

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  if (!loaded) {
    return null;
  }

  const eliminarTarea = id => {
    const tareasFiltradas = tareas.filter(el => el.id !== id)
    setTareas(tareasFiltradas)
  }

  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda personal</Text>

      <View>
        <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}>{mostrarForm ? 'Ver Tareas' : 'Crear Nueva tarea'}</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.contenido}>

        {mostrarForm ? (
          <>
            <Text style={styles.titulo}>Crear nueva Tarea</Text>
            <Formulario
              tareas={tareas}
              setTareas={setTareas}
              setMostrarForm={setMostrarForm}
            />
          </>
        ) :
          <>

            <Text style={styles.titulo}>{tareas.length > 0 ? 'Revisa tus tareas' : 'No hay tareas'}</Text>
            <FlatList
              style={styles.listado}
              data={tareas}
              renderItem={({ item }) => <ListaTareas item={item} eliminarTarea={eliminarTarea} />}

            />
          </>
        }
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##cda762',
  },
  titulo: {
    color: '#644c20',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto'

  },
  contenido: {
    flex: 1,
    marginHorizontal: '2,5%'
  },
  listado: {
    flex: 1
  },
  textoMostrarForm: {
    color: '#fcf4fb',
    fontWeight: 'bold',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'RobotoBold'
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#cda762',
    marginVertical: 10,

  }
});
