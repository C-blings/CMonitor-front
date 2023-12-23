import axios from 'axios'

export interface Project{
    projectName: string
}

export const GetProjects = async () => {
    const url = `http://127.0.0.1:8090/get-projects`;

    return await axios.get<Project[]>(
        url,
        {
            headers: {
                Accept: 'application/json',
            },
        },
    );
}