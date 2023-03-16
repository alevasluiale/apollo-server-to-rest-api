import { ApolloServer } from "apollo-server-express";
import { getDataSources } from "./data-sources/data-sources";
import { typeDefs } from "./typeDefs";

export const server = new ApolloServer({
  typeDefs,
  resolvers: [],
  dataSources: getDataSources,
});
