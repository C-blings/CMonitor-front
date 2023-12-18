import React, {FormEventHandler, useState} from 'react';
import Input from "../moleculas/input";
import Button from "../moleculas/button";
import {GetLogs, Log} from "../../repositories/LogsRepository";
import {
    LogPanel,
    LogPanelBackground,
    LogText,
    SearchBarWrapper
} from "../styles/components/search_bar_styles";


const SearchBar = ({setLogs}: {setLogs: Function}) => {
    let [projectName, setProjectName] = useState("")

    const onProjectNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setProjectName(event.currentTarget.value);
    }

    return <>
        <SearchBarWrapper>
            <Input placeholder="project name" onChange={onProjectNameChange}/>
            <Input placeholder="log parameters" onChange={() => {
            }}/>
            <Button text="Search" onClick={async () => {
                await GetLogs(projectName).then(data => {
                    setLogs(data.data);
                });
            }}/>
        </SearchBarWrapper>
    </>;
}

export default SearchBar;