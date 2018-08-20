import React from 'react';
import { View } from 'react-native';
import withErrorBoundary from '/common/withErrorBoundary';
import { shallow } from 'enzyme';

describe('withErrorBoundary', () => {
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

  it('set displayName', () => {
    expect(withErrorBoundary(Component, ErrorComponent).displayName).toBe(
      'withErrorBoundary(TestComponent1, TestComponent2)'
    );
  });

  it('set props correctly', () => {
    const ErrorBoundary = withErrorBoundary(Component, ErrorComponent);
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper.childAt(0).equals(<Component />)).toBeTruthy();
    expect(wrapper.props().component).toBe(ErrorComponent);
  });
});
