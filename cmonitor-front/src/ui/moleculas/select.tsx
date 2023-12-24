import {GetProjects, Project} from "../../repositories/ProjectsRepository";
import {ChangeEventHandler, ReactEventHandler} from "react";
import {SelectComponent} from "../styles/moleculas/select_styles";

const Select = ({projects, onChange} : {projects: Project[], onChange: ReactEventHandler<HTMLSelectElement>}) => {
    return <SelectComponent onChange={onChange}>
        <option></option>
        {
            projects.map(project => {
                return <option>{project.projectName}</option>
            })
        }
    </SelectComponent>
}

export default Select