import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECTS_TOTAL,
  SEARCH_PROJECTS,
  SORT_PROJECTS,
  FILTER_PROJECTS,
  RESET_SORT_PROJECTS,
  TOGGLE_MENU
} from './actionTypes';

const projectsRequested = () => {
  return {
    type: FETCH_PROJECTS_REQUEST
  }
};

const projectsLoaded = (payload) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload
  }
};

const projectsError = (payload) => {
  return {
    type: FETCH_PROJECTS_FAILURE,
    payload
  }
};

const fetchProjects = (getData, dispatch) => () => {
  dispatch(projectsRequested());
  getData
    .then((data) => dispatch(projectsLoaded(data)))
    .catch((err) => dispatch(projectsError(err)));
};

const projectsTotal = (payload) => {
  return {
    type: FETCH_PROJECTS_TOTAL,
    payload
  }
};

const fetchProjectsTotal = (projectsServices, dispatch) => () => {
  projectsServices
    .getTotalProjects()
    .then((data) => dispatch(projectsTotal(data)))
};

const onSearchChange = (payload) => {
  return {
    type: SEARCH_PROJECTS,
    payload
  }
};

const onSortChange = (payload) => {
  return {
    type: SORT_PROJECTS,
    payload
  }
};

const onFilterChange = (payload) => {
  return {
    type: FILTER_PROJECTS,
    payload
  }
};

const onResetSort = () => {
  return {
    type: RESET_SORT_PROJECTS
  }
};

const toggleMenu = (payload) => {
  return {
    type: TOGGLE_MENU,
    payload
  }
};

export {
  fetchProjects,
  fetchProjectsTotal,
  onSearchChange,
  onSortChange,
  onFilterChange,
  onResetSort,
  toggleMenu
};
