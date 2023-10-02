import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { HomePage, ProjectsPage, ProjectsReactPage } from '../Pages';

import Header from '../Header';
import MainNav from '../Nav';
import ToolsPanel from '../ToolsPanel';

import { getUrlBase } from '../../utils';

const MainContent = () => {

  return(
    <main className="content">
      <div className="container flex-column">
        <Header />
        <div className="section flex">
          <div className="section__item">
            <MainNav />
          </div>
          <div className="section__item flex-column">
            <ToolsPanel />
            <Routes>
              <Route path={`${getUrlBase()}/`} element={<HomePage />}/>
              <Route path={`${getUrlBase()}/projects`} element={<ProjectsPage />}/>
              <Route path={`${getUrlBase()}/projects-react`} element={<ProjectsReactPage />}/>
              <Route path={`${getUrlBase()}/*`} element={ <h2 className="title">Здесь ничего нет</h2> }/>
            </Routes>
          </div>
        </div>
      </div>
    </main>
  )
};

export default MainContent;
