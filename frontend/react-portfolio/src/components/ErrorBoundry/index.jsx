import React, { Component } from 'react';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children;
  }
};

const ErrorIndicator = () => {
  return <p className="text text--xl text--center">Ой, что-то пошло не так...</p>
};

export {ErrorIndicator};
