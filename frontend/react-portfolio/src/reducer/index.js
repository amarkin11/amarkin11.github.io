import updateProjectsList from "./ProjectsList";
import updateProjectsTotal from "./ProjectsTotal";
import updateMobileMenu from "./MobileMenu";

const reducer = (state, action) => {
  return {
    projectsList: updateProjectsList(state, action),
    projectsTotal: updateProjectsTotal(state, action),
    mobileMenu: updateMobileMenu(state, action)
  };
};

export default reducer;
