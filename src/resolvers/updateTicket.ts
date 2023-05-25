import axios from 'axios';
import { Issue } from '../types';
import dotenv from 'dotenv';
dotenv.config();


const updateTicket = async (_: any, { key, summary, description }: { key: string; summary?: string; description?: string }): Promise<Issue> => {
  const response = await axios.put(
    `https://jira.poly.com/rest/api/2/issue/${key}`,
    {
      fields: {
        summary,
        description,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.JIRA_TOKEN}`,
      },
    },
  );
  const data: any = response.data;
  return data?.fields;
};

export default { updateTicket };
