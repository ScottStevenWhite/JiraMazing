import axios from 'axios';
import { Issue } from '../types';
import dotenv from 'dotenv';
dotenv.config();


const searchTickets = async (_: any, { name, projectKey }: { name: string; projectKey: string }): Promise<Issue[]> => {
  const response = await axios.get(`https://jira.poly.com/rest/api/2/search?jql=project=${projectKey}"`, {
    headers: {
      Authorization: `Bearer ${process.env.JIRA_TOKEN}`,
    },
  });
  const data: any = response.data;
  return data?.issues;
};

export default { searchTickets };
