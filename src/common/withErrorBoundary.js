/**
 * @author Hinagiku Soranoba <soranoba@gmail.com>
 * @license MIT
 */
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function displayName(Component) {
  return Component.displayName || Component.name;
}

/**
 * It wrap Component with ErrorBoundary.
 * It render ErrorComponent, when error raised.
 *
 * @param {!ReactElement} Component
 * @param {!ReactElement} ErrorComponent It should handle info and error in props.
 */
export default (Component, ErrorComponent) => {
  return class extends React.Component {
    static displayName = `withErrorBoundary(${displayName(Component)}, ${displayName(
      ErrorComponent
    )})`;
    render(props) {
      return (
        <ErrorBoundary component={ErrorComponent}>
          <Component {...props} />
        </ErrorBoundary>
      );
    }
  };
};
