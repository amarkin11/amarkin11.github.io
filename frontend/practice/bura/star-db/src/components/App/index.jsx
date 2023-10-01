import { Component } from 'react';

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import { SwapiServiceProvider } from '../../contextApi';
import SwapiService from '../../services/Swapi';

import ErrorBoundry from '../ErrorBoundry';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../Pages/People';
import PlanetsPage from '../Pages/Planets';
import StarshipsPage from '../Pages/Starships';

import StarshipDetails from '../Details/Starship';

import './index.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    const DetailsWrapper = () => {
      const { id } = useParams();
      return <StarshipDetails itemId= { id } visibleItem= { true } dummy={ false }/>
    };

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={ this.swapiService }>
          <Router>
            <div className='content'>
              <Header />
              <RandomPlanet />
              <Routes>

                <Route path='/' element={ <h2>Welcome to Star DB</h2> }/>
                <Route path='/people/:id?' element={ <PeoplePage /> }/>
                <Route path='/planets' element={ <PlanetsPage /> }/>
                <Route path='/starships' element={ <StarshipsPage /> }/>
                <Route path='/starships/:id' element={ <DetailsWrapper /> }/>
                <Route path='*' element={ <h2>This page not found!</h2> }/>
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  };
};


