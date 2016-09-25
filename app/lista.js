import React, { Component } from 'react';

import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableHighlight
} from 'react-native';

class Listar extends Component {

    onButtonPress() {
        this.props.navigator.push({
            id: 'Categorias'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.largeText}>Hice mi primer vista y tiene un boton</Text>
                <TouchableHighlight
                    onPress={this.onButtonPress.bind(this)} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>Esto no hace nada</Text>
                </TouchableHighlight>
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
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: "#3fb0ac"
    },	
    buttonText: {
        flex: 1,
        fontFamily: 'HelveticaNeue-CondensedBold',
        color: "#dddfd4",
        alignItems: 'center',
    }
});

export default Listar;