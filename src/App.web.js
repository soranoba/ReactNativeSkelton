import React from 'react';
import { Route, Link } from 'react-router-dom';
import Router from 'react-router-dom/BrowserRouter';
import { Header, Container } from 'native-base';
import applicationRoutes from './router/applicationRoutes';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Header>
            {applicationRoutes.map(route => (
              <Link key={route.path} to={route.path}>
                {route.title}
              </Link>
            ))}
          </Header>
          {applicationRoutes.map(route => (
            <Route
              exact={route.exact || false}
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Container>
      </Router>
    );
  }
}
