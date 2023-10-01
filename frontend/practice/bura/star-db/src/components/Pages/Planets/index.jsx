import { Component } from 'react';

import ErrorBoundry from '../../ErrorBoundry';
import { PlanetList } from '../../ItemList';
import PlanetDetails from '../../Details/Planet';

import Row from '../../Row';

import './index.css';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null,
    visibleItem: false
  };

  visibleItem = () => {
    this.setState({
      visibleItem: true
    });
  };

  onItemSelected = (selectedItem) => this.setState({ selectedItem });

  render() {

    const { selectedItem, visibleItem } = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={ <PlanetList OnItemSelected = { this.onItemSelected } visibleItem={ this.visibleItem }/> }
          right={ <PlanetDetails itemId= { selectedItem } visibleItem= { visibleItem } /> }
        />
      </ErrorBoundry>
    );
  }
};
