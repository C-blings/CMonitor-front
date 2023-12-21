import LabelPanel from "./label_panel";
import SearchBar from "./search_bar";
import {LogPanel, LogPanelBackground, LogText} from "../styles/components/search_bar_styles";
import React, {useState} from "react";
import {Log} from "../../repositories/LogsRepository";

export const  App = () => {
    let [logs, setLogs] = useState<Log[]>([])

    return <>
        <div>
            <LabelPanel/>
            <SearchBar setLogs={setLogs}/>

            {logs.map(log => {
                return <LogPanelBackground>
                    <LogPanel>
                        <LogText>{log.dateTime} {log.text}</LogText>
                    </LogPanel>
                </LogPanelBackground>;
            })}
        </div>
    </>
}