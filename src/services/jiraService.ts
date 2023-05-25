import axios from 'axios';
import { Project, Issue } from '../types';
import dotenv from 'dotenv';

dotenv.config();

  const JiraService = {
    async fetchProjects(): Promise<Project[]> {
      const response = await axios.get(`${process.env.JIRA_ENDPOINT}/rest/api/2/project`, {
        headers: {
          Authorization: `Bearer ${process.env.JIRA_TOKEN}`,
        },
      });
      return response.data;
    },

    async fetchIssue(): Promise<any> {
      const response = await axios.get(`${process.env.JIRA_ENDPOINT}/rest/api/2/issue/LENS-9789`, {
        headers: {
          Authorization: `Bearer ${process.env.JIRA_TOKEN}`,
        },
      });
      return response.data;
    }
};

  export default JiraService;