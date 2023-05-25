import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const schema = loadSchemaSync('src/graphql/schema.graphql', {
  loaders: [
    new GraphQLFileLoader(),
  ],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const server = new ApolloServer({ schema: schemaWithResolvers });

(async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
})();


app.listen(process.env.PORT || 4001, () => {
  console.log(`Server is running on port ${process.env.PORT || 4001}`);
});