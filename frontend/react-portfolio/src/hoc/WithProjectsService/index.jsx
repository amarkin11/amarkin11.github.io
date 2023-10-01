import React from 'react';

import { ProjectServiceConsumer } from "../../components/ProjectsServiceContext";

const withProjectsService = () => (Wrapped) => {
  return (props) => {

    return (
      <ProjectServiceConsumer>
        {
          (projectsServices) => {
            return(
              <Wrapped {...props} projectsServices={projectsServices}/>
            )
          }
        }
      </ProjectServiceConsumer>
    )
  }
};

export default withProjectsService;
