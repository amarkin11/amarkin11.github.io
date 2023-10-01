// import { Component } from 'react';

import { useNavigate } from 'react-router-dom';

import ErrorBoundry from '../../ErrorBoundry';
import { StarshipList } from '../../ItemList';
// import StarshipDetails from '../../Details/Starship';

// import Row from '../../Row';

import './index.css';


const StarshipsPage = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundry>
      <StarshipList
        OnItemSelected = { (itemId) => navigate(itemId) }
        visibleItem={ () => false }
      />
    </ErrorBoundry>
  )
};

export default StarshipsPage;

// export default class StarshipsPage extends Component {

//   state = {
//     selectedItem: null,
//     visibleItem: false
//   };

//   visibleItem = () => {
//     this.setState({
//       visibleItem: true
//     });
//   };

//   onItemSelected = (selectedItem) => this.setState({ selectedItem });

//   render() {

//     const { selectedItem, visibleItem } = this.state;

//     return (
//       <ErrorBoundry>
//         <Row
//           left={ <StarshipList OnItemSelected = { this.onItemSelected } visibleItem={ this.visibleItem }/> }
//           right={ <StarshipDetails itemId= { selectedItem } visibleItem= { visibleItem } /> }
//         />
//       </ErrorBoundry>
//     );
//   }
// };
