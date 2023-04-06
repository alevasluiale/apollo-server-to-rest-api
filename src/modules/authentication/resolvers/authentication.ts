import { Resolvers } from "../../../generated/graphql-types";
import { getLogger } from "../../../utils/logger";

const logger = getLogger(__dirname);

export const authenticationResolvers: Resolvers = {
  Query: {
    async isUserAuthenticated(
      _,
      { userName },
      { dataSources: { authenticationService } }
    ) {
      return await authenticationService.authenticateUser(userName);
    },
  },
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
