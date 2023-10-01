// import { Component } from 'react';
import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import ErrorBoundry from '../../ErrorBoundry';
import { PersonList } from '../../ItemList';
import PersonDetails from '../../Details/Person';

import Row from '../../Row';

import './index.css';

const PeoplePage = () => {
  const [visibleItem, setVisibleItem] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <ErrorBoundry>
      <Row
        left={ <PersonList OnItemSelected = { (itemId) => navigate(`/people/${itemId}`) } visibleItem={ () => setVisibleItem(true) }/> }
        right={ <PersonDetails itemId= { id } visibleItem= { visibleItem } /> }
      />
    </ErrorBoundry>
  )
};

export default PeoplePage;

// export default class PeoplePage extends Component {

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
//           left={ <PersonList OnItemSelected = { this.onItemSelected } visibleItem={ this.visibleItem }/> }
//           right={ <PersonDetails itemId= { selectedItem } visibleItem= { visibleItem } /> }
//         />
//       </ErrorBoundry>
//     );
//   }
// };
