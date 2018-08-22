import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import ExceptionCapture from '/common/ExceptionCapture';

describe('ExceptionCapture', () => {
  const Component = class TestComponent1 extends React.Component {
    render() {
      return <View style={{ backgroundColor: 'red' }} />;
    }
  };
  const ErrorComponent = class TestComponent2 extends React.Component {
    render() {
      return <View style={{ backgroundColor: 'green' }} {...this.props} />;
    }
  };
  const JSX = (
    <ExceptionCapture component={ErrorComponent}>
      <ExceptionCapture component={ErrorComponent}>
        <Component />
      </ExceptionCapture>
    </ExceptionCapture>
  );

  it('renders currectly', () => {
    const wrapper = renderer.create(JSX);
    expect(wrapper.toJSON()).toMatchSnapshot();

    const globalHandler = ErrorUtils.getGlobalHandler();
    globalHandler(new Error('abort'), true);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('set the original errorHandler when component is unmounted', () => {
    const originalErrorHandler = () => {};
    ErrorUtils.setGlobalHandler(originalErrorHandler);

    const wrapper = renderer.create(JSX);
    wrapper.toJSON();
    wrapper.unmount();

    expect(ErrorUtils.getGlobalHandler()).toEqual(originalErrorHandler);
  });
});
