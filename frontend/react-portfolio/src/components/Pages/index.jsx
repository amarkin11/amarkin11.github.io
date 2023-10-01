import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';

import { compose } from '../../utils';
import withProjectsService from '../../hoc/WithProjectsService';

import ProjectsList from '../ProjectsList';
import Spinner from '../Spinner';
import { ErrorIndicator } from '../ErrorBoundry';

class ProjectsContainer extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  };

  search(projects, term) {
    if(term === '') return projects;

    return projects.filter((project) => project.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };

  sort(projects, sort) {
    switch(sort) {
      case 'year':
        return [...projects].sort((a, b) => b.year - a.year);
      case 'name':
        return [...projects].sort((a, b) => {
          const _split = (el) => el.title.toUpperCase().split(' ');
          const [nameA, nameB] = [_split(a), _split(b)];

          if(nameA > nameB) return 1;

          if (nameB > nameA) return -1;

          return 0;
        });
      default:
        return projects;
    }
  };

  filter(projects, filter) {
    switch(filter) {
      case 'all':
        return projects;
      case 'mpa':
        return [...projects].filter((project) => project.view === filter);
      case 'landing':
        return [...projects].filter((project) => project.view === filter);
      case 'spa':
        return [...projects].filter((project) => project.view === filter);
      default:
        return projects;
    }
  };

  render() {
    const { projects, loading, error, term, sort, filter } = this.props;
    const sortProjects = this.sort(this.search(projects, term), sort);
    const visibleProjects = this.filter(sortProjects, filter);

    if(loading) return <Spinner />

    if(error) return <ErrorIndicator />

    return <ProjectsList projects={visibleProjects} />
  }
};

const mapStateToProps = ({projectsList: {projects, loading, error, term, sort, filter}}) => {
  return {
    projects, loading, error, term, sort, filter
  }
};

const mapHomePageToProps = (dispatch, {projectsServices}) => {
  return {
    fetchProjects: fetchProjects(projectsServices.getAllProjects(), dispatch)
  }
};

const mapProjectsPageToProps = (dispatch, {projectsServices}) => {
  return {
    fetchProjects: fetchProjects(projectsServices.getSpecialProjects(), dispatch)
  }
};

const mapProjectsReactPageToProps = (dispatch, {projectsServices}) => {
  return {
    fetchProjects: fetchProjects(projectsServices.getReactProjects(), dispatch)
  }
};

const HomePage = compose(
  withProjectsService(),
  connect(mapStateToProps, mapHomePageToProps)
)(ProjectsContainer);

const ProjectsPage = compose(
  withProjectsService(),
  connect(mapStateToProps, mapProjectsPageToProps)
)(ProjectsContainer);

const ProjectsReactPage = compose(
  withProjectsService(),
  connect(mapStateToProps, mapProjectsReactPageToProps)
)(ProjectsContainer);

export {
  HomePage,
  ProjectsPage,
  ProjectsReactPage
};
