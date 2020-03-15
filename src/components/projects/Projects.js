import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import FormTask from "../task/FormTask";
import ListTasks from "../task/ListTasks";
import AuthContext from "../../context/authentication/authContext";

const Projects = () => {
  //get info auth
  const authContext = useContext(AuthContext);
  const { userAuth } = authContext;

  useEffect(() => {
    userAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Bar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
