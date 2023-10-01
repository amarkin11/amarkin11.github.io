import { Component } from "react";

import './index.css';

export default class ItemAddForm extends Component {

  state = {
    text: '',
    disable: false
  }

  onChange = (e) => {
    const _value = e.target.value;
    this.setState({
      text: _value,
      disable: (_value === '') ? false : true
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.text);
    this.setState({
      text: '',
      disable: false
    })
  }

  render() {
    const { text, disable } = this.state;

    return (
      <form
        className="item-add-form d-flex"
        onSubmit={ this.onSubmit }
      >
        <input
          className="form-control"
          type="text"
          onChange={ this.onChange }
          value={ text }
          placeholder="what needs to be done"
        />
        <button
          className="btn btn-outline-secondary"
          disabled={ !disable }
        >
          Add Item
        </button>
      </form>
    )
  }
}