/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Listar from './app/lista';
import Categorias from './app/categorias.js';
import InputState from './app/input_state.js';

class App extends Component {

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;

    switch (route.id) {
      case 'Listar':
        return (
          <Listar navigator={navigator} title="Listar" />
        )
      case 'Categorias':
        return (
          <Categorias navigator={navigator} title="Categorias" />
        )
      case 'InputState':
        return (
          <InputState />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute = {{
          id: 'Listar'
        }}
        renderScene = {
          this.navigatorRenderScene
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  largeText: {
    fontSize: 52,
    fontFamily: "HelveticaNeue-CondensedBold",
    paddingLeft: 20,
    paddingRight: 20,
    color: "#173e43"
  }
});

AppRegistry.registerComponent('App', () => App);
