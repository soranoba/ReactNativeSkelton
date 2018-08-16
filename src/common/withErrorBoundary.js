import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function displayName(Component) {
  return Component.displayName || Component.name;
}

export default (Component, ErrorComponent) => {
  return class extends React.Component {
    static displayName = `withErrorBoundary(${displayName(Component)}, ${displayName(ErrorComponent)})`;
    render(props) {
      return (
        <ErrorBoundary component={ErrorComponent}>
          <Component {...props} />
        </ErrorBoundary>
      );  
    }
  };
};
