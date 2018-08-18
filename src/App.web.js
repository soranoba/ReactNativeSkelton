import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header, Content, Container } from 'native-base';
import withErrorBoundary from './common/withErrorBoundary';
import ErrorDisplayScreen from './example/ErrorDisplayScreen';
import FontExample from './example/FontExample';
import ErrorThrowScreen from './example/ErrorThrowScreen';

export default class App extends React.Component {
  render() {
    const routes = [
      {
        path: '/',
        exact: true,
        title: 'Home',
        component: withErrorBoundary(FontExample, ErrorDisplayScreen),
      },
      {
        path: '/errors',
        title: 'Error',
        component: withErrorBoundary(ErrorThrowScreen, ErrorDisplayScreen),
      },
    ];
    return (
      <Router>
        <Container>
          <Header>
            {routes.map(route => (
              <Link key={route.path} to={route.path}>
                {route.title}
              </Link>
            ))}
          </Header>
          <Content>
            {routes.map(route => (
              <Route
                exact={route.exact || false}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Content>
        </Container>
      </Router>
    );
  }
}
