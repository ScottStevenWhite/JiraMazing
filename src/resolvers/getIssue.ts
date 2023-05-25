import { Issue } from '../types';
import JiraService from '../services/jiraService';

const getIssue = async (_: any): Promise<Issue> => {
  const data = await JiraService.fetchIssue();
  const result = { id: data.id, key: data.key, summary: data.fields.summary, description: data.fields.description };
  return result;
};

export default { getIssue };
