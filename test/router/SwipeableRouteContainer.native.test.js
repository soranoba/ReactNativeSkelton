import React from 'react';
import renderer from 'react-test-renderer';
import SwipeableRouteContainer from '/router/SwipeableRouteContainer.native';
import { StaticRouter, Route } from 'react-router';
import { View } from 'react-native';

describe('SwipeableRouteContainer', () => {
  const ComponentA = () => <View style={{ backgroundColor: 'red' }} />;
  const ComponentB = () => <View style={{ backgroundColor: 'blue' }} />;
  const ComponentC = () => <View style={{ backgroundColor: 'green' }} />;

  const JSX = location => (
    <StaticRouter location={location} context={{}}>
      <SwipeableRouteContainer>
        <Route path="/a" component={ComponentA} />
        <Route path="/b" component={ComponentB} />
        <Route path="/c" component={ComponentC} />
      </SwipeableRouteContainer>
    </StaticRouter>
  );

  it('renders currectly', () => {
    const rendered = renderer.create(JSX('/a')).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('renders currectly, after onLayout called', () => {
    const wrapper = renderer.create(JSX('/a'));
    wrapper
      .toJSON()
      .props.onLayout({ nativeEvent: { layout: { x: 0, y: 22, width: 200, height: 400 } } });
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders correctly, after transitioning from `/a` to `/c`', () => {
    const wrapper = renderer.create(JSX('/a'));
    wrapper
      .toJSON()
      .props.onLayout({ nativeEvent: { layout: { x: 0, y: 22, width: 200, height: 400 } } });
    wrapper.update(JSX('/c'));
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders correctly, after transitioning from `/c` to `/a`', () => {
    const wrapper = renderer.create(JSX('/c'));
    wrapper
      .toJSON()
      .props.onLayout({ nativeEvent: { layout: { x: 0, y: 22, width: 200, height: 400 } } });
    wrapper.update(JSX('/a'));
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
