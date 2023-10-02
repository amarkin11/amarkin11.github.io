import React from 'react';

// import { connect } from 'react-redux';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

import { ProjectServiceProvider } from '../ProjectsServiceContext';
import ProjectsServices from '../../services/Projects';

import BtnMenu from '../BtnMenu';
import MainContent from '../MainContent';
import Footer from '../Footer';

const projectsServices = new ProjectsServices();

const App = () => {
  return(
    <HashRouter>
      <BtnMenu />
      <ProjectServiceProvider value={projectsServices}>
        <MainContent />
      </ProjectServiceProvider>
      <Footer />
    </HashRouter>
  )
};

export default App;
