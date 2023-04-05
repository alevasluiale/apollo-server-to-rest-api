import { Resolvers } from "../../../generated/graphql-types";
import { getLogger } from "../../../utils/logger";

const logger = getLogger(__dirname);

export const restaurantsResolvers: Resolvers = {
  Query: {
    async fetchAllRestaurants(_, __, { dataSources: { restaurantsService } }) {
      return await restaurantsService.fetchAllRestaurants();
    },
  },
  Mutation: {
    addRestaurant(
      _,
      { input, userId },
      { dataSources: { restaurantsService } }
    ) {
      logger.info(input, userId);
      return restaurantsService.addRestaurant(input, userId);
    },
  },
};
