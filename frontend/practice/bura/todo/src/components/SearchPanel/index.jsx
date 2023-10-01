import { Component } from 'react';
import './index.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onChange = (e) => {
    const term = e.target.value;

    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {

    return (
      <input
        className="form-control search-input"
        type='text'
        placeholder='type to search'
        value={ this.state.term }
        onChange={ this.onChange }
      />
    );
  }
};
