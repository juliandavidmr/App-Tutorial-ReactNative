import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import CustomComponent from './components/CustomComponent.js'

class Categorias extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>
          Navegando a la segunda vista
        </Text>
        <CustomComponent
          message="Con Amor"
          objects={{
            "Objeto1": "Este es el objeto 1",
            "Objeto2": "Este es el objeto 2"
          }}
          array={[
            "Item 1",
            "Item 2",
            "Item 3"
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#dddfd4'
  },
  largeText: {
    flex: 1,
    fontSize: 52,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: "#173e43"
  }
});

export default Categorias;
