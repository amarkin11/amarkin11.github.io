import { Component } from "react";

import Spinner from '../../components/Spinner';

const withData = (View) => {

  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {

      const { visibleItem, getData } = this.props;
      // const { getData } = this.props;

      getData()
        .then((data) => {
          this.setState({
            data
          });

          visibleItem();
        });
    };

    render() {
      const { data } = this.state;

      if(!data) {
        return <Spinner />
      }

      return <View {...this.props} data={ data }/>;
    }
  };
};

export default withData;
