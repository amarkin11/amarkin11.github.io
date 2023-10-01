import { Component } from "react";

import ErrorBoundry from '../../ErrorBoundry';

import Row from '../../Row';

const WithPage = (List) => {

  return class extends Component {

    state = {
      selectedItem: null,
      // visibleItem: false
    };

    // visibleItem = () => {
    //   this.setState({
    //     visibleItem: true
    //   });
    // };

    onItemSelected = (id) => {

      this.setState({
        selectedItem: id
      })
    };

    render() {

      const leftContent = (
        <List
          OnItemSelected = { this.onItemSelected }
          // visibleItem={ this.visibleItem }
        >
          { ({ name }) => <span>{ name }</span> }
        </List>
      );

      const rightContent = (
        <Details
          itemId= { this.state.selectedItem }
          // visibleItem= { this.state.visibleItem }
        />
      );

      return (
        <ErrorBoundry>
          <Row
            left={ leftContent }
            right={ rightContent }
          />
        </ErrorBoundry>
      );
    }
  };
};

export default WithPage;
