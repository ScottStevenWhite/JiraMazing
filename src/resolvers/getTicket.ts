import axios from 'axios';
import { Issue } from '../types';
import dotenv from 'dotenv';

dotenv.config();

const getTicket = async (_: any, { name, projectKey }: { name: string; projectKey: string }): Promise<Issue[]> => {
  const response = await axios.get(`https://jira.poly.com/rest/api/2/search?jql=project=LENS`, {
    headers: {
      Authorization: `Bearer ${process.env.JIRA_TOKEN}`,
    },
  });
  const data: any = response.data;
  const issues = data?.issues?.map(({ key: k, id: i }: { key: string, id: string }) => ({ key: k, id: i }));
  return issues;
};

export default { getTicket };