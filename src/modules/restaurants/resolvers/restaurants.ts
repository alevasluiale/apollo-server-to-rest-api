import { Resolvers } from "../../../generated/graphql-types";
import { getLogger } from "../../../utils/logger";

const logger = getLogger(__dirname);

export const restaurantsResolvers: Resolvers = {
  Mutation: {
    addRestaurant(_, { input }, { dataSources: restaurantsService }) {
      logger.info(input);
      return restaurantsService.addRestaurant(input);
    },
  },
};
