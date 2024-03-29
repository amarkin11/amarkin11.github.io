import { Component } from 'react';

import PropTypes from 'prop-types';

import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/Swapi';
import Spinner from '../Spinner';

import './index.css';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  SwapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*18) + 2;
    this.SwapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {

    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMsg = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={ planet }/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorMsg }
        { spinner }
        { content }
      </div>
    );
  };
};

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return(
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=''
      />
      <div>
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </>
  )
};
