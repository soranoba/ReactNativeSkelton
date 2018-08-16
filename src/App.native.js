import React from 'react';
import { StatusBar, SafeAreaView, Platform, View, Text } from 'react-native';
import { NativeRouter as Router, Route } from 'react-router-native';
import { Container, Footer, FooterTab, Icon } from 'native-base';
import PropTypes from 'prop-types';
import SwipeableRouteContainer from './router/SwipeableRouteContainer';
import applicationRoutes from './router/applicationRoutes';
import { MaterialDesignColors, AppleColors } from './common/Colors';
import SelectableLink from './router/SelectableLink';

/**
 * Tab of bottom navigation
 */
class NavigationTab extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  };

  render() {
    const { title, iconName, selected } = this.props;
    const style =
      Platform.OS === 'android'
        ? selected
          ? MaterialDesignColors.blue500
          : MaterialDesignColors.gray500
        : selected
          ? AppleColors.blue
          : { color: 'gray' };
    return (
      <View style={{ padding: 5, alignItems: 'center' }}>
        <Icon type="MaterialIcons" name={iconName} style={style} />
        <Text style={style}>{title}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = applicationRoutes;
    this.linkProps = {
      underlayColor: Platform.OS === 'android' ? MaterialDesignColors.indigo700.color : 'gray',
    };
  }
  render() {
    return (
      <Container>
        <StatusBar />
        <Router>
          <Container>
            <SafeAreaView style={{ flex: 1 }}>
              <SwipeableRouteContainer>
                {this.routes.map(route => (
                  <Route exact={route.exact} key={route.path} path={route.path} component={route.component} />
                ))}
              </SwipeableRouteContainer>
            </SafeAreaView>
            <Footer>
              <FooterTab>
                {this.routes.map(route => (
                  <SelectableLink {...this.linkProps} key={route.path} to={route.path} replace>
                    <NavigationTab iconName={route.iconName} title={route.title} />
                  </SelectableLink>
                ))}
              </FooterTab>
            </Footer>
          </Container>
        </Router>
      </Container>
    );
  }
}
