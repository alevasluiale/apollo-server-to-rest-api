import { ApolloServer } from "apollo-server-express";
import { getDataSources } from "./data-sources/data-sources";
import { typeDefs } from "./typeDefs";
import { authenticationResolvers } from "./authentication/resolvers/authentication";

export const server = new ApolloServer({
  typeDefs,
  resolvers: [authenticationResolvers],
  dataSources: getDataSources,
});
