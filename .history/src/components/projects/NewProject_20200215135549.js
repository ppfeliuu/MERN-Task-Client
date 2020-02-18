import React, { Fragment, useState } from 'react'

const NewProject = () => {

    // State for project
    const [project, setProject] = useState({
        nombre: ''
    });

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">New Project</button>

            <form className="formulario-nuevo-proyecto">
                <input type="text" className="input-text" placeholder="Project Name" name="name" />
                <input type="submit" className="btn btn-block btn-primario" value="Add Project" />
            </form>
        </Fragment>
    )
}

export default NewProject
