import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class ErrorDisplayScreen extends React.Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>{JSON.stringify(this.props.info, null, 2)}</Text>
        <Text>{JSON.stringify(this.props.error, null, 2)}</Text>
      </View>
    );
  }
}
