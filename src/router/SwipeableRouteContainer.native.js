/**
 * @author Hinagiku Soranoba <soranoba@gmail.com>
 * @license MIT
 */
import React from 'react';
import { View, Animated, PanResponder } from 'react-native';
import { withRouter, Switch } from 'react-router-native';
import PropTypes from 'prop-types';

/**
 * Returns an array of path for children.
 * @param {!Array.<Route>} children
 * @returns {!Array.<String>}
 */
function getRoutePaths(children) {
  return React.Children.map(children, child => child.props.path);
}

/**
 * It is a container view that supports switching Route with swipe.
 * It animated swipe when Route switches.
 *
 * Usage:
 *   <SwipableRouteContainer>
 *     <Route exact key={key} path={path} component={component} />
 *     <Route exact key={key} path={path} component={component} />
 *   </SwipableRouteContainer>
 */
class SwipeableRouteContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,

    // The following props are provide by `withRouter`
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);

    this.onLayout = this.onLayout.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.handlePanResponderMove = this.handlePanResponderMove.bind(this);
    this.handlePanResponderRelease = this.handlePanResponderRelease.bind(this);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
    });

    const location = props.history.location;
    this.state = {
      width: 0,
      height: 0,
      left: new Animated.Value(0),
      animationEnded: false,
      routes: getRoutePaths(props.children),
      anim: null,
      prevLocation: location,
      currentLocation: location,
      prevIndex: null,
      currentIndex: null,
      swipeFired: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { anime: prevAnim, currentLocation: prevLocation } = this.state;
    const currentLocation = nextProps.history.location;
    const routes = getRoutePaths(nextProps.children);

    const prevIndex = routes.indexOf(prevLocation.pathname);
    const currentIndex = routes.indexOf(currentLocation.pathname);

    prevAnim && prevAnim.stop();
    const left = new Animated.Value(0);
    const anim = (() => {
      if (prevIndex === currentIndex) {
        return null;
      } else {
        return Animated.timing(left, {
          toValue: prevIndex > currentIndex ? -1 : 1,
          duration: 500,
          useNativeDriver: true,
        });
      }
    })();
    anim && anim.start(({ finished }) => finished && this.onAnimationEnd());
    this.setState({
      anim,
      left,
      prevLocation,
      currentLocation,
      prevIndex,
      currentIndex,
      animationEnded: false,
      routes,
    });
  }
  onLayout(evt) {
    const { width, height } = evt.nativeEvent.layout;
    this.setState({ width, height });
  }
  onAnimationEnd() {
    this.setState({ animationEnded: true });
  }
  handlePanResponderMove(_, gestureState) {
    const { dx, dy } = gestureState;
    const { currentIndex, routes, swipeFired } = this.state;

    if (swipeFired || dy < -50 || dy > 50) {
      return;
    }

    if (dx < -50 && currentIndex + 1 < routes.length) {
      this.props.history.replace(routes[currentIndex + 1]);
      this.setState({ swipeFired: true });
    } else if (dx > 50 && currentIndex > 0) {
      this.props.history.replace(routes[currentIndex - 1]);
      this.setState({ swipeFired: true });
    }
  }
  handlePanResponderRelease() {
    this.setState({ swipeFired: false });
  }
  render() {
    const { animationEnded, prevIndex, currentIndex, prevLocation, currentLocation } = this.state;
    const transform = [
      {
        translateX: this.state.left.interpolate({
          inputRange: [-1, 1],
          outputRange: [0, -this.state.width * 2],
        }),
      },
    ];

    const currentChildren = <Switch location={currentLocation}>{this.props.children}</Switch>;
    const prevChildren = <Switch location={prevLocation}>{this.props.children}</Switch>;
    const viewStyle = { width: this.state.width };

    return (
      <View style={{ flex: 1 }} onLayout={this.onLayout} {...this.panResponder.panHandlers}>
        <Animated.View
          style={{
            width: this.state.width * 3,
            height: this.state.height,
            flexDirection: 'row',
            transform,
          }}>
          {prevIndex != null && prevIndex > currentIndex ? (
            <View key={currentLocation.pathname} style={viewStyle}>
              {currentChildren}
            </View>
          ) : (
            <View style={viewStyle} />
          )}
          <View key={prevLocation.pathname} style={viewStyle}>
            {animationEnded || prevChildren}
          </View>
          {prevIndex != null && prevIndex < currentIndex ? (
            <View key={currentLocation.pathname} style={viewStyle}>
              {currentChildren}
            </View>
          ) : (
            <View style={viewStyle} />
          )}
        </Animated.View>
      </View>
    );
  }
}

export default withRouter(SwipeableRouteContainer);
