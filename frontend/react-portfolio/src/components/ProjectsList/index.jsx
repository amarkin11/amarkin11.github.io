import React from 'react';

import { useLocation } from 'react-router-dom';

const ProjectsList = ({projects}) => {
  const { pathname } = useLocation(),
        isReactProjectsPage = pathname === '/projects-react';

  if(!projects.length) {
    return <p className="text text--xl">Нет подходящих проектов :(</p>;
  }

  return(
    <>
      { isReactProjectsPage &&
        <p className="text text--xs">*Все React-проекты сделаны исключительно в рамках изучения библиотеки.</p>
      }
      <div className="projects">
        {
          projects.map(({id, link, img, title}) => {
            return(
              <ProjectsItem
                link={link}
                img={img}
                title={title}
                key={id}
              />
            )
          })
        }
      </div>
    </>

  );
};

const ProjectsItem = ({link, img, title}) => {

  return(
    <div className="projects__item">
      <a className="projects__link" href={link} target="_blank"></a>
      <div className="projects__img">
        <img className="cover" src={img} alt=""/>
      </div>
      <h2 className="projects__title">{title}</h2>
    </div>
  )
};

export default ProjectsList;
