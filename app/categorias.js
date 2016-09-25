import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

class Categorias extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>
          Navegando a la segunda vista
        </Text>
        <CustomComponent message="Con aptitud" />
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
