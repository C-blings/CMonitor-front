import LabelPanel from "./label_panel";
import SearchBar from "./search_bar";
import React, {useState} from "react";
import {LogPanel, LogPanelBackground, LogText} from "../styles/components/log_styles";

export const App = () => {
    let [logs, setLogs] = useState<[]>([])

    return <>
        <div>
            <LabelPanel/>
            <SearchBar setLogs={setLogs}/>

            {logs.map(log => {
                let properties = Object.getOwnPropertyNames(log);
                return <div>
                    <LogPanelBackground>
                    <LogPanel>
                        {
                            properties.map( prop => {
                                return <LogText>{prop}: {log[prop]}</LogText>;
                            })
                        }
                    </LogPanel>
                    </LogPanelBackground></div>;
            })}
        </div>
    </>
}