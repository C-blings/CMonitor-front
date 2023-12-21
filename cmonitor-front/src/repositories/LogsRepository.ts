import axios from 'axios'

export interface Log{
    projectName: string;
    dateTime: string;
    text: string;
}

export const GetLogs = async (projectName: string) => {
    let result = "hi"
    const url = `http://127.0.0.1:8090/get-logs?projectName=${projectName}`;

    return await axios.get<JSON[]>(
        url,
        {
            headers: {
                Accept: 'application/json',
            },
        },
    );
}