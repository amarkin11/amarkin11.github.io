import React, { Component } from 'react';

import Spinner from '../Spinner';

import './index.css';

export default class ItemDetails extends Component {

  static defaultProps = {
    dummy: true
  };

  state = {
    item: null,
    img: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {

    if (this.props.itemId !== prevProps.itemId) {

      if(!this.props.itemId) {
        this.resetState();
        return;
      }

      this.updateLoading();
      this.updateItem();
    }
  };

  resetState() {

    this.setState({
      item: null,
      loading: false
    });
  };

  updateLoading() {

    this.setState({
      loading: true
    });
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          img: getImageUrl(item),
          loading: false
        })
      });
  };

  render() {

    const { item, img, loading } = this.state;
    const childrens = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { item });
    });

    console.log(loading);

    const dummy = !item && !loading ? <div className="item-details card">Select a person from a list</div> : null;
    const spinner = loading ? <Spinner /> : null;
    const content =
      !(loading || !item) ?
        <CardDetail item={ item }  image={ img } children={ childrens }/> :
        null;

    // if( !person ) {
    //   return <div className="item-details card">Select a person from a list</div>;
    // }

    // const content = loading ? <Spinner /> : <CardDetail person={ person } />;
    if (!this.props.visibleItem) {
      return;
    }

    return (
      <>
        { this.props.dummy && dummy }
        {/* { dummy } */}
        { spinner }
        { content }
      </>
    )
  }
};

const CardDetail = ({ item, image, children }) => {

  const { name } = item;

  return (
    <div className="item-details card">
      <img className="item-image"
        src={ image }
        alt=''
      />

      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          { children }
        </ul>
      </div>
    </div>
  )
};

const Record = ({ item, field, label }) => {

  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};
