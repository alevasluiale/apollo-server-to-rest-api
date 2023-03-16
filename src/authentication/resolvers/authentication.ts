import { Resolvers } from "../../generated/graphql-types";
import { getLogger } from "../../utils/logger";

const logger = getLogger(__dirname);

export const authenticationResolvers: Resolvers = {
  Mutation: {
    signUp(_, { input }, { dataSources: { authenticationService } }) {
      logger.info(input);
      return authenticationService.signUp(input).then((res: any) => {
        logger.info(res);
        return res;
      });
    },
    signIn(_, { input }, { dataSources: { authenticationService } }) {
      logger.info(input);
      return authenticationService.signIn(input).then((res: any) => {
        logger.info(res);
        return res;
      });
    },
  },
};
