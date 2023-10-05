import React from 'react';

// import { useLocation  } from "react-router-dom";

import { connect } from 'react-redux';
import {
  onSearchChange,
  onSortChange,
  onFilterChange,
  onResetSort
} from '../../actions';

import Search from '../Search';

const ToolsPanel = ({
  loading,
  term,
  sort,
  filter,
  onSearchChange,
  onSortChange,
  onFilterChange,
  onResetSort }) => {

  // const { pathname } = useLocation(),
  //       isProjectsPage = pathname === '/projects',
  //       isReactProjectsPage = pathname === '/projects-react';

  const buttons = [
    {title: 'По годам', name: 'year'},
    {title: 'По названию', name: 'name'}
  ];

  const filters = [
    {name: 'all', label: 'All'},
    {name: 'mpa', label: 'Multi Page Application'},
    {name: 'landing', label: 'Landing Page'},
    {name: 'spa', label: 'Single Page Application'}
  ];

  const renderButtons = buttons.map(({title, name}, i) => {
    const clazz = (sort === name) ? ' active' : '';

    return(
      <button
        className={`btn btn--border btn--sort${clazz}`}
        onClick={() => onSortChange(name)}
        key={100 + i}
      >{title}</button>
    )
  });

  const renderFilters = filters.map(({name, label}, i) => {
    const clazz = (filter === name) ? 'active' : null;

    return(
      <button
        className={`btn btn--border ${clazz}`}
        onClick={() => onFilterChange(name)}
        key={100 + i}
      >{label}</button>
    )
  });

  return(
    !loading &&
    <>
      <div className="tools-panel">
        <div className="tools-panel__row">
          <Search
              term={term}
              onSearchChange={(term) => onSearchChange(term)}
            />
        </div>
        <div className="tools-panel__row">
          <div className="filters">
            { renderButtons }
            <button
              className="btn btn--border"
              onClick={() => onResetSort()}
            >Сбросить</button>
          </div>
        </div>
        <div className="tools-panel__row">
          <div className="filters">
            { renderFilters }
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({projectsList: {loading, term, sort, filter}}) => {
  return {
    loading,
    term,
    sort,
    filter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (term) => dispatch(onSearchChange(term)),
    onSortChange: (sort) => dispatch(onSortChange(sort)),
    onFilterChange: (filter) => dispatch(onFilterChange(filter)),
    onResetSort: () => dispatch(onResetSort())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolsPanel);
