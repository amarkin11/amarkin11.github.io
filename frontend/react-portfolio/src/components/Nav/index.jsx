import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { compose, getUrlBase } from '../../utils';
import withProjectsService from '../../hoc/WithProjectsService';

import { fetchProjectsTotal, toggleMenu } from '../../actions';

class MainNav extends Component {
  componentDidMount() {
    this.props.fetchProjectsTotal();
  }

  render() {
    const { all = '...', special = '...', react = '...' } = this.props.total || {},
          { mobileMenu, closeMenu } = this.props;

    const links = [
      {href: `${getUrlBase()}/`, title: 'Все проекты', total: all},
      {href: `${getUrlBase()}/projects`, title: 'Проекты и спецпроекты', total: special},
      {href: `${getUrlBase()}/projects-react`, title: 'React проекты', total: react},
    ];

     const renderNavItems = () => {
      return(
        links.map((link, i) => {
          return <NavLink
            className="nav__item"
            to={link.href}
            key={100 + i}
            onClick={() => closeMenu(false)}
          >
            {`${link.title} (${link.total})`}
          </NavLink>
        })
      );
    };

    const clazz = mobileMenu ? ' active' : '';

    return(
      <div className={`nav${clazz}`}>
        { renderNavItems() }
      </div>
    )
  };
};

const mapStateToProps = ({projectsList: { loading }, projectsTotal, mobileMenu}) => {

  return {
    loading,
    total: projectsTotal,
    mobileMenu
  }
};

const mapDispatchToProps = (dispatch, {projectsServices}) => {
  return {
    fetchProjectsTotal: fetchProjectsTotal(projectsServices, dispatch),
    closeMenu: (active) => dispatch(toggleMenu(active))
  }
};

export default compose(
  withProjectsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MainNav);
