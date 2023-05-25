import search from './search';
import getProjects from './getProjects';
import getTicket from './getTicket'; // Updated import
import updateTicket from './updateTicket';
import getIssue from './getIssue';


export const resolvers = {
  Query: {
    issues: search.searchTickets,
    searchTickets: search.searchTickets,
    getProjects: getProjects.getProjects,
    getTicket: getTicket.getTicket,
    getIssue: getIssue.getIssue,
  },
  Mutation: {
    updateTicket: updateTicket.updateTicket,
  },
};
