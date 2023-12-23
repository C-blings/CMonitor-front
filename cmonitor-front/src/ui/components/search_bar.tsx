import React, {ChangeEvent, ChangeEventHandler, Component, ReactEventHandler, useState} from 'react';
import Input from "../moleculas/input";
import Button from "../moleculas/button";
import {GetLogs} from "../../repositories/LogsRepository";
import {SearchBarWrapper} from "../styles/components/search_bar_styles";
import Select from "../moleculas/select";
import {GetProjects, Project} from "../../repositories/ProjectsRepository";

const SearchBar = ({setLogs}: {setLogs: Function}) => {
    let [projectName, setProjectName] = useState<Project>()
    let [projects, setProjects] = useState<Project[]>([]);

    GetProjects().then(data => setProjects(data.data));

    const changeProjects = (event: ChangeEvent<HTMLSelectElement>) => {
        setProjectName({projectName: event.currentTarget.value});
    };

    return <>
        <SearchBarWrapper>
            <Select projects={projects} onChange={changeProjects}/>
            <Input placeholder="log parameters" onChange={() => {}}/>
            <Button text="Search" onClick={async () => {
                if (projectName) {
                    await GetLogs(projectName.projectName).then(data => {
                        setLogs(data.data);
                    });
                }
            }}/>
        </SearchBarWrapper>
    </>;
}

export default SearchBar;