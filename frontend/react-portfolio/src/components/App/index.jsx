import React from 'react';

// import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ProjectServiceProvider } from '../ProjectsServiceContext';
import ProjectsServices from '../../services/Projects';

import BtnMenu from '../BtnMenu';
import MainContent from '../MainContent';
import Footer from '../Footer';

const projectsServices = new ProjectsServices();

const App = () => {
  return(
    <Router>
      <BtnMenu />
      <ProjectServiceProvider value={projectsServices}>
        <MainContent />
      </ProjectServiceProvider>
      <Footer />
    </Router>
  )
};

export default App;
