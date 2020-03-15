import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertContext from "../../context/alerts/alertContext";

const ListProjects = () => {
  //Get projects from State
  const projectsContext = useContext(projectContext);
  const { message, projects, getProjects } = projectsContext;

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  useEffect(() => {
    if (message) {
      showAlert(message.msg, message.cat);
    }

    getProjects();
    // eslint-disable-next-line
  }, [message]);

  //if project have items
  if (projects.length === 0) return <p>No projects</p>;

  return (
    <ul className="listado-proyectos">
      {alert ? <div className={`alerta ${alert.cat}`}>{alert.msg}</div> : null}
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition key={project._id} timeout={300} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
