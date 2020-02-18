import React from 'react'
import Project from './Project'

const ListProjects = () => {

    
    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project project={project} />
            ))}
        </ul>
    )
}

export default ListProjects
