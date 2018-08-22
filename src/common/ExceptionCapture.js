/**
 * @author Hinagiku Soranoba <soranoba@gmail.com>
 * @license MIT
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * It is a Component like ErrorBounday, but it catch javascript exceptions unlike ErrorBounday.
 * You should not use more than one it.
 */
export default class ExceptionCapture extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    component: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { error: null, isFatal: null, hasError: false, originalGlobalHandler: null };
  }
  componentDidMount() {
    const originalGlobalHandler = ErrorUtils.getGlobalHandler();
    ErrorUtils.setGlobalHandler((error, isFatal) => {
      this.setState({ error, isFatal, hasError: true });
    });

    // NOTE: To avoid `react/no-did-mount-set-state`
    (() => {
      this.setState({ originalGlobalHandler });
    })();
  }
  componentWillUnmount() {
    ErrorUtils.setGlobalHandler(this.state.originalGlobalHandler);
  }
  render() {
    if (this.state.hasError) {
      const Component = this.props.component;
      return <Component error={this.state.error} isFatal={this.state.isFatal} />;
    }
    return this.props.children;
  }
}
