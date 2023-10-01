import withData from '../../hoc/WithData';
import withSwapiService from '../../hoc/WithSwapiService';
import withChildFunction from '../../hoc/WithChild';
import compose from '../../hoc/Compose';

import './index.css';

const ItemList = (props) => {

  const { data, OnItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        onClick={ () => OnItemSelected(id) }
        key={ id }
      >
        { label }
      </li>
    )
  });

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
};

const renderName = ({ name }) => <span>{ name }</span>;

const mapPersonMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getAllPeople,
  }
};

const mapPlanetMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getAllPlanets,
  }
};

const mapStarshipMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getAllStarships,
  }
};

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};
