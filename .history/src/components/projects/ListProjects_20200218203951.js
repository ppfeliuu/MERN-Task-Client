import React from 'react'
import Project from './Project'

const ListProjects = () => {

    const projects = [
        {name: 'Tienda Virtual'},
        {name: 'Website'},
        {name: 'Design Web'},
    ]
    return (
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project project={project} />
            ))}
        </ul>
    )
}

export default ListProjects
