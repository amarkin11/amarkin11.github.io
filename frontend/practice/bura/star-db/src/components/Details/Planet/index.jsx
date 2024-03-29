import withSwapiService from "../../../hoc/WithSwapiService";

import ItemDetails, { Record } from "../../ItemDetails";

const PlanetDetails = (props) => {

  return(
    <ItemDetails {...props}>
      <Record field='population' label='Population'></Record>
      <Record field='rotationPeriod' label='Rotation Period'></Record>
      <Record field='diameter' label='Diameter'></Record>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
