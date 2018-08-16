import React from 'react';
import PropTypes from 'prop-types';
/**
 * ErrorBoundary
 * see: https://reactjs.org/docs/error-boundaries.html
 */
export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    component: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }
  render() {
    if (this.state.hasError) {
      const Component = this.props.component;
      return <Component info={this.state.info} error={this.state.error} />;
    }
    return this.props.children;
  }
}
