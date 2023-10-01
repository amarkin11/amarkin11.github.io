import withSwapiService from "../../../hoc/WithSwapiService";

import ItemDetails, { Record } from "../../ItemDetails";

const PersonDetails = (props) => {

  return(
    <ItemDetails {...props}>
      <Record field='gender' label='Gender'></Record>
      <Record field='eyeColor' label='Eye Color'></Record>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
