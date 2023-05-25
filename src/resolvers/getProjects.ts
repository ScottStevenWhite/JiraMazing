import { Issue } from '../types';
import JiraService from '../services/jiraService';

const getProjects = async (_: any): Promise<any> => {
    const data = await JiraService.fetchProjects();
    return data;
};

export default { getProjects };