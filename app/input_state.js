import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput
} from 'react-native';

class InputState extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fase: 'Liquido',
      temperatura: '84',
      text: ''
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>
          {
            this.state.fase
          }
        </Text>
        <Text style={styles.smallText}>
          {
            this.state.text
          }
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  smallText: {
    flex: 1,
    fontSize: 26,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 20,
    color: "#173e43"
  },
  input: {
    height: 40,
    borderColor: '#173e43',
    borderWidth: 2,
    textAlign: 'center'
  }
});

export default InputState;
