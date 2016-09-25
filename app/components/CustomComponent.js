import React, {
    PropTypes
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

class CustomComponent extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.attitude}>
            {
              this.props.message              
            }
          </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({

});

export default CustomComponent;
