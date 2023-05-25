# Jiramazing

<img src="logo.png" alt="Logo" width="200" height="200" style="float: right;">

Jiramazing is a Jira manager that is integrated with Open AI. It allows you to search and update Jira tickets using GraphQL queries and mutations. 

## Installation
Before running the application, make sure that you have Node.js and yarn installed in your system. To install the application, follow these steps:

1. Clone the repository `git clone https://github.com/<username>/jiramazing.git`
2. Change directory `cd jiramazing`
3. Install dependencies `yarn install`
4. Create `.env` file and add your Jira token `JIRA_TOKEN=<your_token>`
5. Start the server `yarn start`

## Usage
Once the server is running, you can make GraphQL queries and mutations using any GraphQL client or playground. The GraphQL endpoint is `http://localhost:4001/graphql`. 

**Queries:**

- `issues`: Retrieves a list of Jira issues.
- `searchTickets(name: String!, projectKey: String!)`: Searches for Jira tickets assigned to a specific person in a specific project.
- `getTicket(key: String!)`: Retrieves a specific Jira ticket by its key.

**Mutations:**

- `updateTicket(key: String!, summary: String, description: String)`: Updates a specific Jira ticket's summary and/or description by its key.

## Project Structure
```
jiramazing/
├── graphql/
│   └── schema.graphql
├── src/
│   ├── resolvers/
│   │   ├── search.ts
│   │   ├── getTicket.ts
│   │   ├── updateTicket.ts
│   │   └── index.ts
│   ├── index.ts
│   └── utils.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── yarn.lock
```


- `graphql/`: Contains the schema, queries, mutations, and fragments for the GraphQL API.
- `src/`: Contains the source code for the application.
- `src/resolvers/`: Contains the resolvers for the GraphQL API.
- `src/index.ts`: Starts the server and initializes the GraphQL API.
- `.env`: Contains the Jira token for the application.
- `package.json`: Contains the dependencies and scripts for the application.
- `tsconfig.json`: Configures the TypeScript compiler.
- `yarn.lock`: Contains the exact version of the dependencies used in the application.

## Contributing
If you find any issues with the application or want to add new features, feel free to create an issue or submit a pull request. We welcome all contributions!

## License
Jiramazing is licensed under the MIT license. See the LICENSE file for more details.

