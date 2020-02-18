import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {


    //Get State from Form
    const projectsContext = useContext(projectContext);
    const { formProject } = projectsContext;

    // State for project
    const [project, setProject] = useState({
        name: ''
    });

    const { name } = project;

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProject = e => {
        e.preventDefault();

        //valid project

        // add state

        //reset form
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">New Project</button>

            <form className="formulario-nuevo-proyecto">
                <input type="text" className="input-text" placeholder="Project Name" name="name" value={name} onChange={onChangeProject} />
                <input type="submit" className="btn btn-block btn-primario" value="Add Project" onSubmit={onSubmitProject}/>
            </form>
        </Fragment>
    )
}

export default NewProject
