import { getLogger } from "../../../utils/logger";
import { Resolvers } from "../../../generated/graphql-types";

const logger = getLogger(__dirname);

export const mealsResolvers: Resolvers = {
  Query: {
    async fetchAllMeals(_, __, { dataSources: { mealsService } }) {
      return await mealsService.fetchAllMeals();
    },
  },
};
