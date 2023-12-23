import {GetProjects, Project} from "../../repositories/ProjectsRepository";
import {ChangeEventHandler, ReactEventHandler} from "react";

const Select = ({projects, onChange} : {projects: Project[], onChange: ReactEventHandler<HTMLSelectElement>}) => {
    return <select onChange={onChange}>
        {
            projects.map(project => {
                return <option>{project.projectName}</option>
            })
        }
    </select>
}

export default Select