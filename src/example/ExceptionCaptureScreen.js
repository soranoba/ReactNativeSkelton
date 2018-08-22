import React from 'react';
import { View, Button, Text } from 'react-native';
import PropTypes from 'prop-types';
import ExceptionCapture from '../common/ExceptionCapture';

class ExceptionDisplaySccreen extends React.Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };
  render() {
    return (
      <View>
        <Text>{this.props.error.toString()}</Text>
        <Text>{this.props.error.stack}</Text>
      </View>
    );
  }
}

export default class ExceptionCaptureScreen extends React.Component {
  render() {
    return (
      <ExceptionCapture component={ExceptionDisplaySccreen}>
        <View>
          <Button title="crash" onPress={() => this.undefined()} />
        </View>
      </ExceptionCapture>
    );
  }
}
