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
          <Text style={styles.attitude}>
            {
              this.props.objects.Objeto1
            }
          </Text>
          <Text style={styles.attitude}>
            {
              this.props.array.map(item => {
                return item;
              })
            }
          </Text>
        </View>
      );
    }
}

CustomComponent.propTypes = {
  message: React.PropTypes.string.isRequired,
  objects: React.PropTypes.object.isRequired,
  array: React.PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  attitude: {
    fontStyle: 'italic',
    fontFamily: 'Georgia',
    fontSize: 26,
    color: '#173e43'
  }
});

export default CustomComponent;
