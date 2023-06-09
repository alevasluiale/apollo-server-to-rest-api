import { ApolloServer } from "apollo-server-express";
import { getDataSources } from "./data-sources/data-sources";
import { typeDefs } from "./typeDefs";
import { authenticationResolvers } from "./modules/authentication/resolvers/authentication";
import { mealsResolvers } from "./modules/meals/resolvers/meals";
import { getLogger } from "./utils/logger";
import { restaurantsResolvers } from "./modules/restaurants/resolvers/restaurants";

const logger = getLogger(__dirname);

export const server = new ApolloServer({
  typeDefs,
  resolvers: [authenticationResolvers, restaurantsResolvers, mealsResolvers],
  dataSources: getDataSources,
  context: (opt) => {
    return { ...opt };
  },
});
