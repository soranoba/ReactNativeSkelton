import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import ErrorBoundary from '/common/ErrorBoundary';

describe('ErrorBoundary', () => {
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
    <ErrorBoundary component={ErrorComponent}>
      <Component />
    </ErrorBoundary>
  );

  it('renders currectly', () => {
    const wrapper = renderer.create(JSX);
    expect(wrapper.toJSON()).toMatchSnapshot();

    wrapper.getInstance().componentDidCatch(new Error('message'), { info: 'infoMessage' });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
